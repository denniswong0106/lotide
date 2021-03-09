const eqArrays = require('../eqArrays.js');
const assert = require('chai').assert;

describe('#eqArrays',() => {
  it('it should return true if given ["1", "2", "3"], ["1", "2", "3"])', ()=> {
    let actualOutput = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.isTrue(actualOutput);
  })
  it("it should return true if given (['a','b',[1, 2, 3, [true, false]], 'help'], ['a','b',[1, 2, 3, [true, false]], 'help'])", ()=> {
    let actualOutput = eqArrays(['a','b',[1, 2, 3, [true, false]], 'help'], ['a','b',[1, 2, 3, [true, false]], 'help']);
    let expectedOutput = true;
    assert.isTrue(actualOutput);
  })
  it("it should return false if given (['a','b', 1, 2, 3, true, false, 'help'], ['a','b',[1, 2, 3, [true, false]], 'help'])", ()=> {
    let actualOutput = eqArrays(['a','b', 1, 2, 3, true, false, 'help'], ['a','b',[1, 2, 3, [true, false]], 'help']);
    assert.isFalse(actualOutput);
  })
});