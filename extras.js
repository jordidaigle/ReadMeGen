const inquirer = require("inquirer");
const fs = require("fs");

async function start() {
const info = await inquirer.prompt( [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "location",
    message: "What is your location?"
  },
  {
    type: "input",
    name: "bio",
    message: "What is your bio?"
  },
  {
    type: "input",
    name: "url",
    message: "What is your Linkedin?"
  },
  {
    type: "input",
    name: "GitURL",
    message: "What is your Github?"
  },

 
    ]).then(answer => {
    })
}

    start();







//   .then(function(response) {

//     if (response.confirm === response.name) {
//       console.log("Success!");
//     }
//     else {
//       console.log("You forgot your name already?!");
//     }
//   });

  
// writeFileAsync("portfolio.json", htmlString,)

//   const myPortfolio = `
//     <div class="song">
//     <h2> My name is ${information.name} and this is my portfolio! </h2>
//     <p> I live in Austin ${information.location}. </p>
//     </div>
//   `;

//   const element = document.getElementById("portfolio");
//   element.innerHTML = myPortfolio;