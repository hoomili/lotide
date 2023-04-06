const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    return
  }
  console.log(`⛔⛔⛔ Assertion Failed: [${actual}] !== [${expected}]`);
};
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);
assertEqual("Hello", "Hello");
