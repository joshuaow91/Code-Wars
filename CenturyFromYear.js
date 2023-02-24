// DESCRIPTION:

// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task

// Given a year, return the century it is in.

// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// Solution:
function century(year) {
    if (year % 100 === 0) {
      return year / 100;
    } else {
      return Math.floor(year / 100) + 1;
    }
  }

//   This function checks if the year is divisible by 100. If it is, 
// then the century is equal to the year divided by 100. 
// If not, the century is equal to the integer part of the year divided by 100, plus 1.