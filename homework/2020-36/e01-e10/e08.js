function doIt() {
  console.log("hello");
}
console.log(typeof doIt); // returns the type of doIt which is a function
console.log(doIt instanceof Function); // returns boolean value dependin on if doIt is an instance of Function
//instanceof is used to test whetever a given object is an instance of a function that it is tested again.
//doIt is a function and therefore it is an instance of Function.
/* explained in a way I don't fully understand: The instanceof operator tests to see if the prototype property 
of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. */
