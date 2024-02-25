/*
DESCRIPTION:
Given two arrays of strings, return the number of times each string of the second array appears in the first array.
 */

const solve = (a,b) => b.map(x => a.filter(n => n === x).length);