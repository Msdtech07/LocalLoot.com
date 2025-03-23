// Example JavaScript for interactivity
document.addEventListener("DOMContentLoaded", function () {
    console.log("LocalLoot website loaded");
    // Smooth scrolling for "Learn more" buttons
    document.querySelectorAll(".trade-card .btn").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
    // Form Validation
    document
      .querySelector("#contact form")
      .addEventListener("submit", function (e) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const services = document.getElementById("services").value;
        const budget = document.getElementById("budget").value;
        const message = document.getElementById("message").value;
  
        if (!name || !email || !services || !budget || !message) {
          e.preventDefault();
          alert("Please fill out all fields before submitting.");
        }
      });
      const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'password', // Replace with your MySQL password
    database: 'local_loot'
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Middleware to parse JSON
app.use(express.json());

// Example API endpoint to fetch users
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Example API endpoint to add a user
app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
        if (err) throw err;
        res.json({ message: 'User added successfully', id: result.insertId });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
    // Add any JavaScript functionality here
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  });
  