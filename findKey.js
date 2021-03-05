const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤟🤟🤟Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

// create function which takes in an object, and a callback function
// the function scans the object and returns first key where callback is true

const findKey = (obj, applyFuncToValue) => {
  for (const value in obj) {
    if (applyFuncToValue(obj[value])) {
      return value;
    }
  }
  return undefined;
};

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
console.log(result1);

const result2 = findKey({
  "Blue Hill": 'blue',
  "Akaleri":   'blue',
  "noma":      'blue',
  "elBulli":   'blue',
  "Ora":       'green',
  "Akelarre":  'blue'
}, x => x === 'green'); // => "ora"
console.log(result2)

const result3 = findKey({
  "Blue Hill": 'blue',
  "Akaleri":   'blue',
  "noma":      'blue',
  "elBulli":   'blue',
  "Ora":       'blue',
  "Akelarre":  'blue'
}, x => x === 'green'); // => "undefined"
console.log(result3)

const result4 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 3 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 4 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "undefined"
console.log(result4);

assertEqual(result1, 'noma');
assertEqual(result2, 'Ora');
