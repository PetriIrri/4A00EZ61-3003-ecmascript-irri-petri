var readlineSync = require("readline-sync");
function reverseString(str) {
  return str.split("").reverse().join("");
}
const str = readlineSync.question(
  "I will tell you if a word is a palindrome! -->"
);
if (str == reverseString(str)) {
  console.log("Word is palindrome!");
} else {
  console.log("Word is not a palindrome!");
}
