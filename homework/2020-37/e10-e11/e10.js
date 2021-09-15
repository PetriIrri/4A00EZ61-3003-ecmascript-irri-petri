function doIt(a, b) {
  console.log(this);
}
let object = { key: "value" };
// call methods first argument is the value used as this when calling a function.
doIt.call(object, 5, 5);
