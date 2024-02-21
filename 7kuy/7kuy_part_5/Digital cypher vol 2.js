/*
Task
Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.

Input / Output
The code is a array of positive integers.
The key input is a nonnegative integer.
 */

const decode = (code, n) => {
    const key = n.toString();
    return code.map((el, i) => String.fromCharCode(96 + el - key[i % key.length])).join('');
};
