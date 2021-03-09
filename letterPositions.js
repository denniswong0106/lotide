const letterPositions = function(sentence) {
  const results = {};
  for (let i in sentence) {
    i = Number(i);
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions