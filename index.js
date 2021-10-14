// -------------- Require statements -----------------
const inquirer = require('inquirer');
let cTable = require('console.table');
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
            if (response.menuList === "View All Departments") {
                
            } else if (response.menuList === "View All Roles") {

            } else if (response.menuList === "View All Employees") {
                
            } else if (response.menuList === "Add Department") {
                
            } else if (response.menuList === "Add Role") {
                
            } else if (response.menuList === "Add Employee") {
                
            } else if (response.menuList === "Update Employee Role") {
                
            } else {
                return;
            }
            
        })
}
init();