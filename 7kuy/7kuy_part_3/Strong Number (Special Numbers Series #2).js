/*
DESCRIPTION:
Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String
 */

const strong = (n) =>
    [...String(n)].map(element => {
        let result = 1
        for (let i = element; i > 0; i--) {
            result *= i
        }
        return result
    }).reduce((prev, curr) => prev + curr) === n ? 'STRONG!!!!' : 'Not Strong !!'

