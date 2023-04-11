const assertArraysEqual = require('./assertArraysEqual');

const flatten = (arrays) => {
  let flatt = [];
  for (let element of arrays) {
    if (Array.isArray(element)) {
      for (let item of element) {
        flatt.push(item);
      }
      continue;
    }
    flatt.push(element);
  }
  return flatt;
}
module.exports = flatten;
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
