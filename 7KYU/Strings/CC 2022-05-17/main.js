// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

//PREP
//Parameters: String
//Returns: A string with spaces between characters
//Examples: 'Hello World' => 'H e l l o  W o r l d'
//          'My house' => 'M y  h o u s e'

function spacify(str) {
    return str.split("").map(x => x + " ").join("").trim();
  };