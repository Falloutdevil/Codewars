/*
The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).
 */

function gap(g, m, n) {
    let lastPrime = 0;
    let isPrime = function(x) {
        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false;
        }
        return true;
    }
    for (let i = m; i <= n; i++)
        if (isPrime(i)) {
            if (i - lastPrime === g) return [lastPrime, i];
            else lastPrime = i;
        }
    return null;
}