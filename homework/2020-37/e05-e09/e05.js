function doIt() {
  console.log(this);
  console.log(this == global);
  this.x = "global variable";
}

doIt();
// Could also just do: console.log(x);
console.log(global.x);
