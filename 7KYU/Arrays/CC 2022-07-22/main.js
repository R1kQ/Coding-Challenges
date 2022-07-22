// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

//PREP
//Parameters: Array
//Return: Array
//Example:  [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Pseudocode:
//Take array
//Open each element and spread it into another array
//Sort new array
//Return sorted array
"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  let newArray = [];
  array.forEach(x => newArray.push(...x));
  return newArray.sort((a, b) => a - b);
};