var readlineSync = require("readline-sync");
function ex6Test() {
  var y = "variable y";
  console.log(y);
  console.log(x);
}
var choice = readlineSync.question(
  "What exercise would you like to try? This folder has exercises 3-13. -->"
);
//exercise 3
if (choice == 3) {
  console.log(
    "Create an application that asks your name. Then output the given name. Use readline-sync.\n"
  );
  // Wait for user's response.
  var userName = readlineSync.question("May I have your name? ");
  console.log("Hello " + userName + "!");
} else if (choice == 4) {
  console.log(
    "Ask also a number, output the name number of times. So if given “jack” and 4, output jackjackjackjack. (google for / while javascript. Or string repeat)\n"
  );
  // Exercise 4
  // Wait for user's response.
  var Name = readlineSync.question("May I have your name? ");
  var number = readlineSync.question(
    "How many times would you like for me to repeat that? "
  );
  console.log(Name.repeat(number));
} else if (choice == 5) {
  // EXERCISE 5
  console.log(
    "Create variable containing some string, for example ‘hello’. Try to cast it to number using Number - function. What do you get when this fails? Transform the result to string. Repeat the string 16 times and output it. Output also ‘batman’. 🙂 \n"
  );
  let text = "hallo!";
  console.log("sample text: " + text);
  text = Number(text);
  console.log(text);
  console.log("transforming back to string and repeating 16 times!");
  text = String(text);
  console.log(text.repeat(16) + " batman");
} else if (choice == 6) {
  // EXERCISE 6
  console.log(
    "Create application where you demonstrate the differences between var, let and const."
  );
  var x = "variable x";
  console.log(x);
  ex6Test();
  //console.log(y); This does not work because variable y is declared in a function and therefore is not a global function.
  //We can still use x in the function as it is global.
  let z = "z";
  console.log(z);
  if (z == "z") {
    let y = "y";
    console.log(z + y);
  }
  //console.log(y); this does not work because y is declared inside an if statement
  // Constant variables cannot be changed.
  const muuttumaton = "Unchangeable";
  console.log(muuttumaton);
  //muuttumaton = "hallo"; this makes an error. You can still do other stuff with it.
  console.log(muuttumaton.repeat(4));
}
