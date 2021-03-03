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

const letterPositions = function(sentence) {
  const results = {};
  for (let i in sentence) {
    i = Number(i);
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

const smallString = 'lighthouse in the house';
console.log(letterPositions(smallString));
assertArraysEqual(letterPositions(smallString)['t'], [4, 14]);
assertArraysEqual(letterPositions(smallString)['u'], [7, 20]);
assertArraysEqual(letterPositions(smallString)['e'], [9, 16, 22]);
assertArraysEqual(letterPositions(smallString)['l'], [0]);
