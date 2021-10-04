const util = require("util");
const readlineSync = require("readline-sync");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

function parseJson(data) {
  function func(resolve, reject) {
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

async function readFileAndParse(fileName) {
  const result = await readFile(fileName, "utf-8");
  const name = await parseJson(result);
  return name;
}

const fileName = readlineSync.question("Give a file name: ");

readFileAndParse(fileName)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
