/*
DESCRIPTION:
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
 */

function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) {
        return -1;
    } else {
        let len1 = a1.map(x => x.length);
        let len2 = a2.map(x => x.length);
        return Math.max(Math.abs(Math.max(...len1) - Math.min(...len2)), Math.abs(Math.max(...len2) - Math.min(...len1)));
    }
}