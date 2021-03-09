# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: description: Takes an array and returns the first element of the array.
* `tail(array)`: description: Takes an array, removes the first element of the array, and returns the rest of the array.
* `middle(array)`: description: returns either the single or double middle element(s) of a given array. Returns an empty array if given array has less than 2 elements.
* `flatten(array)`: description: Takes an array and flattens (ie. removes) any nested arrays within it. A flattened array, with all nested elements put into one flat array. 
* `eqArray(array1, array2)`: description: A comparison function which compares two given arrays, and returns true if both arrays are the same. Works with nested arrays.
* `eqObjects(obj1, obj2)`: description: A comparison function which compares two given objects, and returns true if both objects are the same. Works with nested objects.
* `findKeyByValue(obj, keyvalue)`: description: A search function which looks through the object with the given key value. If the key value has a match, returns the value assigned to key. If no match, returns undefined.
* `countOnly(arrayOfItems, ObjectOfSearchItems)`: description: A filter function which takes two arguments, an array of items, and an object of search items, in the format of {itemName: true/false}. The function takes the itemName, if value assigned to itemName is true, function searches through the arrayOfItems, and counts how many occurances of itemName is found. An object with the number of each itemName given with be outputted.
* `countLetters(string)`: description: A function which loops through each letter of a given string, and outputs an object with each letter as a key, and the number of times found in the string as the value.
* `letterPositions()`: description: A function that takes in a string and returns an object with the each key equal to a letter in the sentence, and the value is equal to the positions the letter is found in the string. Example. letterPositions('eeew') would output an object:
{e: [0, 1, 2],
 w: [3]}

 



## Future Functions to Refactor:

* `map()`
* `findKey()`

* `takeUntil()`
* `without()`
* 
* 
* 
* 
* 