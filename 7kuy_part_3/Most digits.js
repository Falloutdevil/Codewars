/*
DESCRIPTION:
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
 */

// function findLongest(array) {
//     let maxDigits = 0;
//     let numberWithMaxDigits = null;
//     for (let i = 0; i < array.length; i++) {
//         const numDigits = Math.floor(Math.log10(Math.abs(array[i]))) + 1;
//         if (numDigits > maxDigits) {
//             maxDigits = numDigits;
//             numberWithMaxDigits = array[i];
//         }
//     }
//     return numberWithMaxDigits;
// }

const findLongest = (array) => {
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}