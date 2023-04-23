const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'dudecool',
  database: 'nike_store'
});

// Define a route for getting all customers
app.get('/api/customers', (req, res) => {
  // Use the connection pool to query the database
  pool.query('SELECT * FROM Customers', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

// Define a route for getting all orders
app.get('/api/orders', (req, res) => {
  pool.query('SELECT * FROM Orders', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

// Define a route for getting all products
app.get('/api/products', (req, res) => {
  pool.query('SELECT * FROM Products', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

// Define a route for getting all categories
app.get('/api/categories', (req, res) => {
  pool.query('SELECT * FROM Categories', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
