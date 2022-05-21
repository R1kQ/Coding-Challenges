// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//PREP
//Parameters: Receive a String
//Returns: Returning a String with provided name + ' plays banjo' if it starts with 'R' or 'r' 
//         Returning a String with provided name + ' does not play banjo' it it doesn't start with 'R' or 'r'
//Examples: "Adam" => "Adam does not play banjo"
//          "Richard" => Richard plays banjo"
//          "ronnie" => ronnie plays banjo"

//PseudoCode:
//Take name string
//Check if first char is 'R' or 'r' with conditional
//Return proper string

function areYouPlayingBanjo(name) {
    if(name[0] === "R" || name[0] === "r") {
      return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    };
  };