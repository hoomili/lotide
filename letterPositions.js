const letterPositions = function(sentence) {
  const results = {};
  const stringToArray = sentence.split("");
  console.log(stringToArray);
  
  
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] !== ' ') {
        if (results[stringToArray[i]]) {
          results[stringToArray[i]].push(i);
        } else {
          results[stringToArray[i]] = [i];
        }
    }
  }

  return results;
}
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

assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]);