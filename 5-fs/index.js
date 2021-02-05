const fs = require("fs");

// Asynchronous read
fs.readFile("input.txt", function (err, data) {
  if (err) {
    console.error(err);
    return; 
  }
  console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
const fileData = fs.readFileSync("input.txt");
console.log("Synchronous read: " + fileData.toString());

console.log("Program Ended");


const dirContent = fs.readdirSync('..');
console.log("dirContent: " + dirContent);

