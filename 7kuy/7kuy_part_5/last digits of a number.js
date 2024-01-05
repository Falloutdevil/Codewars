/*
DESCRIPTION:
Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
 */

function lastDigit(n, d) {
    return d > 0 ? [...String(n).slice(-d)].map(Number) : [];
}