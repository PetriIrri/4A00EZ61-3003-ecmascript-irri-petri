function doIt() {
  let str = "";
  for (let argument of arguments) {
    str += argument;
  }
  console.log(str);
}

doIt("a"); // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc
doIt("a", "b", "c", 5); // outputs abc5
