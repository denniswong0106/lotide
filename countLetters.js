// loop through the string and output obj that has property of each found letter,
// and value of how many times the letter was found in the string given.

const countLetters = str => {
  let output = {};

  for (const letter of str) {
    if (output[letter]) {
      output[letter] ++;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};

module.exports = countLetters;