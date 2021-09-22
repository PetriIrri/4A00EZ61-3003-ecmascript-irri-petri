const fs = require("fs");
function FileReader(path) {
  this.path = path;
  this.readAndOutput = function () {
    // starts to read this.path. When done, invoke the done
    // function that will output the result (or crash the app)
    // (result = this.path and data.)
    fs.readFile(this.path, "utf8", (err, data) => {
      this.done(err, data);
    });
  };
  this.done = function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    const result = `File name:${this.path}
      File data:
      ${data}`;
    console.log(result);
  };
}
module.exports = FileReader;
