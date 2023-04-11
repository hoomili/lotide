# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hoomili/lotide`

**Require it:**

`const _ = require('@hoomili/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: receives an array and returns the first element of an array
* `tail`: receives an array and returns the same array without the initial element
* `middle`: receives an array and return the middle element (one element if the length of the array is an odd number, and array of the middle two element if the length of the array is even)
* `assertArraysEqual`: checks if two arrays are equal
* `assertEqual`: checks if two primitive variables are equal
* `eqArrays`: compares two arrays
* `eqObjects`: compares two objects
* `assertObjectsEqual`: checks if two objects are equal
* `findKey`: finds a specific key of an object
* `countLetters`: counts the occurrence of each letter inside a sentence
* `flatten`: flattens a nested array
* `countOnly`: counts specific items in an array based on a key values of an object
* `map`: transforms the array elements based on the function provided by the user
* `findKeyByValue`: finds the first key that represents the value given by the user
* `letterPositions`: returns an array of index occurrence of a given letter in a sentence
* `takeUntil`: receives an array and a string. iterates through the array and returns an array of strings up to the string provided by the user.
* `without`: receives two arrays of numbers and removes the elements from the first array that matches the second array
