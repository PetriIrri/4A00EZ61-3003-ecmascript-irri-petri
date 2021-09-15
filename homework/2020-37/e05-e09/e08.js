class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

var goofy = new Person("Dippy", "Dawg");
console.log(goofy);
var donald = new Person("Donald Fauntleroy", "Duck");
console.log(donald);
var mickey = new Person("Michael Theodore", "Mouse");
console.log(mickey);
// obj is undefined and is not a instanceof Person
var obj = Person("jack", "smith");
console.log(obj);
