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
            if (response.menuList === "View All Departments") {
                query.listDept();
            } 
            if (response.menuList === "View All Roles") {
                query.listEmp();
            } 
            if (response.menuList === "View All Employees") {
                query.listRole();
            } 
            if (response.menuList === "Add Department") {
                query.addDept();
            } 
            if (response.menuList === "Add Role") {
                query.addRole();
            } 
            if (response.menuList === "Add Employee") {
                query.addEmployee();
            } 
            if (response.menuList === "Update Employee Role") {
                query.updateEmployeeRole();
            }   
        })
}
init();