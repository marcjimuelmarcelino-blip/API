const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Path to the books.json file
const dataPath = path.join(__dirname, "data", "books.json");

// Helper function: load books from file
function loadBooks() {
  if (!fs.existsSync(dataPath)) {
    return [];
  }
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data || "[]");
}

// Helper function: save books to file
function saveBooks(books) {
  fs.writeFileSync(dataPath, JSON.stringify(books, null, 2));
}

// ROUTES

// Get all books
app.get("/api/books", (req, res) => {
  const books = loadBooks();
  res.json(books);
});

// Get a book by ID
app.get("/api/books/:id", (req, res) => {
  const books = loadBooks();
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// Add a new book
app.post("/api/books", (req, res) => {
  const books = loadBooks();
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    year,
  };

  books.push(newBook);
  saveBooks(books);

  res.status(201).json(newBook);
});

// Update a book
app.put("/api/books/:id", (req, res) => {
  const books = loadBooks();
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });

  const { title, author, year } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.year = year || book.year;

  saveBooks(books);
  res.json(book);
});

// Delete a book
app.delete("/api/books/:id", (req, res) => {
  let books = loadBooks();
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).json({ message: "Book not found" });

  const deletedBook = books.splice(bookIndex, 1);
  saveBooks(books);

  res.json({ message: "Book deleted", book: deletedBook });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
