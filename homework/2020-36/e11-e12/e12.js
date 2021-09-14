const fs = require("fs");

function copy(file, copyName) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log("error");
    } else {
      fs.writeFile(copyName, data, (err) => {
        if (err) {
          console.log("error");
        } else {
          console.log("success");
        }
      });
    }
  });
}

var myArgs = process.argv.slice(2);
let file = myArgs[0];
let copyName = myArgs[1];
copy(file, copyName);
