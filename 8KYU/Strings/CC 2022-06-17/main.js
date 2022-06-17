// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//PREP
//Parameters: String
//Return: String
//Example: "String"      -> "SSttrriinngg"
//         "Hello World" -> "HHeelllloo  WWoorrlldd"
//         "1234!_ "     -> "11223344!!__  "

//Pseudocode:
//Take String
//Iterate over every character
//Double character
//Return String

function doubleChar(str) {
    // Your code here
    return str.split("").map(x => x + x).join("");
  };