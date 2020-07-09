// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

var inquirer = require("inquirer");
var fs = require("fs");
var badge;
inquirer
  .prompt([
    {
      type: "input",
      message: "Title:",
      name: "title"
    },
    {
      type: "input",
      message: "Description:",
      name: "description"
    },
    {
      type: "input",
      message: "Installation:",
      name: "installation"
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage"
    },
    {
        type: "input",
        message: "Credits:",
        name: "credits"
    },
    {
        type: "expand",
        message: "License:",
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
      message: "Github Username:",
      name: "username"
    },
    {
      type: "input",
      message: "Email Address:",
      name: "email"
    },

])

.then(function(response) {
    console.log(response.license);
      if(response.license == "la"){
        badge = "<img src='https://img.shields.io/badge/LA-LicenseA-red'>";
      }
      if(response.license == "lb"){
        badge = "<img src='https://img.shields.io/badge/LB-LicenseB-blue'>";
      }
      console.log(badge);