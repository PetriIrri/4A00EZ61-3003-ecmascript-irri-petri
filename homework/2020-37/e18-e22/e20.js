let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    /*
    setTimeout(function () {
      this.sayHello();
    }, 1000);
    */
    // Behind the curtain arrow syntax creates a variable for this.
    // var _this = this;
    // and uses this variable when using this in inner function.
    setTimeout(() => {
      this.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello();
