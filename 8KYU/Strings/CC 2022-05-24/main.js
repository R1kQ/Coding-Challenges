//PREP
//Parameters: Receive a String
//Returns: Returns a boolean
//Examples: "anna" => true
//          "walter" => false
//          12321 => false

//Pseudocode:
//Receive String
//Turn String into array
//Reverse array
//Turn reversed array to String
//If original string === reversed string, return true if not, return false
function isPalindrome(line) {
    return String(line) === String(line).split("").reverse().join("");
  };
