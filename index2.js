// Check the markdown generating script
generateMarkdown = require('GenerateMarkdown.js');

// Check for the  dependencies installed
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

// Ask for project details for README file
function userInputs() {
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
                  message: "Contributions:",
                  name: "contributions"
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

        // Get user avatar and generate markdown (without creating a README file)
        .then((inquirerResponses) => {
            getUser(inquirerResponses.userName)
                .then((githubResponse) => {
                    // Add user avatar to project details
                    inquirerResponses.avatarURL = githubResponse.data.avatar_url
                    // Parse the README details to create markdown version
                    let markdownReadme = generateMarkdown(inquirerResponses);
                    // Parse the markdown README version to write it to file
                    writeToFile('README.md', markdownReadme);
                })
        })

}

// Create a README file from markdown README version
function writeToFile(file, data) {
    fs.writeFile(file, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}

userInputs()
