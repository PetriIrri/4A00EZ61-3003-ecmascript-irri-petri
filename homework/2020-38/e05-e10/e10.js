String.prototype.isPalindrome = function () {
  const str = String(this);
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed == str ? true : false;
};
console.log("saippuakauppias".isPalindrome()); // true
console.log("abc".isPalindrome()); // false
