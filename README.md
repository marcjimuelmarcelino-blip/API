# 📚 Library API (Express.js + JSON Storage)

A simple RESTful API for managing a library system built with Express.js.
Data is stored in a local JSON file (data/books.json), so added books persist even after restarting the server.

🚀 Features

GET all books or a single book by ID

POST a new book

PUT (update) an existing book

DELETE a book

Data stored in books.json (no database required)

rovic/marc/daryl
│── data/
│   └── books.json      # Stores all books
│── node_modules/
│── package.json
│── server.js           # Express.js API server

Installation & Setup Guide for Books API
Requirements

Node.js (v14 or higher recommended)

npm (Node Package Manager)

Installation Steps

1.Clone the repository (or download the code):
bash:
*git clone https://github.com/your-username/books-api.git
cd books-api

2.Install dependencies:
*npm install

3.Create data folder and initial data file
*mkdir data
echo "[]" > data/books.json

4.Run the server
*node index.js

5.Access the API
The server runs on port 3000 by default. Open your browser or API client (Postman, curl) to:
*http://localhost:3000/api/books



