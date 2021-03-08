const middle = require('../middle.js');
const assert = require('chai').assert;

describe('#middle', () => {
  it('should return [2] when given [1,2,3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('should return [] when given [1, 2]', () => {
    assert.deepEqual(middle([1,2]), [])
  })
  it('should return [] when given [1]', () => {
    assert.deepEqual(middle([1]), [])
  })
  it('should return [] when given [1, 2]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3])
  })
});