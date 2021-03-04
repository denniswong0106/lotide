const eqObjects = function(obj1, obj2) {
  let outputBoolean = true;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (const item in obj1) {
      if (typeof obj1[item] === 'object') {
        outputBoolean = eqObjects(obj1[item], obj2[item]);
      } else if (obj1[item] !== obj2[item]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return outputBoolean;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🤟🤟🤟 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const nestedObj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: ['dennis', 'king', 'smartest', {trait1: 'geniuso', trait2: 'like a really smart person'}],
  e: 5,
  f: true
}

const nestedObj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: ['dennis', 'king', 'smartest', {trait1: 'geniuso', trait2: 'like a really smart person'}],
  e: 5,
  f: true
}

const nestedObj3 = {
  a: 1,
  b: 2,
  c: 3,
  d: ['you not that special']
}

const nestedObj4 = {
  a: 1,
  b: 2,
  c: 3,
  d: ['you not that special']
}

assertObjectsEqual(nestedObj1, nestedObj2); // => true
assertObjectsEqual(nestedObj2, nestedObj1); // => true
assertObjectsEqual(nestedObj2, nestedObj3); // => false
assertObjectsEqual(nestedObj3, nestedObj4); // => true