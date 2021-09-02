var readlineSync = require("readline-sync");
function abs(int) {
  return int < 0 ? int * -1 : int;
}
const num = readlineSync.question(
  "I will tell the absolute value of any number! -->"
);
console.log(abs(num));
