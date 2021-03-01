const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤟🤟🤟Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function will take first item in array and output item
const head = array => {
  return array[0];
};

// test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(['only one element']), 'only one element');