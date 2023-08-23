/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
 */

function maxTriSum(numbers) {
    const sorted = [...new Set(numbers.sort((a, b) => b - a))];
    return sorted[0] + sorted[1] + sorted[2];
}