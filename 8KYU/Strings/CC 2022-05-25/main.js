// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

// X will be a valid integer number.
// X will be either a number or a string. Both are valid.

//PREP
//Parameters: Receive an Int
//Returns: Returns a String depending if Int^2 is > 1000
//Examples: 50 => 'It\'s hotter than the sun!!'
//          4 => 'Help yourself to a honeycomb Yorkie for the glovebox.'

//Pseudocode:
//Take int
//Square int
//Compare if squared int is larger than 1000
//If larger than 1000, return 'It\'s hotter than the sun!!'
//If not larger than 1000, return 'Help yourself to a honeycomb Yorkie for the glovebox.'

function apple(x){
    return x ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
  };