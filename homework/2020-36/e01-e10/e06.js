function isPositiveInteger(value, success, error) {
  if (value > 0) {
    success();
  } else {
    error();
  }
}

isPositiveInteger(
  55,
  () => console.log("Positive!"),
  () => console.log("Not positive!")
);
