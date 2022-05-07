// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

//PREP
//Parameters: Receive and Integer
//Returns: Returns a large String that is the multiplication table for that number from 1 - 10. 
//        Each new multiplication starts on a new line. Will need to use '\n'
//Examples: 5 => '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'


//Pseudocode: 
//Take number
//Create empty String
//Iterate over 1 - 10
//Create new String during each iteration with 'i' and 'number' and their product
//Amend new String to empty String variable
//Return String variable as the multiplication table

function multiTable(number) {
    let table = "";
    for(let i = 1; i <= 10; i++) {
      if(i === 10) {
        table += `${i} * ${number} = ${i * number}`;
      } else{
        table += `${i} * ${number} = ${i * number}` + '\n';
      } ;
    };
    return table;
  };