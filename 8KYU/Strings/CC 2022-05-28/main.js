// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

//PREP
//Parameters: Receive a String
//Returns: A String free of numbers
//Examples: 'This looks5 grea8t!' => 'This looks great!'
//          'E3at m2e2!!' => Eat me!!
//          "123456789" => ""


//Pseudocode: 
//Receive String
//Check every character if it's a number
//Remove number chars or just return String chars
//Return clean String

function stringClean(s){
    // Function will return the cleaned string
    return s.split("").filter(x => isNaN(x) || x === " ").join("");
  };