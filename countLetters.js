const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤟🤟🤟Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

// loop through the string and output obj that has property of each found letter,
// and value of how many times the letter was found in the string given.

const countLetters = str => {
  output = {};

  for (letter of str) {
    if (output[letter]) {
      output[letter] ++;
    } else {
      output[letter] = 1;
    }
  }
  return output;
}

sentence1 = 'hello darkness my old friend';
sentence2 = `I don't like the dark`;
sentence3 = 'hahahahahahahaha';

console.log(countLetters(sentence1));
console.log(countLetters(sentence2));
console.log(countLetters(sentence3));
assertEqual(countLetters(sentence1)['n'], 2);
assertEqual(countLetters(sentence2)[' '], 4);
assertEqual(countLetters(sentence3)['d'], undefined);