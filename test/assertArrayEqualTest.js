const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(['hello', 'world', 3], ['hello', 'world', 3]);
assertArraysEqual(['hello', 'world', 3], ['hello', 'world', 4]);
assertArraysEqual([1], []);