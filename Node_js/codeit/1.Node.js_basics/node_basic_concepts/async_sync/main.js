const fs = require("fs");

fs.readFile("test.js", "utf8", (err, content) => {
  console.log(content);
});
