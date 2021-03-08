const assertEqual = require("../assertEqual");
const head = require('../head.js');
// test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(['only one element']), 'only one element');