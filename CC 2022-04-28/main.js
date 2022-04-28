// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return a.map(x => {
      for(let i = 0; i < vowels.length; i++){
        if(x === vowels[i].charCodeAt(0)) {
          return vowels[i];
        }
      }
      return x;
    });
  }