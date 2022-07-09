const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions to be used for the manager
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
  },
];

// Array of questions to be used for the Engineer
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username?",
  },
];

// Array of questions to be used for the Intern
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
];

// Function to write the HTML file.
function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName);
}

// Function to initialise the app

// Function call to initialise the app
