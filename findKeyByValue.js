const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    return
  }
  console.log(`⛔⛔⛔ Assertion Failed: [${actual}] !== [${expected}]`);
};

const findKeyByValue = function (object, value) {
  for (let item in object) {
    console.log(object[item]);
    if (object[item] === value) {
      return item;
    }
  }
};
module.exports = findKeyByValue;
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);