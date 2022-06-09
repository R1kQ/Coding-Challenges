// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

//PREP
//Parameters: Receive two Strings
//Returns: Returning a Stirng that is of combined passed Strings
//Examples: "Animals", "Good" => `Animals are Good`

//Pseudocode:
//Take both strings
//Drop both strings into a template literal
//Return newly formed string

var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`;
  };