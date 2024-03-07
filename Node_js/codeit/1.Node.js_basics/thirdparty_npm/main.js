const http = require("http");
const express = require("express");

// let server = http.createServer(function (request, response) {
//   console.log(request.url);
//   response.end("<h1> Hello World!</h1>");
// });

const app = express();

users = ["Tom", "Andy", "Jessica", "Paul"];

app.get("/", (request, response) => {
  response.end("<h1>Welcome!</h1>");
});

app.get("/users", (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get("/users/:id", (request, response) => {
  let userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

app.get("*", (request, response) => {
  response.end("<h1>Page Not Available<h1>");
});

app.listen(3000);
