// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//PREP
//Parameters: Receive an Array of Strings
//Returns: Return alphabetical String with '***' between each letter
//Examples: ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] => 'b***i***t***c***o***i***n'


//Pesudocode

//Receive Array
//Sort Array alphabetically and by ASCII values of the cars
//Take first String in Array
//Split that String into another Array
//Join that Array with '***' between the letters into a String
//Return new String

function twoSort(s) {
    return s.sort()[0].split("").join("***");
  };