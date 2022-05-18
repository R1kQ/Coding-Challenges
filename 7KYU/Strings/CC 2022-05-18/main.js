//Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//PREP
//Parameters: Take in a string, "word"
//Returns: Returning an ordered list/array of the indexes of capital letters in 
//"word"
//Examples: "HotDog" will be passed and we will return [0,3]
//          "CodEWaRs" will be passed and we will return [0,3,4,6]


var capitals = function (word) {
    //Split the string into an array
    //Iterate through array
    //Identify the capital letters
    //We'll save their index spots
    let capIndex = [];
    word.split("").forEach((x, index) => x === x.toUpperCase() ? capIndex.push(index) : null);
    
    return capIndex;
  };