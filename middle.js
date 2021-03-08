const assertArraysEqual = require('./assertArraysEqual');

const middle = arr => {
  let midpoint = Math.floor(arr.length / 2);
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[midpoint]];
  } else {
    return [arr[midpoint - 1], arr[midpoint]];
  }
};

module.exports = middle;