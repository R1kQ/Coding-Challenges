// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

//PREP

//Parameters: Receive an Array of Strings
//Return: An Array of Strings with indexes reflected before the elements
//Examples: number([]) // => []
//          number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

//Pseudocode:
//Take the array
//Iterate through it
//Find the index of each element
//Append index before each element
//Return an Array of Strings with this info

var number=function(array){
    //your awesome code here
    return array.map((x, index) => `${index + 1}: ${x}`);
  };