INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Data Center"),
       ("Help Desk"),
       ("Accounting"),
       ("Marketing"),
       ("Developer"),
       ("Patient Services");

INSERT INTO role (title, salary)
VALUES ("HR Director", 45000),
       ("Analyst", 55000),
       ("Help Desk Agent", 34000),
       ("Accountant", 70000),
       ("Media Consultant", 65000),
       ("SQL Developer", 80000),
       ("Patient Services Manager", 54000);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("John", "Doe"),
       ("Mary", "Sue"),
       ("Mark", "Crisco", 3359),
       ("Abigail", "Breslen", 4256),
       ("George", "Mason", 8879),
       ("Sarah", "Smith", 2242),
       ("Hunter", "Joe", 1092);