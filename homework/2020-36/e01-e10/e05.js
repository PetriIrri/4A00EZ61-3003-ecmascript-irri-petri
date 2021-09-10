function isPositiveInteger(value, success, error) {
  if (value > 0) {
    success();
  } else {
    error();
  }
}

isPositiveInteger(
  5,
  function () {
    console.log("Positive!");
  },
  function () {
    console.log("Not positive!");
  }
);
