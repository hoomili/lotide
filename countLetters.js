const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const countLetters = function(aSentence) {
  results = {};
  for (const letters of aSentence) {
    if (letters !== " "){
      if (results[letters]) {
        results[letters] += 1;
      } else {
        results[letters] = 1;
      }
    }
  }
  return results;
};
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["h"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["m"], 2);
assertEqual(result1["n"], undefined);