// DESCRIPTION:

// Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// Solution:

function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

//   The summation function takes a positive integer num as its parameter and returns the summation of every number from 1 to num. Here's how the function works:

// The function initializes a variable sum to 0. This variable will be used to store the running total of the summation.

// The function uses a for loop to iterate from 1 to num (inclusive). The loop uses the loop variable i to keep track of the current number being added to the summation.

// Inside the loop, the function adds the current value of i to the sum variable. This updates the running total of the summation.

// Once the loop has finished iterating through every number from 1 to num, the function returns the final value of sum.