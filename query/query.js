// Needed to query the database to return data
const db = require("../config/connection");
const inquirer = require('inquirer');
const cTable = require('console.table');

// ---------------------- Prompts users to choose options depending on what they selected in the main menu -----------------------------
// This prompts the user to enter a new department and makes sure the entry is not blank
const addDepartment = [
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
const addRoles = [
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
const addEmployees = [
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

const updateEmployeeRoles = [
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
        .prompt(addDepartment)
        .then((response) => {
            console.log(response);

            db.query(`INSERT INTO department(name) VALUES ("${response.addDept}")`, (err, results) => {
                if (err) {
                    throw err;
                }
                console.log("Department has been added");
            })
        });
        return;
};

function addRole() {
    choices = [];
            db.query('SELECT id, name FROM department', (err, results) => {
            if (err) {
                throw err;
            }

        results.forEach(department => {
            choices.push(department.name)
        })

        inquirer
            .prompt(addRoles)
            .then((response) => {
                let addRoleId = "";

                results.forEach(department => {
                    if (department.name === response.addRoleDept) {
                        addRoleId = department.id;
                    }
                })

                db.query(`INSERT INTO _role(title, salary, department_id) VALUES("${response.addRoleTitle}", "${response.addRoleSalary}", "${addRoleId}"`,
                (err,results) => {
                    if (err) {
                        throw err;
                    }
                console.log("Role added");
                })
            });
    });
    return;
};

function addEmployee() {
    choices = [];

    inquirer
        .prompt(addEmployees)
        .then((response) => {
            employeeId = "";
            let managerId = "";

            results.forEach(data => {
                if (data.title === response.employeeRole) {
                    employeeId = data.role_id;
                }
                if (`${data.first_name} ${data.last_name}` === response.manager) {
                    managerId = data.id
                }
            })

            db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${response.firstName}", "${response.lastName}", ${employeeId}, ${managerId})`,
            (err, results) => {
                if (err) {
                    throw err;
                }
                console.table(results);
            })
        });
        return;
};

function updateEmployeeRole() {
    const employeeRoleTogether = `
    SELECT employee.first_name, employee.last_name, employee.role_id, _role.title
    FROM employee 
    JOIN _role ON employee.role_id = _role.id`;

    empRole[0].choices = [];
    empRole[1].choices = [];

    db.query(employeeRoleTogether, (err, results) => {
        if (err) {
            throw err;
        }

        results.forEach(data => {
            empRole[0].choices.push(`${data.first_name} ${data.last_name}`);
            empRole[1].choices.push(data.title);
        })

        inquirer
            .prompt(empRole)
            .then((response) => {
                let newEmpId = "";
                let newFirstName = "";
                let newLastName = "";

                results.forEach(data => {
                    if (data.title === response.empRole) {
                        newEmpId = data.role_id;
                    }
                })

                const separateName = response.empRole.split(" ");

                db.query(`UPDATE employee SET role_id = ${newEmpId} WHERE employee.first_name = "${separateName[0]}" AND employee.last_name = "${separateName[1]}"`,
                (err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.table(results);
                })
            });
    });
    return;
};
// ---------------------- Updates data in tables if user chooses -----------------------------


// export the functions I used
module.exports = { listDept, listEmp, listRole, addDepartment, addDept, addEmployee, addEmployees, addRole, addRoles, updateEmployeeRole, updateEmployeeRoles }