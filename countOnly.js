// the function will take an array of stuff, and an object, sort through array
// using the object as a sorter of what we want

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] ++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;