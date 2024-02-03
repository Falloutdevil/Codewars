/*
ask:
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48
 */
const remainders = [1, 10, 9, 12, 3, 4];

function thirt(n) {
    const r = n
        .toString()
        .split('')
        .reverse()
        .reduce((a, b, index) => parseInt(a) + b * remainders[index % remainders.length]);

    return n === r ? parseInt(n) : thirt(r)
}