// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//PREP
//Parameters: Receive a card in form of a String
//Returns: Return the suite of the card in the form of a String
//Example: '3♣' will return 'clubs'
//         '3♥' will return 'hearts'
//         '3♠' will return 'spades'

//Pseudo-code:

//Get string
//Check if string contains a certain suit
//Return the proper string that belongs to that suit
//Use conditionals
//Look at last char which will always be the suit

function defineSuit(card) {
    let suit = card[card.length - 1];
    
    switch(suit){
      case '♣':
        return 'clubs';
      case '♦':
        return 'diamonds';
      case '♥':
        return 'hearts';
      case '♠':
        return 'spades';
    };
  
  };