// Exercise 4
var readlineSync = require("readline-sync");

// Wait for user's response.
var userName = readlineSync.question("May I have your name? ");
var number = readlineSync.question(
  "How many times would you like for me to repeat that? "
);
console.log(userName.repeat(number));
