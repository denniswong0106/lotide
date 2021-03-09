const eqObjects = function(obj1, obj2) {
  let outputBoolean = true;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (const item in obj1) {
      if (typeof obj1[item] === 'object') {
        outputBoolean = eqObjects(obj1[item], obj2[item]);
      } else if (obj1[item] !== obj2[item]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return outputBoolean;
};

module.exports = eqObjects;