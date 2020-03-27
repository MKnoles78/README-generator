const api = {
  getUser(username) {


  }
};

const username = "MKnoles78"

// inquirer.prompt.questions.forEach(element).then(function({ username }){
  const queryURL = `https://api.github.com/users/${userName}/repos?per_page=100`;

  axios.get(queryURL).then(function(res){
      const repoNames = res.data.map(function(repo){
          return repo.name;
      })
  })
// })

console.log(repo.name)



// module.exports = api;
