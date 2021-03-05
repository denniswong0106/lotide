// two parameters, an array and callback function

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

// take until function keeps all of the original array 
// up to the point where the callback function evaluates to false

const takeUntil = (arr, callback) => {
  const results = [];
  for (element of arr) {
    if (callback(element)) {
      break;
    } else {
      results.push(element);
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log('---');
console.log('---');
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
console.log('---')
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);