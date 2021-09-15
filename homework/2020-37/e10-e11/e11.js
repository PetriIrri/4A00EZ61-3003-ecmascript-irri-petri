function doIt(a, b) {
  console.log(this);
}
let object = { key: "value" };
// With apply it returns TypeError.
// as with call first argument is the value provided for this.
// the second argument is an argument array.
doIt.apply(object, [5, 5]);
