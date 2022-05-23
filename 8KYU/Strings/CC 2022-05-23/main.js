// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

//PREP
//Parameters: Receives a String
//Returns: Returns a specific String ("wide" or "small") if the animal is an alligator or not
//Exmaples: "toucan" => "wide"
//          "ant bear" => "wide"
//          "alligator" => "small"

//PseudoCode
//Take animal string
//Check if animal string is an alligator with conditional
//Account for case-sensitivity
//return "wide" if not a gator
//return "small" if anlligator

function mouthSize(animal) {
    if(animal.toLowerCase() === "alligator"){
      return "small";
    } else {
      return "wide";
    };
  };