const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤟🤟🤟Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const findKeyByValue = (obj, searchValue) => {
  for (const category in obj) {
    if (obj[category] === searchValue) {
      return category;
    }
  }
  return undefined;
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(groceryProducts, 'ice cream'), 'dessert');
assertEqual(findKeyByValue(groceryProducts, ''), undefined);
assertEqual(findKeyByValue(groceryProducts, true), undefined);
assertEqual(findKeyByValue(groceryProducts, 'apple'), 'produce');

