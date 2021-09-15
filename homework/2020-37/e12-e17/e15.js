let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

function sayHello() {
  user.sayHello();
}

// Prints Hello undefined ecause setTimeout is calling the function
// and this references setTimeout.
setTimeout(user.sayHello, 1000);

// this works because sayHello function uses user.sayHello so this references user.
setTimeout(sayHello, 1000);

// anonymous arrow functions also work. Same situation as with sayHello.
setTimeout(() => user.sayHello(), 1000);

// this changes the users sayHello funktion and it works because setTimeout is asyncronous.
// setTimeout calls the function only after the timer is done.
user.sayHello = function () {
  console.log("does it work?");
};
