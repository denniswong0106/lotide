const eqArrays = (actualArr, expectedArr) => {
  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = (actualArr, expectedArr) => {
  console.log()
}