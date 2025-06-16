const fs = require("node:fs");

fs.readFileSync("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

const myName = "Raphael Michael";

console.log(`Hello, Node.js! I’m ${myName} starting my journey!`);
