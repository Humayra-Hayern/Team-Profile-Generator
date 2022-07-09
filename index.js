const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Empty array to be populated by team members
const teamMemberArr = [];

// Inquirer prompt to decide which team member to add
const teamMemberChoice = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "member",
        message: "Which team member would you like to add?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.member) {
        case "Manager":
          managerQuestions();
          break;
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        default:
          writeToFile("index.html", teamMemberArr);
          console.log(teamMemberArr);
      }
    });
};

// Questions to be used for the manager
const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email address?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((answers) => {
      // console.log(answers);
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      // console.log(manager);
      teamMemberArr.push(manager);
      teamMemberChoice();
    });
};

// Questions to be used for the Engineer
const engineerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github username?",
      },
    ])
    .then((answers) => {
      // console.log(answers);
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      // console.log(engineer);
      teamMemberArr.push(engineer);
      teamMemberChoice();
    });
};

// Questions to be used for the Intern
const internQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
      },
    ])
    .then((answers) => {
      // console.log(answers);
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      // console.log(intern);
      teamMemberArr.push(intern);
      teamMemberChoice();
    });
};

// Function to write the HTML file.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateHtml(data), (err) =>
    err ? console.log(err) : console.log("success")
  );
}

// Function call to initialise the app
teamMemberChoice();
// managerQuestions();
