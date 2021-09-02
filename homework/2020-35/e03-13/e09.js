/*global process*/
/*eslint no-undef: "error"*/

var myArgs = process.argv.slice(2);
console.log(Number(myArgs[0]) + Number(myArgs[1]));
