// 8kyu

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// psuedo
// Split the string by commas.
// Check if the resulting array's length is less than 3 (since we need at least 3 sequences for there to be a middle part after removing the first and last ones).
// If the length is less than 3, return null.
// Otherwise, remove the first and last sequences.
// Join the remaining sequences with spaces and return the result.

function array(string) {
  const stringArr = string.split(",");
  if (stringArr.length < 3) {
    return null;
  }
  stringArr.shift();
  stringArr.pop();

  return stringArr.join(" ");
}
