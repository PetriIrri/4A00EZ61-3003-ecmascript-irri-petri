var readlineSync = require("readline-sync");
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
}
