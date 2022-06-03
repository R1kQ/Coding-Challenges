// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//PREP
//Parameters: 2 Array
//Return: Array
//Example: [1,2,2,2,3],[2] => [1,3]
//         [1,2],[1] => [2]
//         [1,2,3], [1,2] => [3]

//Pseudocode:
//Take both Array
//Iterate through both to compare elements
//Remove elements in array 1 that are in array 2
//Return clean array

function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
  }