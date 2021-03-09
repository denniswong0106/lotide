const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects',() => {
  it('it should return true if given ({ a: "1", b: "2" }, { b: "2", a: "1" }', ()=> {
    let actualOutput = eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" });
    assert.isTrue(actualOutput);
  })
  it('it should return false if given ({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" })', ()=> {
    let actualOutput = eqObjects({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" });
    assert.isFalse(actualOutput);
  })
  it('it should return true if given ({ a: "1", b: "2", c: {d: "3"}}, { a: "1", b: "2", c: {d: "3"}})', ()=> {
    let actualOutput = eqObjects({ a: "1", b: "2", c: {d: "3"}}, { a: "1", b: "2", c: {d: "3"}});
    assert.isTrue(actualOutput);
  })
  it('it should return true if given ([],[])', ()=> {
    let actualOutput = eqObjects([], []);
    assert.isTrue(actualOutput);
  })
});