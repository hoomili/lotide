const tail = function(arr) {
  let arrWithoutFirstElement = [];
  for (let i = 0; i < arr.length; i++) {
    arrWithoutFirstElement[i] = arr[i];
  }
  arrWithoutFirstElement.shift();
  return arrWithoutFirstElement;
};
module.exports = tail;


