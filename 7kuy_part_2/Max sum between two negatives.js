/*
DESCRIPTION:
Task
You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell, None for Rust.

Example 1
[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^
Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).

Example 2
[4, -1, -2] -> 0
     ^   ^
There is nothing between -1 and -2, so return 0.
 */

function maxSumBetweenTwoNegatives(a) {
    let result = -1;
    let sum = -1;
    for (let x of a) {
        if (sum === -1 && x < 0) {
            sum = 0;
        } else if (sum >= 0 && x < 0) {
            result = Math.max(result, sum);
            sum = 0;
        } else if (sum >= 0) {
            sum += x;
        }
    }
    return result;
}