// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//PREP
//Parameters: Array
//Return: Array
//Examples: [0,1] => [0]
//          [0,1,2,3] => [0,2]
//          [1,3,8,7,6] => [8,6]

//Pesudocode:
//Take Array of Ints
//Sort out integers that are odd = .filter()
//Don't alter integer positions/order
//Return cleaned Array of Ints

function noOdds( values ){
    // Return all non-odd values
    return values.filter(x => x % 2 === 0);
  }