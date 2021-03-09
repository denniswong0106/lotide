# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@denniswong0106/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: description: Takes an array and returns the first element of the array.
* `tail(array)`: description: Takes an array, removes the first element of the array, and returns the rest of the array.
* `middle(array)`: description: returns either the single or double middle element(s) of a given array. Returns 