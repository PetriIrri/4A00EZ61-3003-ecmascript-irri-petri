function printName() {
  console.log("Petri");
}
function sum(a, b) {
  return a + b;
}
let obj = { printName: printName, sum: sum };
module.exports = obj;
