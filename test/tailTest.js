const tail = require('../tail');
const assert = require('chai').assert;
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it('returns [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });
});


