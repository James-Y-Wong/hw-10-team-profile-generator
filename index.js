const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./src/page-template");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = {
    manager: null,
    engineers: [],
    interns: [],
};

const idArray = [];

// Manager inquirer prompts
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            validate: (answer)=> {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's ID?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than 0"
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email"
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than 0"
            }
        },
    ]).then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber,
        );
        teamMembers.manager = manager;
        idArray.push(answers.managerId);
        createTeam();
    })
}

// create team inquirer prompts
function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I do not want to add any more",
            ],
        },
    ])
    .then((answers) => {
        switch (answers.choice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    })
}


// inquirer prompts for when engineer is selected
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            validate: (answer)=> {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character";
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    if(idArray.includes(answer)) {
                        return "This ID is already taken";
                    } else {
                        return true;
                    }
                }
                return "Please enter a positive number greater than 0"
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email"
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            validate: (answer)=> {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character";
            },
        },
    ]).then((answers) => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github,
        );
        teamMembers.engineers.push(engineer);
        idArray.push(answers.id);
        createTeam();
    })
}

// inquirer prompt for when intern is selected
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            validate: (answer)=> {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character";
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    if(idArray.includes(answer)) {
                        return "This ID is already taken";
                    } else {
                        return true;
                    }
                }
                return "Please enter a positive number greater than 0"
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email"
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            validate: (answer)=> {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character";
            },
        },
    ]).then((answers) => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        );
        teamMembers.interns.push(intern);
        idArray.push(answers.id);
        createTeam();
    })

}


// write file to dist folder called team.html
function buildTeam() {
    fs.writeFile("dist/team.html", render(teamMembers), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

createManager();