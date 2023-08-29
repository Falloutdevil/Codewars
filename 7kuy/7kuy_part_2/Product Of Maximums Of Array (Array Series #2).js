/*
Task
Given an array/list [] of integers , Find the product of the k maximal numbers.
 */

function maxProduct(numbers, size) {
    return numbers.sort((a, b) => b - a).slice(0, size).reduce((acc, n) => acc * n)
}