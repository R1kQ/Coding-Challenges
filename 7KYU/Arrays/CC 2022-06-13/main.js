// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//PREP
//Parameters: Array
//Return: Array
//Example: ["Telescopes", "Glasses", "Eyes", "Monocles"] => ["Eyes", "Glasses", "Monocles", "Telescopes"]
//         ["Beg", "Life", "I", "To"] => ["I", "To", "Beg", "Life"]
//         ["", "Moderately", "Brains", "Pizza"] => ["", "Pizza", "Brains", "Moderately"]

//Pseudocode:
//Take array
//Sort strings in Array by element length
//Return sorted Array

function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((a,b) => a.length - b.length);
  };