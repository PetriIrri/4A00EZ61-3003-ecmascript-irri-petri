class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      setTimeout(function () {
        throw new Error("Radius must be bigger than 0!");
      }, 10);
    }
  }

  static max(arr) {
    let biggest = arr[0];
    for (const index in arr) {
      if (biggest.radius < arr[index].radius) {
        biggest = arr[index];
      }
    }
    return biggest;
  }
}
let a = new Circle(60);
let b = new Circle(70);
let c = new Circle(50);
let d = new Circle(90); // sets radius

c.radius = 30; // changes radius, uses setter
console.log(c.radius); // returns radius, uses getter
// c.radius = -70 // this would crash the app. radius must be > 0.
c.radius = 80;
console.log(c.radius);

let x = Circle.max([a, b, c, d]);
console.log("x is: " + x.radius);
