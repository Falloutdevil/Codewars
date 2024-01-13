/*
Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
 */

function divisorsOf(x) {
    const divs = [];

    for (let j = 1; j <= x; j++) {
        if (x % j === 0) {
            divs.push(j)
        }
    }
    return divs;
}

function isSquare(x) {
    return Math.sqrt(x) % 1 === 0;
}

function listSquared(m, n) {
    const res = [];

    for (let i = m; i <= n; i++) {
        const divs = divisorsOf(i)

        const sumOfSquaredDivs = divs.reduce(
            (acc, curr) => (acc += curr ** curr), 0
        );

        if (isSquare(sumOfSquaredDivs)) {
            res.push([i, sumOfSquaredDivs]);
        }
    }
    return res;
}

