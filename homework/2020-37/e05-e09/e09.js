function Person(fname, lname) {
  if (this instanceof Person == false) {
    return new Person(fname, lname);
  } else {
    this.fname = fname;
    this.lname = lname;
  }
}

var goofy = new Person("Dippy", "Dawg");
console.log(goofy);
var obj = Person("jack", "smith");
console.log(obj);
