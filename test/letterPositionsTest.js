const letterPositions = require('../letterPositions.js');
const assert = require('chai').assert;

describe('#letterPositions',() => {
  const exampleText = 'lighthouse in the house';
  console.log('exampleText = ', exampleText);
  console.log('------');
  it('it should return [4, 14] if letterPositions(exampleText)["t"]', ()=> {
    let actualOutput = letterPositions(exampleText)["t"]; 
    let expectedOutput = [4, 14];
    assert.deepEqual(actualOutput, expectedOutput);
  })
  it('it should return [9, 16, 22] if given letterPositions(exampleText)["e"]', ()=> {
    let actualOutput = letterPositions(exampleText)['e'];
    let expectedOutput = [9, 16, 22];
    assert.deepEqual(actualOutput, expectedOutput);
  })
  it('it should return undefined if given letterPositions(exampleText)["z"] ', ()=> {
    let actualOutput = letterPositions(exampleText)["z"];
    let expectedOutput = undefined;
    assert.deepEqual(actualOutput, expectedOutput);
  })
});


// TEST CODE
// const smallString = 'lighthouse in the house';
// console.log(letterPositions(smallString));
// assertArraysEqual(letterPositions(smallString)['t'], [4, 14]);
// assertArraysEqual(letterPositions(smallString)['u'], [7, 20]);
// assertArraysEqual(letterPositions(smallString)['e'], [9, 16, 22]);
// assertArraysEqual(letterPositions(smallString)['l'], [0]);