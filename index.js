
const inquirer = require("inquirer");
const fs = require ("fs")
const axios = require("axios")

const questions = [
    // {
    // type: "input",
    // name: "name",
    // message: "What is your GitHub UserName?"
    //   },
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
          
        }
      
      });
})


};



writeToFile (); 



// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();


// function getUserName(){
// inquirer
//   .prompt({
//     message: "Enter your GitHub username:",
//     name: "username"
//   })
  
// .then(function({ name }) {
//     const queryUrl = `https://api.github.com/users/${name}/repos?per_page=100`;

//     axios.get(queryUrl).then(function(res) {
//       const repoNames = res.data.map(function(repo) {
//         return repo.name;
//       });

//       const repoNamesStr = repoNames.join("\n");

//       fs.writeFile("repos.txt", repoNamesStr, function(err) {
//         if (err) {
//           throw err;
//         }

//         console.log(`Saved ${repoNames.length} repos`);
//       });
//     });
//   });

// writeToFile()

// };


// getUserName ()







