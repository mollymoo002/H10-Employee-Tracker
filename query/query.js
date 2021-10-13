// Needed to query the database to return data
const db = require("../db/connection");
const inquirer = require('inquirer');
const cTable = require('console.table');

// ---------------------- Prompts users to choose options depending on what they selected in the main menu -----------------------------
// This prompts the user to enter a new department and makes sure the entry is not blank
const addDept = [
    {
        type: "input",
        name: "addDept",
        message: "What department would you like to add?",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log("Please re-enter the department");
                return false;
            }
        },
    },
];

// This prompts the user to enter a new role and makes sure the entry is not blank
const addRole = [
    {
        type: "input",
        name: "addRole",
        message: "What role would you like to add?",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log("Please enter a role");
                return false;
            }
        },
    },
];

// This prompts the user to enter a new employee first and last name and makes sure the entry is not blank
const addEmployee = [
    {
        type: "input",
        name: "firstName",
        message: "Enter the employee's first name",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log("Please enter the employee's first name");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "lastName",
        message: "Enter the employee's last name",
        validate: answer => {
            if (answer) {
                return true;
            } else {
                console.log("Please enter the employee's last name");
                return false;
            }
        },
    },
    // this prompts the user to add the new employee's role and manager
    {
        type: "list",
        name: "employeeRole",
        message: "Enter the employee's role",
        choices: []
    },
    {
        type: "list",
        name: "employeeManager",
        message: "Enter the employee's manager",
        choices: []
    },
];

const updateEmployeeRole = [
    {
        type: "list",
        name: "updateRole",
        message: "Please choose the employee you want to update",
        choices: []
    },
    {
        type: "list",
        name: "newRole",
        message: "Please choose the employee's new role",
        choices: []
    },
];
// ---------------------- Prompts users to choose options depending on what they selected in the main menu -----------------------------




// ---------------------- Lists all data from tables -----------------------------
// Selects everything in the department table and logs the results using the console.table to make it formatted
async function listDept() {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) {
            throw err;
        }
        console.table(results);
    });
};

// Selects everything in the employee table and logs the results using the console.table to make it formatted
async function listEmp() {
    db.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            throw err;
        }
        console.table(results);
    });
};

async function listRole() {
    db.query('SELECT * FROM _role', (err, results) => {
        if (err) {
            throw err;
        }
        console.table(results);
    });
};
// ---------------------- Lists all data from tables -----------------------------


// ---------------------- Updates data in tables if user chooses -----------------------------
function addDept() {
    inquirer
        .prompt(addDept)
        .then((response) => {
            console.log(response);

            db.query(`INSERT INTO department(name) VALUES ("${response.addDept}")`, (err, results) => {
                if (err) {
                    throw err;
                }
                console.log("Department has been added");
            })
        });
};



// ---------------------- Updates data in tables if user chooses -----------------------------


// export the functions I used
module.exports = { listDept, listEmp, listRole, addDept, addEmp, addRole, updateEmployeeRole }