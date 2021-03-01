const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤟🤟🤟Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Here the function must return a new array with the head removed.
const tail = array => {
  return array.slice(1);
};


//test case
const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
console.log(result);
assertEqual(result.length, 2); // tail array should have 2 elements
assertEqual(result[0],'Lighthouse'); //first input should be 'Lighthouse'
assertEqual(result[1], 'Labs');