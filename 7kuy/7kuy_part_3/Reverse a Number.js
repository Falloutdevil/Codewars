/*
DESCRIPTION:
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
 */

// function reverseNumber(n) {
//     const sing = Math.sign(n);
//     n = Math.abs(n);
//     let reversed = 0;
//     while (n > 0) {
//         reversed = (reversed * 10) + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     return reversed * sing;
// }

reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')