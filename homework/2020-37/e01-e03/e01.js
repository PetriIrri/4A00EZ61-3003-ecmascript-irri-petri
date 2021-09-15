let f = function doIt2() {
  console.log("hello world");
};
f();

function doIt() {
  function helloWorld() {
    console.log("hello world");
  }
  return helloWorld;
}
let x = doIt();
x();
