// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

//PREP
//Parameters: String
//Return: Int
//Examples: "this is number: 7" => 7
//          "123" => 123
//          Hello1 World2 => 12

//Pesudocode:
//Take String
//Turn String into array
//Filter out non numbers
//Turn Array into String
//Convert String into Int
//Return Int

function getNumberFromString(s) {
    return Number(s.split("").filter(x => x != " ").map(x => +x).filter(x => x >= 0).join(""))
  };