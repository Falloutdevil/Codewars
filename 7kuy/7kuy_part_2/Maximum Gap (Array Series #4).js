/*
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_

Repetition of numbers in the array/list could occur.

The Maximum Gap is computed Regardless the sign.
 */

function maxGap(numbers) {
    let gaps = []
    numbers = numbers.sort((a, b) => a - b)
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] < numbers[i + 1]) gaps.push(numbers[i + 1] - numbers[i])
    }
    if (gaps.length === 0) return 0
    return gaps.reduce((a, b) => Math.max(a, b))
}