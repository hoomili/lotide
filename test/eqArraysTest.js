const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')
assertEqual(eqArrays(['hello', 'world', 3], ['hello', 'world', 3]), true);
assertEqual(eqArrays(['hello', 'world', 3], ['hello', 'world', [3, 4]]), true);