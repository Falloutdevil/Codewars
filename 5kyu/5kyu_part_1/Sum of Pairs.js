/*
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
 */
//
// function sumPairs(ints, s) {
//     let lastNumber;
//
//     for (let i = 1; i < ints.length; ++i) {
//         if (lastNumber && lastNumber === ints[i]) {
//             continue;
//         }
//         lastNumber = ints[i];
//
//         const sliced = ints.slice(0, i);
//         const sumIndex = sliced.indexOf(s - ints[i]);
//
//         if (sumIndex !== -1) {
//             return [sliced[sumIndex], ints[i]];
//         }
//     }
// }

function sum_pairs(ints, s) {
    let seen = new Set();
    for (let i of ints) {
        if (seen.has(s - i)) return [s - i, i];
        seen.add(i);
    }
}