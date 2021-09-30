const readlineSync = require("readline-sync");
const fs = require("fs");

const fileName = readlineSync.question("Give a file name: ");
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    try {
      const obj = JSON.parse(data);
      if (!("name" in obj)) {
        console.log(`file ${fileName} does contain json but not property name`);
      } else {
        console.log(obj.name);
      }
    } catch (error) {
      console.log(`file ${fileName} does not contain json`);
    }
  }
});
