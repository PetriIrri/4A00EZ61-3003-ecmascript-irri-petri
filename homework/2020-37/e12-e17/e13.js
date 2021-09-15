function doIt() {
  console.log(this);
}
var obj = { key: "value" };

// Create a copy of the doIt() function so that
// the keyword this is replaced with obj
let x = doIt.bind(obj);
x();
