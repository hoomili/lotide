const middle = function(array) {
  let midArray = [];
  let midIndex = array.length / 2;
  if (array.length < 3) return midArray;
  if (array.length % 2 === 0) {
    midArray = array.slice((midIndex - 1),(midIndex + 1))
    return midArray;
  }
  midIndex = Math.floor(midIndex);
  midArray = array.slice(midIndex, midIndex + 1);
  return midArray;
}
module.exports = middle;
