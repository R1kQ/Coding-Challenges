// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

//PREP
//Parameters: Recieve a String
//Returns: Returns a String without Polish alphabet
//Example: "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
//         "Lech Wałęsa" => "Lech Walesa"
//         "Maria Skłodowska-Curie" => "Maria Sklodowska-Curie"

//Psuedocode:
//Take Polish String
//Convert Polish String in to an Array
//Check each character
//If character can be converted, do so
//Turn Array back into String
//Return cleaned String

function correctPolishLetters (string) {
    let arr1 = string.split("");
    return arr1.map(x => x === 'ą' ? 'a' : x === 'ć' ? 'c' : x === 'ę' ? 'e' : x === 'ł' ? 'l' : x === 'ń' ? 'n' : x === 'ó' ? 'o' : x === 'ś' ? 's' : x === 'ź' ? 'z' : x=== 'ż' ? 'z' : x).join("");
  };