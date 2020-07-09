// Check the markdown generating script
generateMarkdown = require('./assets/js/generateMarkdown.js');

// Check for the  dependencies installed
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

Get user details from GitHub
function getUser(userName) {
    return axios
        .get(
            `https://api.github.com/users/${userName}`
        )
        .catch(err => {
            console.log(`User not found`);
            process.exit(1);
        });
}

// Ask for project details for README file
function userInputs() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is your Github username?",
            name: "userName"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "userEmail",
        },
        {
            type: "input",
            message: "What is your project title?",
            name: "projectTitle",
        },
        {
            type: "input",
            message: "What is the description of this project?",
            name: "projectDescription",
        },
        {
            type: "input",
            message: "What is the path for this project's screenshot?",
            default: "assets/img/screenshot.gif",
            name: "projectImgSRC",
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            default: "`npm install`",
            name: "projectInstall",
        },
        {
            type: "input",
            message: "What command should be run to run the program?",
            default: "`node index.js`",
            name: "projectRun",
        },
        {
            type: "input",
            message: "What command should be run to start tests?",
            default: "`npm test`",
            name: "projectTest",
        },
        {
            type: "input",
            message: "Any additional information about the project?",
            name: "projectInfo",
        },
        {
            type: "input",
            message: "Please input an appropriate license type for this project",
            default: "MIT",
            name: "projectLicense",
        }
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
