
const inquirer = require("inquirer");
const fs = require ("fs")
const axios = require("axios")

const questions = [
    {
    type: "input",
    name: "name",
    message: "What is your GitHub UserName?"
      },
    {
    type: "input",
    name: "repo",
    message: "What is the title of your Repo?"
    },
    {
    type: "input",
    name: "description",
    message: "Please provide a description of your repo?"
    },
    {
    type: "checkbox",
    message: "What items would you like in your Table of Contents",
    name: "#Table of Contents",
    choices: [
        "Installation", 
        "Usuage", 
        "Credits", 
        "License",
        "Badges",
        "Contributing",
        "Tests",
        "Questions"
    ]
    },

];

function writeToFile(){

inquirer.prompt(questions).then(answers => {
    
    const inputs = JSON.stringify(answers, null, ' ');

    fs.appendFile("README.md",  inputs + '\n', function(err) {

        if (err) {
          console.log(err);
        }
        else {
          console.log("Commit logged!");
        }
      
      });
})
};

writeToFile () 



// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();









