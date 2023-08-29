/*
DESCRIPTION:
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
 */

const SequenceSum = (function() {
    function SequenceSum() {
    }

    SequenceSum.showSequence = function(count) {
        if (count < 0) {
            return count + '<0';
        } else if (count === 0) {
            return '0=0';
        } else {
            let sum = 0;
            let output = '';
            for (let i = 0; i <= count; i++) {
                sum += i;
                output += i;
                if (i < count) {
                    output += '+';
                }
            }
            output += ' = ' + sum;
            return output;
        }
    };

    return SequenceSum;

})();

// const SequenceSum = (function() {
//     function SequenceSum() {
//     }
//
//     SequenceSum.showSequence = function(count) {
//         if (count < 0) {
//             return count + '<0';
//         } else if (count === 0) {
//             return '0=0';
//         } else {
//             let sum = count * (count + 1) / 2;
//             return `0${[...Array(count)].map((_, i) => `+${i + 1}`).join('')} = ${sum}`;
//         }
//     };
//
//     return SequenceSum;
//
// })();