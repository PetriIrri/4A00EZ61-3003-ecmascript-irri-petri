class Person {
  // hello as a class field
  hello = () => {
    console.log(`hello ${this.name}`);
  };
  constructor(name) {
    this.name = name;
    /*
    hello inside constructor
    this.hello = () => {
      console.log(`hello ${this.name}`);
    };
    */
  }

  delayedHello() {
    setTimeout(this.hello, 1000);
  }
}
let jack = new Person("jack");
jack.delayedHello();
