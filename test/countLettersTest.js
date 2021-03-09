const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe('#countLetters',() => {
  const sentence = 'hello darkness my old friend';
  console.log('const sentence = ', sentence);
  it('it should return 2 if given countLetters(sentence)["n"]', () => {
    let actualOutput = countLetters(sentence)["n"];
    let expectedOutput = 2;
    assert.equal(actualOutput, expectedOutput);
  })
  it('it should return undefined if given countLetters(sentence)["z"]', ()=> {
    let actualOutput = countLetters(sentence)["z"];
    let expectedOutput = undefined;
    assert.equal(actualOutput, expectedOutput);
  })
  console.log('#OutputObject', {
    h: 1,
    e: 3,
    l: 3,
    o: 2,
    ' ': 4,
    d: 3,
    a: 1,
    r: 2,
    k: 1,
    n: 2,
    s: 2,
    m: 1,
    y: 1,
    f: 1,
    i: 1
  }
  )
  it('it should return #OutputObject if given sentence', ()=> {
    let actualOutput = countLetters(sentence);
    let expectedOutput = {
      h: 1,
      e: 3,
      l: 3,
      o: 2,
      ' ': 4,
      d: 3,
      a: 1,
      r: 2,
      k: 1,
      n: 2,
      s: 2,
      m: 1,
      y: 1,
      f: 1,
      i: 1
    };
    assert.deepEqual(actualOutput, expectedOutput);
  })
});