// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

//PREP
//Parameters: receive Array of Ints
//Retruns: A decimal of the binary in the array, Int
//Examples: [0,0,0,1] => 1
//          [1,1,1,1] => 15
//          [0,1,1,0] => 6

//Pseudocode
//Take array
//Join array
//Convert joined string from binary to decimal string
//Return decimal string as an int

const binaryArrayToNumber = arr => {
    return parseInt((arr.join("")), 2);
  };
  