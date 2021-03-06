const util = require("util");
const readlineSync = require("readline-sync");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

function parseJson(data) {
  function func(resolve, reject) {
    // parse the data (do not implement try catch, if exception occurs, this
    // will be catched automatically in your catch outside of this function.
    // if name is found from obj, call resolve, otherwise call reject
    const obj = JSON.parse(data);
    if (!("name" in obj)) {
      reject("Json file does not contain property name");
    } else {
      resolve(obj.name);
    }
  }
  const p = new Promise(func);
  return p;
}

const fileName = readlineSync.question("Give a file name: ");

readFile(fileName, "utf-8")
  .then(parseJson)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
