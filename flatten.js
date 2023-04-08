const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true; 
};
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`⛔⛔⛔ Assertion Failed: [${array1}] !== [${array2}]`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  return
};

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
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
