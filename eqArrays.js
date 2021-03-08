const eqArrays = (actualArr, expectedArr) => {
  let output = true;
  if (actualArr.length !== expectedArr.length) {
    return false;
  } else {
    for (const e in actualArr) {
      if (Array.isArray(actualArr[e])) {
        output = eqArrays(actualArr[e],expectedArr[e]);
      } else {
        if (actualArr[e] !== expectedArr[e]) {
          return false;
        }
      }
    }
  }
  return output;
};

module.exports = eqArrays;