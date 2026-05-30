// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// const testDataOne = [17, 21, 23];
// const testDataTwo = [12, 5, -5, 0, 4];

// let runningSentence = '...';

// function printForecast(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let eachForecast = ` ${arr[i]}C in ${i + 1} days ...`;
//     runningSentence += eachForecast;
//   }
//   console.log(runningSentence);
//   runningSentence = '...';
// }

// printForecast(testDataOne);
// printForecast(testDataTwo);

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const totalHoursWorked = function (arr) {
  let accumulator = 0;
  for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i];
  }
  return `Work week was ${accumulator} hours in total.`;
};

const avgDailyHours = function (arr) {
  let accumulator = 0;
  for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i];
  }
  return accumulator / arr.length;
};

// The day with the most hours worked

const numDaysWorked = function (arr) {
  return arr.length;
};

const checkIfWorkedFullTime = function (arr) {
  if (totalHoursWorked >= 35) {
    return true;
  } else {
    return false;
  }
};

console.log(totalHoursWorked(testData));
console.log(avgDailyHours(testData));
console.log(numDaysWorked(testData));
console.log(checkIfWorkedFullTime(testData));
