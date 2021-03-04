// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// if obj1 and obj2 have same number of keys, check each key value of obj 1 matches 
// key value of obj2. If value is not primitive, apply eqObjects on the not primitive 
// value 


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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const nestedObj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: ['dennis', 'king', 'smartest', {trait1: 'geniuso', trait2: 'like a really smart person'}],
  e: 5,
  f: true
}

const nestedObj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: ['dennis', 'king', 'smartest', {trait1: 'geniuso', trait2: 'like a really smart person'}],
  e: 5,
  f: true
}

const nestedObj3 = {
  a: 1,
  b: 2,
  c: 3,
  d: ['you not that special']
}

const nestedObj4 = {
  a: 1,
  b: 2,
  c: 3,
  d: ['you not that special']
}

console.log(eqObjects(nestedObj1, nestedObj2)); // => true
console.log(eqObjects(nestedObj2, nestedObj1)); // => true
console.log(eqObjects(nestedObj2, nestedObj3)); // => false
console.log(eqObjects(nestedObj3, nestedObj4)); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

console.log(eqObjects({hello: 'dark'}, {hello: 'dark'})) // => true

const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 5]
const arr4 = [1, 2, 3, 4, 5]

console.log(eqObjects(arr1, arr2)); // true
console.log(eqObjects(arr2, arr3)); // false
console.log(eqObjects(arr3, arr4)); // false
console.log(eqObjects(arr1, arr4)); // false
