/*
DESCRIPTION:
Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
 */

function automorphic(n) {
    return `${n * n}`.endsWith(`${n}`) ? 'Automorphic' : 'Not!!';
}