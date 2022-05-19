// Your task is to write a function which cuts cancer cells from the body.

// Cancer cells are divided into two types:
// Advance stage,described as letter C
// Initial stage,described as letter c
// Rest cells are divided as follows:

// Normal cell,described as lowercase letter
// Important cell,described as uppercase letter
// Prerequisites:
// Important cell,cannot be cut out.
// Advance cancer cell,should be cut out with adjacent cells if it can be done.
// Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.

function cutCancerCells(organism){
    //turn string into array
    //iterate over array and search for cancer cells
    //need conditionals in order to safely remove cancer cells from good tissue
    //If x !== 'C' && isn't next to a 'C' while being capital && !== 'c'  then push to new array
    //making a clean array
    let cleanedArr = [];
    organism.split("").forEach((x, index) => {
      
      if(x === x.toUpperCase() && x !== "C"){
        cleanedArr.push(x);
      }else if(x !== "C" && x !== 'c' && organism[index + 1] !== "C" && organism[index - 1] !== "C") {
        cleanedArr.push(x);
      } 
    })
    
    //put array back into string
    //return cleaned string
    return cleanedArr.join("");

}