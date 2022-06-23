// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//PREP
//Parameters: 2 String, text and a char
//Return: String
//Example: "abc","z" => "zzz"
//         "","z" => ""
//          "_3ebzgh4","&" => "&&&&&&&&"

//Psuedocode:
//Take String and Char
//Check is String is empty; if so return String
//If not, iterate over every char of String and convert it to Char
//Return new String

function contamination(text, char){
    if(text === "") {
      return text;
    }else {
      return text.split("").map(x => x = char).join("");
    };
  };