// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//PREP
//Parameters: We'll be receiving a STRING
//Returns: We'll be retuning a STRING without vowels; not including 'y' as a vowel
//Examples: "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"
//          "Vowel" => "Vwl"
//          "I hate dogs" => "ht dgs"


//I want to iterate over the string
//Turn string into array
//Identify the vowels
//Identify both capital and lowercase vowels
//Remove vowels
//Turn array back into string
//Return cleaned string

function disemvowel(str) {
    return str.split("").filter(x => x !== 'A' && x !== "a" && x !== "O" && x !== "o" && x !== "E" && x !== "e" && x !== "I" && x !== "i" && x !== "U" && x !== "u").join("");
  };