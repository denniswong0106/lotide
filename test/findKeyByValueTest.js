const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe('#findKeyByValue',() => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  const groceryProducts = {
    produce: 'apple',
    snacks: 'chips',
    drinks: 'orange juice',
    meats: 'chicken',
    dessert: 'ice cream'
  };
  console.log('# const = bestTVShowsByGenre', bestTVShowsByGenre);
  console.log('---------');
  console.log('# const = groceryProducts', groceryProducts)  
  it('it should return "drama" if given findKeyByValue(bestTVShowsByGenre, "The Wire")', ()=> {
    let actualOutput = findKeyByValue(bestTVShowsByGenre, "The Wire");
    let expectedOutput = "drama";
    assert.equal(actualOutput, expectedOutput);
  })
  it('it should return undefined if given findKeyByValue(groceryProducts, "")', ()=> {
    let actualOutput = findKeyByValue(groceryProducts, '');
    let expectedOutput = undefined;
    assert.equal(actualOutput, expectedOutput);
  })
});