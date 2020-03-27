
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
    name: "tableOfContents",
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

const prompts = inquirer.prompt(questions)


// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();









