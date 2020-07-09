// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('generateMarkdown.js');
var badge;

function userInput() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Title of your project",
        name: "projecttitle"
      },
      {
        type: "input",
        message: "Describe your Projet",
        name: "description"
      },
      {
        type: "input",
        message: "Installation Instructions!",
        name: "installation"
      },
      {
        type: "input",
        message: "What is the Usage?",
        name: "usage"
      },
      {
        type: "input",
        message: "What testing have you done?",
        name: "testing"
      },
      {
        type: "input",
        message: "Make some contributions",
        name: "contributions"
      },
      {
        type: "expand",
        message: "What license is this under? (A or B)",
        name: "license",
        choices: [
          {
            key: 'a',
            name: 'License A',
            value: 'la'
          },
          {
            key: 'b',
            name: 'License B',
            value: 'lb'
          },
        ]
      },
      {
        type: "input",
        message: "What is your Github Username:",
        name: "username"
      },
      {
        type: "input",
        message: "What is your Email Address:",
        name: "email"
      },

    ])

    .then(response => {
      if(response.license=="la") {
        badge="<img src='https://img.shields.io/badge/LA-LicenseA-red'>";
      }
      if(response.license=="lb") {
        badge="<img src='https://img.shields.io/badge/LB-LicenseB-blue'>";
      }
      console.log(badge);
      console.log(response);

      let markdownReadme = generateMarkdown(response);
      writeToFile('README.md',markdownReadme);
    })    
}

function writeToFile(file, data) {
  fs.writeFile(file, data, function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("Success!");
  })
}

userInput()
  