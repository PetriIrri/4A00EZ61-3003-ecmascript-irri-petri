// returns biggest number in a array
const max = (array) => {
  return Math.max.apply(null, array);
};
// returns lowest number in a array
const min = (array) => {
  return Math.min.apply(null, array);
};

export { max, min };
