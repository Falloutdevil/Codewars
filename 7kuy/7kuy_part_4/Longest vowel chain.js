/*
DESCRIPTION:
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
 */

function solve(s) {
    return Math.max(...s.split(/[^aoeiu]/i).map(s => s.length));
}