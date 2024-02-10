/*
DESCRIPTION:
Task
Write a method, that replaces every nth char oldValue with char newValue.
 */

function replaceNth(text, n, oldValue, newValue) {
    let i = 0;
    return n > 0 ? text.replace(new RegExp(oldValue, 'g'), c => ++i % n === 0 ? newValue : c) : text;
}