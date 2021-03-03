const eqArrays = (actualArr, expectedArr) => {
  if (actualArr.length !== expectedArr.length) {
    return false;
  } else {
    for (let i = 0; i < actualArr.length; i++) {
      if (actualArr[i] !== expectedArr[i]) {
        return false;
      }
    }
  }
  return true;
};


console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([], [1, 2, 3]));
console.log(eqArrays([], []));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false