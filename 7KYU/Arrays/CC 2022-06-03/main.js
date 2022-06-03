// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//PREP
//Parameters: Array and Int
//Return: Boolean
//Examples: [66, 101], 200 => true
//          [78, 117, 110, 99, 104, 117, 107, 115], 100 => false
//          [101, 45, 75, 105, 99, 107], 107 => true

//Pseudocode:
//Take Array and Int
//Iterate through Array and make sure all elements are below or equal to Int
//Return true if it's the case, false if it's not

function smallEnough(a, limit){
    return a.filter(x => x > limit).length === 0 ? true : false;
  };