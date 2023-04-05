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
  if (eqArrays(array1, array2) === false) {
    console.log(`⛔⛔⛔ Assertion Failed: [${array1}] !== [${array2}]`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  return
};
const middle = function(array) {
  let midArray = [];
  let midIndex = array.length / 2;
  console.log('mid index ', midIndex)
  console.log("mid array init", midArray);
  if (array.length < 3) return midArray;
  if (array.length % 2 === 0) {
    midArray = array.slice((midIndex - 1),(midIndex + 1))
    console.log('mid array', midArray)
    return midArray;
  }
  midIndex = Math.floor(midIndex);
  midArray = array.slice(midIndex, midIndex + 1);
  console.log(midArray);
  return midArray;
}
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5,]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);