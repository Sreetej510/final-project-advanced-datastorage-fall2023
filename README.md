# Project README

## Overview
This project is a simple full-stack web application that demonstrates how to connect a MySQL database to a React front-end and an Express back-end using Axios. It allows users to perform CRUD operations on a mock business database, including retrieving data based on various criteria such as customer name, order number, and product ID.

## Technologies Used
React.js
Express.js
MySQL
Axios
Material-UI

## Installation
Clone the repository to your local machine.
Navigate to the project directory in your terminal.
Install the necessary dependencies by running ```sh
  npm i -g concurrently && npm run install
  ``` in the root directory
Start the development server by running
```sh
  npm run both
  ```

## API Routes
Here are the available API routes:

/api/customers : Returns all customers\
/api/orders : Returns all orders\
/api/order/fullname/:name : Returns all orders for the specified customer by fullname\
/api/order/lastname/:lastname : Returns all orders for the specified customer by lastname\
/api/order/firstname/:firstname : Returns all orders for the specified customer by firstname\
/api/order/mobile/:mobile : Returns all orders for the specified customer using mobile number\
/api/order/email/:email : Returns all orders for the specified customer using email\
/api/order/product_id/:product_id : Returns all orders and customer data by product ID\
/api/execute : a route for executing CRUD commands against the database\
/api/products : Returns all products\
/api/categories : Returns all categories

## Usage
Once the development server is running, you can access the application by opening your web browser and navigating to http://localhost:3000. The app will display a form where you can enter your own MySQL queries and see the results displayed and also have some collapsible div with predefined CURD commands.

The app also includes several pre-built queries that can be executed by clicking on the corresponding buttons. These include queries to retrieve orders by customer name or phone number, orders by product ID, and more.
