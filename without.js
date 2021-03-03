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

const without = (originalArr, removeArr) => {
  let outputArr = [];
  let removeBoolean = false;

  for (const element of originalArr) {
    for (const item of removeArr) {
      if (element === item) {
        removeBoolean = true;
      }
    }
    if (removeBoolean === false) {
      outputArr.push(element);
    } else {
      removeBoolean = false;
    }
  }
  return outputArr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(['hello', '3', 3, 'three'], [4, 3, 9, 2]), ['hello', '3', 'three']);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);