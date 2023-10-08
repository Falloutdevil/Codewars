/*
DESCRIPTION:
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .


 */

function jumpingNumber(n) {
    let str = n.toString();
    if (str.length === 1) return 'Jumping!!';
    let i = 0;
    while (i < str.length - 1) {
        if (Math.abs(+str[i] - +str[i + 1]) === 1) {
            i = i + 1;
        } else {
            return 'Not!!'
        }
    }
    return 'Jumping!!';
}