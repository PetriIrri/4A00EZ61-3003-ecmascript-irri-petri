let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

// here this references the user object.
user.sayHello();

// outputs hello undefined because this references global and there is no global variable name.
let myfunc = user.sayHello;
myfunc();
