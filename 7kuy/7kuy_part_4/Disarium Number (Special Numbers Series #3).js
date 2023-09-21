/*
DESCRIPTION:
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .
 */

function disariumNumber(n) {
    let str = ('' + n).split(''), sum = [];
    for (let i = 0; i < str.length; i++) {
        sum.push(Math.pow(str[i], i + 1))
    }
    return sum.reduce((a, b) => a + (b * 1), 0) === n ? 'Disarium !!' : 'Not !!';
}