require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username
      user: process.env.DB_USER,
      // Add MySQL password
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the company_db database.`)
  );

  module.exports = db;