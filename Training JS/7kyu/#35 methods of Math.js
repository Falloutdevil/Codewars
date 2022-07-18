/*
Task
Coding in function thinkingAndTesting.

This time I won't explain to you how to do it. You need to look at the test cases. Thinking and testing. solve this kata by yourself ;-)

The only hint is: it is related to power.
 */

const thinkingAndTesting = (number,base) => number - Math.pow(base, Math.floor(Math.log(number) / Math.log(base)));
