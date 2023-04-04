const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const tail = function(arr) {
  let arrWithoutFirstElement = [];
  for (let i = 0; i < arr.length; i++) {
    arrWithoutFirstElement[i] = arr[i];
  }
  arrWithoutFirstElement = arrWithoutFirstElement.shift();
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const numbers = [1];
tail(numbers);
assertEqual(numbers.length, 1);
