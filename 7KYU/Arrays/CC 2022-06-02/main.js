// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//PREP
//Parameters: Array
//Return: Int
//Examples: [2, 3, 1] => 0
//          [5, 10, 14] => 1
//          [-5.2, -10.6, 14] => 0

//Pseudocode:
//Take Array
//Sort Array
//Return index of middle element in sorted array from original Array

function gimme (triplet) {
    let input = [...triplet].sort((a,b) => a - b);
    return triplet.indexOf(input[1]);
  };