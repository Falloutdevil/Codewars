/*
DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

const find_average = arr => {
    return arr.length === 0 ? 0 : arr.reduce((prev, curr) => prev + curr, 0) / arr.length
};