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

assertEqualArray = (actualArr, expectedArr) => {
  if (actualArr.length === 0 && expectedArr.length === 0){
    console.log(`🤟🤟🤟Assertion Passed: Empty === Empty`);
  } else {
    for (let i = 0; i < actualArr.length; i++){
      if (actualArr[i] !== expectedArr[i]){
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

//test case
const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
assertEqualArray(result, ['Lighthouse', 'Labs']); //should pass
assertEqualArray(result, words); //should output false as I compare new and old array

const randomArray = ['photo', 1, true, false, -99, 'why are there multiple data types'];
result = tail(randomArray);
assertEqualArray(result, [1, true, false, -99, 'why are there multiple data types']);

const testArr = [1];
result = tail(testArr);
console.log(result);
assertEqualArray(result, []);