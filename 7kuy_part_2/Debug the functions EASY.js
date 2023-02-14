/*
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
function multi(arr) {
  return arr * arr;
}
function add(arr) {
  return arr + arr;
}
function reverse(str) {
  return str.reverse();
}
 */

function multi(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

function add(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function reverse(str) {
    return str.split('').reverse().join('');
}