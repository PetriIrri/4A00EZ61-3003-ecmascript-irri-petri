const readlineSync = require("readline-sync");
const fs = require("fs");

const fileName = readlineSync.question("Give a file name: ");
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
