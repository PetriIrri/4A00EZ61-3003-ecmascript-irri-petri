const fs = require("fs");

var myArgs = process.argv.slice(2);
let file = myArgs[0];
let copy = myArgs[1];
console.log(file, copy);

fs.readFile(file, "utf-8", (err, data) => {
  fs.writeFile(copy, data, () => {
    console.log("ready");
  });
});
