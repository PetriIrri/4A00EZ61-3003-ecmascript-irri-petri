let f = function doIt2(input) {
  input == true ? console.log("world") : console.log("hello");
};
f(false);

function doIt() {
  function helloWorld(input) {
    input == true ? console.log("world") : console.log("hello");
  }
  return helloWorld;
}
let x = doIt();
x(false);
