# 📚 Library API (Express.js + JSON Storage)

A simple RESTful API for managing a library system built with Express.js.
Data is stored in a local JSON file (data/books.json), so added books persist even after restarting the server.

🚀 Features

GET all books or a single book by ID

POST a new book

PUT (update) an existing book

DELETE a book

Data stored in books.json (no database required)

rovic/
│── data/
│   └── books.json      # Stores all books
│── node_modules/
│── package.json
│── server.js           # Express.js API server
