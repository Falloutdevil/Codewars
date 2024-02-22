/*
Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
 */

function extraPerfect(n) {
    let array = [];

    for (let i = 1; i <= n; i += 2) {
        array.push(i)
    }
    return array;
}