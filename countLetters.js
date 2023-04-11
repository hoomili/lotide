const assertEqual = require('./assertEqual');
const countLetters = function(aSentence) {
  let results = {};
  for (const letters of aSentence) {
    // if (letters !== " "){
    //   if (results[letters]) {
    //     results[letters] += 1;
    //   } else {
    //     results[letters] = 1;
    //   }
    // }
    results[letters]++ || (results[letters] = 1);
  }
  return results;
};
module.exports = countLetters;
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["h"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["m"], 2);
assertEqual(result1["n"], 1);