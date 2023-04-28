const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "test",
  password: "test",
  database: 'db'
});

connection.connect((err) => {
  if (!err) {
    console.log('Connected to database');
  } else {
    console.log(err)
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
