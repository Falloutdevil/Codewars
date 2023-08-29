/*
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.
 */

function arrayLeaders(numbers) {
    return numbers.filter((a , i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)
}