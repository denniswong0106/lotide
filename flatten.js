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

const assertArraysEqual = (actualArr, expectedArr) => {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`🤟🤟🤟Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};

const flatten = hillyArr => {
  let outputArr = [];
  for (const element of hillyArr) {
    if (Array.isArray(element)) {
      outputArr = outputArr.concat(flatten(element));
    } else {
      outputArr.push(element);
    }
  }
  return outputArr;
};


assertArraysEqual(flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
console.log([]);
console.log(flatten([0, 1, [2, 3, [4, 5, 6, 7, [8, 9], 10, 11, 12], 13, 14], 15, 16]), 17);
