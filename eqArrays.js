const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤟🤟🤟Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (actualArr, expectedArr) => {
  if (actualArr.length === 0 && expectedArr.length === 0) {
    console.log(`🤟🤟🤟Assertion Passed: Empty === Empty`);
  } else {
    for (let i = 0; i < actualArr.length; i++) {
      if (actualArr[i] !== expectedArr[i]) {
        console.log(`😡😡😡Assertion Failed: at index ${i}, ${actualArr[i]} !== ${expectedArr[i]}`);
        break;
        // so if the array has 50 wrong comparisons it won't just keep going.
        // stops code running once first error is detected (leftmost side).
      } else if (i === actualArr.length - 1) {
        console.log(`🤟🤟🤟Assertion Passed: ${actualArr} === ${expectedArr}`);
      }
    }
  }
};