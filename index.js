// -------------- Require statements -----------------
const inquirer = require('inquirer');
let cTable = require('console.table');
const query = require("./query/query");
// -------------- Require statements -----------------

// Here are the choices the user can search through using the arrow keys and pressing enter to choose one
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
];

// Quit the application
function quit() {
    process.exit();
}

async function init() {
    console.log("Employee Tracker");
    await inquirer
        .prompt(questions)
        .then ((response) => {
            switch (response.questions) {
                case "View All Departments":
                    query.listDept();
                    break;

                case "View All Roles":
                    query.listEmp();
                    break;

                case "View All Employees":
                    query.listRole();
                    break;

                case "Add Department":
                    query.addDept();
                    break; 

                case "Add Role":
                    query.addRole();
                    break; 

                case "Add Employee":
                    query.addEmployee();
                    break; 

                case "Update Employee Role":
                    query.updateEmployeeRole();
                    break; 
                
                default:
                    break;
            }
            init();
        });
}