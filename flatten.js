const flatten = hillyArr => {
  let outputArr = [];
  for (const element of hillyArr) {
    if (Array.isArray(element)) {
      outputArr = outputArr.concat(flatten(element));
    } else {
      outputArr.push(element);
    }
  }
  return outputArr;
};

module.exports = flatten;