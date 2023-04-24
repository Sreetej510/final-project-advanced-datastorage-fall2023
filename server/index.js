const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nike_store'
});

app.get('/api/customers', (req, res) => {
  pool.query('SELECT * FROM Customers', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});


app.get('/api/orders', (req, res) => {
  pool.query('SELECT * FROM Orders', (error, results) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.json(results);
    }
  });
});


//getting order details and products by customer name
app.get('/api/order/fullname/:name', (req, res) => {
  const { name } = req.params;
  const query = `
    SELECT o.order_id, o.order_date, o.total_price, c.last_name, c.first_name,
      od.quantity, p.product_name, p.price
    FROM Orders o
    JOIN Customers c ON o.customer_id = c.customer_id
    JOIN Order_Items od ON o.order_id = od.order_id
    JOIN Products p ON od.product_id = p.product_id
    WHERE c.first_name = ? AND c.last_name = ?
  `;
  pool.query(query, name.split(' '), (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

//getting order details and products by customer lastname
app.get('/api/order/lastname/:lastname', (req, res) => {
  const { lastname } = req.params;
  const query = `
    SELECT o.order_id, o.order_date, o.total_price, c.last_name, c.first_name,
      od.quantity, p.product_name, p.price
    FROM Orders o
    JOIN Customers c ON o.customer_id = c.customer_id
    JOIN Order_Items od ON o.order_id = od.order_id
    JOIN Products p ON od.product_id = p.product_id
    WHERE c.last_name = ?
  `;
  pool.query(query, lastname, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

//getting order details and products by customer firstname
app.get('/api/order/firstname/:firstname', (req, res) => {
  const { firstname } = req.params;
  const query = `
    SELECT o.order_id, o.order_date, o.total_price, c.last_name, c.first_name,
      od.quantity, p.product_name, p.price
    FROM Orders o
    JOIN Customers c ON o.customer_id = c.customer_id
    JOIN Order_Items od ON o.order_id = od.order_id
    JOIN Products p ON od.product_id = p.product_id
    WHERE c.first_name = ?
  `;
  pool.query(query, firstname, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

//getting order details and products by customer mobile number
app.get('/api/order/mobile/:mobile', (req, res) => {
  const { mobile } = req.params;
  const query = `
    SELECT o.order_id, o.order_date, o.total_price, c.last_name, c.first_name,
      od.quantity, p.product_name, p.price
    FROM Orders o
    JOIN Customers c ON o.customer_id = c.customer_id
    JOIN Order_Items od ON o.order_id = od.order_id
    JOIN Products p ON od.product_id = p.product_id
    WHERE c.phone_number = ?
  `;
  pool.query(query, mobile, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

//getting order details and products by customer mobile number
app.get('/api/order/email/:email', (req, res) => {
  const { email } = req.params;
  const query = `
    SELECT o.order_id, o.order_date, o.total_price, c.last_name, c.first_name,
      od.quantity, p.product_name, p.price
    FROM Orders o
    JOIN Customers c ON o.customer_id = c.customer_id
    JOIN Order_Items od ON o.order_id = od.order_id
    JOIN Products p ON od.product_id = p.product_id
    WHERE c.email_address = ?
  `;
  pool.query(query, email, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});


// Define a route for getting order and customer data by product ID
app.get('/api/order/product_id/:product_id', (req, res) => {
  const { product_id } = req.params;
  const query = `
    SELECT o.order_id, o.order_date, o.total_price, c.last_name, c.First_Name
    FROM Orders o
    JOIN Customers c ON o.customer_id = c.customer_id
    JOIN Order_Items od ON o.order_id = od.order_id
    WHERE od.product_id = ?
  `;
  // Use the connection pool to query the database
  pool.query(query, [product_id], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});


// Define a route for executing CRUD commands against the database
app.post('/api/execute', (req, res) => {
  const { curd } = req.body;
  // Use the connection pool to execute the command against the database
  pool.query(curd, (error, results) => {
    if (error) {
      console.log(error)
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});


app.get('/api/products', (req, res) => {
  pool.query('SELECT * FROM Products', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

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
