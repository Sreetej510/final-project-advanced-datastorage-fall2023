const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dudecool',
  database: 'nike_store'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = connection;
