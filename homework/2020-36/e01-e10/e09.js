/*
here we create a funktion using a funktion constructor. The constructor takes the name of the function as
the first argument. The second argument is the happenings of the function. Then we put this function inside
a variable and call it.
*/
var myFunc = new Function("", 'console.log("hello")');
myFunc.call();
