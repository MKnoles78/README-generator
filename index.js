
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
    name: "name",
    message: "What is the title of your Repo?"
    },
    {
    type: "input",
    name: "name",
    message: "Please provide a description of your repo?"
    },
    {
    type: "checkbox",
    message: "What items would you like in your Table of Contents",
    name: "stack",
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


// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();







