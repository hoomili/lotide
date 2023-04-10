const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
let results = tail(words);
assertEqual(results.length, 2);
assertEqual(words.length, 3);
const numbers = [1];
tail(numbers);
assertEqual(numbers.length, 1);