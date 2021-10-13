const express = require('express');
const inquirer = require("inquirer");
const mysql = require('mysql2');
let cTable = require("console.table");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;