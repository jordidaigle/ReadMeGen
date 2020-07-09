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
// const generateMarkdown = require("generateMarkdown.js");
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

function generateMarkdown({ username, email, projecttitle, description, installation, usage, testing, license}) {
  projecttitleDashed = projecttitle.replace(/\s+/g, '-');
  return `
  [license-shield]: https://img.shields.io/github/license/${username}/${projecttitleDashed}.svg?style=flat-square
  [license-url]: https://github.com/${username}/${projecttitleDashed}/blob/master/LICENSE.txt
  [![License.txt][license-shield]][license-url]
  # ${projecttitleDashed}
  ## Description
  ${description}
  ## Table of Contents
  - [Title](#title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Additional Information](#additional-information)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions and Feedback](#questions-and-feedback)
  ## Installation
  Download (and unpack) or clone the repo, then using a CLI run the ${installation} command.
  ## Usage
  Run the application with the CLI command ${usage} and follow the prompts.
  ## Testing
  Run the tests with the CLI command ${testing}.
  ## License
  This project is licensed under the ${license} License - see the [LICENSE.txt](https://github.com/${username}/${projecttitleDashed}/blob/master/LICENSE.txt) file for details
  ## Contributing
  Please read [CONTRIBUTING.md](https://github.com/${username}/${projecttitleDashed}/blob/master/CONTRIBUTING.md) for details on the code of conduct, and the process for submitting pull requests.
  ## Questions and Feedback
  Please contact me using one of the following:
  |---|---|
  - | Github: [${username}](https://gist.github.com/${username}) |
  |---|---|
  - Email: ${email}
  `
}

userInput()
  