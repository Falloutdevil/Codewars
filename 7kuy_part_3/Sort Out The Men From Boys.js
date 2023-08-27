/*
DESCRIPTION:
Scenario
Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd!alt!alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys
 */

function menFromBoys(arr) {
    return [...new Set(arr.filter(v => v % 2 === 0).sort((a, b) => a - b).concat(arr.filter(v => v % 2 !== 0).sort((a, b) => b - a)))]
}