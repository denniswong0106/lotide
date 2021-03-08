const tail = require('../tail.js')
const assert = require('chai').assert;

describe('#tail', () => {
  it('should return [2, 3] when given [1,2,3]', () => {
    assert.deepEqual(tail([1,2,3]), [2, 3]);
  })
  it('should return [] when given ["a"]', () => {
    assert.deepEqual(tail(['a']), []);
  })
});