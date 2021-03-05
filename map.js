// our map function will take 2 arg array to map, callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, func) => {
  const results = [];
  for (element of arr) {
    results.push(func(element))
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

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

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
