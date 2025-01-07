// Time -> O(n) | Space -> O(n)
function firstDuplicateValue(array) {

  let elementObj = {};

  for (let i = 0; i < array.length; i++) {
    if (elementObj.hasOwnProperty(array[i])) {
      return array[i];
    } else {
      elementObj[array[i]] = true;
    }
  }
  return -1;
}


