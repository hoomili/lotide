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


const map = (array, callBack) => {
  let newArray = [];
  for (let item of array) {
    newArray.push(callBack(item));
  }
  return newArray;
}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 'm']);
