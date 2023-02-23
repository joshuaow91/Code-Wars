// DESCRIPTION:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// Solution:

const squareSum = arrayOfNumbers => arrayOfNumbers.reduce( (acc, val) => val ** 2 + acc, 0 )
