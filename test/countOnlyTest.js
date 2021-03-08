countOnly = require('../countOnly');
assert = require('chai').assert;

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
    "Joe",
    "Joe"
  ];
  const countObject =  { 
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
  }
  console.log('#firstNames Array input \n',firstNames);
  console.log('#countObject Object input\n', countObject);
  console.log('-------');
  it('returns 1 when given countOnly(firstNames, countObject)["Fang"]', () => {

    let actualOutput = countOnly(firstNames, countObject)['Fang'];
    let expectedOutput = 2;
    assert.strictEqual(actualOutput, expectedOutput);
  })
  it('returns undefined when given countOnly(firstNames, countObject)["karima"]', () => {
    let actualOutput = countOnly(firstNames,countObject)['Karima'];
    let expectedOutput = undefined;
    assert.strictEqual(actualOutput, expectedOutput);
  })
  it('returns undefined when given countOnly(firstNames, countObject["Agouhanna"]', () => {
    let actualOutput = countOnly(firstNames, countObject)['Agouhanna'];
    let expectedOutput = undefined;
    assert.strictEqual(actualOutput, expectedOutput);
  })
  it('returns { Fang: 2, Jason: 1 } when given countOnly(firstNames, countObject)', () => {
    let actualOutput = countOnly(firstNames, countObject);
    let expectedOutput = { Fang: 2, Jason: 1 };
    assert.deepEqual(actualOutput, expectedOutput);
  })
});