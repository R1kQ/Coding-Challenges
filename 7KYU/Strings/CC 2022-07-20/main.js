// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//PREP
//Parameters: String
//Returning: String
//Examples: "test" => "es"
//          "middle" => "dd"
//          "testing" => "t"

//Pseudocode:
//Take string
//Find length
//Find char/chars that are in the middle using .charAt
//If length is odd, return 1 char
//If length is even, return 2 chars
//Return char/chars using slice

function getMiddle(s)
{
  //Code goes here!
  const stringArr = s.split("");
  if(stringArr.length % 2 === 0) {
		 return `${stringArr[stringArr.length / 2 - 1]}${stringArr[stringArr.length / 2]}`;
  }else {
		return `${stringArr[Math.floor(stringArr.length / 2)]}`;
  };
};