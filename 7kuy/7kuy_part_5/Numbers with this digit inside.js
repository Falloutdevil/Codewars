/*
DESCRIPTION:
You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.
 */

function numbersWithDigitInside(x, d) {
    let m = [];
    for (let i = 1; i <= x; i++) {
        if (new RegExp(d).test(i + '')) m.push(i)
    }
    return [m.length, m.reduce((s, c) => s + c, 0), m.length ? m.reduce((s, c) => s * c, 1) : 0]
}