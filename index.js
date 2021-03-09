const head = require("./head");
const tail = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKeyByValue = require('./findKeyByValue');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects')

module.exports = {eqArrays, eqObjects, head, tail, middle, flatten, countLetters, countOnly, findKeyByValue};

console.log(module.exports);