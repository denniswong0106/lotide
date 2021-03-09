const findKeyByValue = (obj, searchValue) => {
  for (const category in obj) {
    if (obj[category] === searchValue) {
      return category;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;