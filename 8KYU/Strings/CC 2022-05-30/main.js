// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

//PREP
//Parameters: Rececing a String
//Returns: We're returning a String which has the names swapped
//Examples: 'john McClane' => 'McClane john'
//          'rik Quin' => 'Quin rik'
//          'henry Taf' => 'Tef henry'

//Pseudocode:
//Receive String
//Turn string into array
//Swap array element position
//Turn array into string
//Return string

function nameShuffler(str){
    //Shuffle It
    return `${str.split(" ")[1]} ${str.split(" ")[0]}`;
  };