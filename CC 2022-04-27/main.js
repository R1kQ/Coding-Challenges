// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {
  
    let sum = 0;
    let arr2 = arr.sort((a,b) => b - a)
  
    if(arr2.length < 2) {
      return 0
    } else {
      for (let i = 0; i < arr2.length - 1; i++) {
          sum += arr[i] - arr[i + 1]
      }
    }
    
    return sum;
  }