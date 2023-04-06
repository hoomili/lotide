const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`⛔⛔⛔ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  return
};

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




const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let element of object1Keys) { 
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      if (!(eqArrays(object1[element], object2[element]))) {
        return false;
      }
    } else if (!(object1[element] === object2[element])) {
      return false;
    }     
  }
  return true;
};

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// assertObjectEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// assertObjectEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false