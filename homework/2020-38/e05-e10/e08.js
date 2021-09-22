function Dog(name) {
  this.name = name;
  // we bind sniffButt which creates a copy of it with this replaced with
  // object. The function is now three times in memory. once for each
  // object and once for prototype.
  this.sniffButt = this.sniffButt.bind(this);
}
Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
};
Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000);
};

let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();
spot.delayedSniffButt();
vilma.delayedSniffButt();
