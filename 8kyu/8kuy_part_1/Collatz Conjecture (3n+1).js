/*
DESCRIPTION:
The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.
 */

const hotpo = (n) => n < 2 ? 0 : hotpo(n % 2 ? 3 * n + 1 : n / 2) + 1;