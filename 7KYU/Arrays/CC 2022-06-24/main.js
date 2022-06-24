// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

//PREP
//Parameter: Int
//Return: Array of Ints and Strings
//Examples: 3 => [1,2,"Fizz"]
//          5 => [1,2,"Fizz",4,"Buzz"]
//          15 => [1,2,"Fizz",4,"Buzz",6,7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]

//Pseudocode:
//Take Int
//Create an empty Array
//Create a Forloop to loop over x Int times
//Per time push i number into empty array
//Use conditional to determing whether i is a multiple of 3, 5, 3&5
//Push "Fizz", "Buzz", "FizzBuzz" respectively
//Return Array
function fizzbuzz(n)
{
  let arr = [];

  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr.push("FizzBuzz");
    }else if(i % 3 === 0){
      arr.push("Fizz");
    }else if(i % 5 === 0){
      arr.push("Buzz");
    }else {
      arr.push(i);
    }
  };
  
  return arr;
};  