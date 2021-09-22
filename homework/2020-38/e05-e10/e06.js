class Person {
  constructor(name) {
    this.name = name;
    // drinkbeer is now given to each object that is created from person.
    this.drinkBeer = function () {
      console.log(this.name + " drinks beer");
    };
  }
  // sayHello() is only once in memory as it is a function of Person.prototype
  sayHello() {
    console.log("hello from " + this.name);
  }
}
let jack = new Person("jack");
jack.sayHello();
let tina = new Person("tina");
tina.sayHello();

Person.prototype.sayHello();
// Person.prototype.drinkBeer(); does not work because Person.prototype does
// not have sayHello() function
