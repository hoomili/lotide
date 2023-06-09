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
const without = function (source, itemsToRemove) {
  let newArray = source.slice();
  console.log(newArray);
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === newArray[i]) {
        newArray.splice(i, 1);
        console.log(newArray);
      }
    }
  }
  return newArray;
}
module.exports = without;
console.log(without([1, 2, 3, 4, 5, 6, 7], [1, 6]))
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);