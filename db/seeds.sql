INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Data Center"),
       ("Help Desk"),
       ("Accounting"),
       ("Marketing"),
       ("Developer"),
       ("Patient Services");

INSERT INTO _role (title, salary, department_id)
VALUES ("HR Director", 45000, 1),
       ("Analyst", 55000, 2),
       ("Help Desk Agent", 34000, 3),
       ("Accountant", 70000, 4),
       ("Media Consultant", 65000, 5),
       ("SQL Developer", 80000, 6),
       ("Patient Services Manager", 54000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1 , NULL),
       ("Mary", "Sue", 2, NULL),
       ("Mark", "Crisco", 3 , 3359),
       ("Abigail", "Breslen", 4, 4256),
       ("George", "Mason", 5, 8879),
       ("Sarah", "Smith", 6, 2242),
       ("Hunter", "Joe", 7, 1092);