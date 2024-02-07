// API Call Example
// fetch(`https://api.github.com/users/moonhighway`)
//   .then((response) => response.json())
//   .then(console.log)
//   .catch(console.error);

async function requestGithubUser(githubLogin) {
  try {
    const response = await fetch(`https://api.github.com/users/${githubLogin}`);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

requestGithubUser("moonhighway");
