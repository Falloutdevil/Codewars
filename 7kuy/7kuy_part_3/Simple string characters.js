/*
DESCRIPTION:
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3].
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.
 */

function solve(s) {
    let uppercase = s.match(/[A-Z]/g) || [];
    let lower = s.match(/[a-z]/g) || [];
    let nums = s.match(/[0-9]/g) || [];
    let specialCharacters = s.match(/[^A-Z0-9]/gi) || [];
    return [uppercase.length, lower.length, nums.length, specialCharacters.length]
}