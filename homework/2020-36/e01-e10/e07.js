function repeat(value = "hallo", times = 10) {
  let tmp = value;
  for (let i = 1; i < times; i++) {
    value += tmp;
  }
  return value;
}

console.log("hello");
console.log(repeat("hello"));
