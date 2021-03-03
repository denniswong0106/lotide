const eqArrays = (actualArr, expectedArr) => {
  if (actualArr.length !== expectedArr.length) {
    return false
  } else {
    for (let i = 0; i < actualArr.length; i++) {
      if (actualArr[i] !== expectedArr[i]) {
        return false;
      }
    }
  }
  return true;
}

const assertArraysEqual = (actualArr, expectedArr) => {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`🤟🤟🤟Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
}

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4])
assertArraysEqual([1, 2, 3, 3], [1, 2, 3, 4])
assertArraysEqual([], [])
assertArraysEqual([[1], 2], [1, 2, 3, 4])
assertArraysEqual([], [1, 2, 3, 4])
assertArraysEqual([1, 2, 3, 4], [])