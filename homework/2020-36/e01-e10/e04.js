function isPositiveInteger(value, success, error) {
  if (value > 0) {
    success();
  } else {
    error();
  }
}
function onSuccess() {
  console.log("Positive!");
}
function onError() {
  console.log("Not positive!");
}

isPositiveInteger(5, onSuccess, onError);
