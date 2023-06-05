/*
DESCRIPTION:
Your task is to write function factorial.
 */

// function factorial(n) {
//     let factorial = 1;
//     if (n === 0) {
//         return factorial;
//     }
//     for (let i = n; i > 0; i--) {
//         factorial *= i;
//     }
//     return factorial;
// }

const factorial = n => n ? factorial(n - 1) * n : 1;