const inquirer = require('inquirer');
let cTable = require('console.table');

const questions = [
    {
        type: "list",
        name: "menuList",
        message: "What Would You Like To Do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Quit"
        ]
    }
]