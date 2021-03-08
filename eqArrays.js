const eqArrays = (actualArr, expectedArr) => {
  let output = true;
  if (actualArr.length !== expectedArr.length) {
    return false;
  } else {
    for (const e in actualArr) {
      if (Array.isArray(actualArr[e])) {
        output = eqArrays(actualArr[e],expectedArr[e]);
      } else {
        if (actualArr[e] !== expectedArr[e]) {
          return false;
        }
      }
    }
  }
  return output;
};

// console.log(eqArrays([1,2,3], [1,2,3]));
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays([], [1, 2, 3]));
// console.log(eqArrays([], []));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays(['a','b',[1, 2, 3, [true, false]], 'help'], ['a','b',[1, 2, 3, [true, false]], 'help'])) // true
console.log(eqArrays(['a','b',[1, 2, 3, [true], false], 'help'], ['a','b',[1, 2, 3, [true, false]], 'help'])) // false
console.log(eqArrays(['a','b',[1, 2, 3, [true, false]]], ['a','b',[1, 2, 3, [true, false]]])) // true
console.log(eqArrays(['a','b',1, 2, 3, [true, false]], ['a','b',[1, 2, 3, [true, false]]])) // false