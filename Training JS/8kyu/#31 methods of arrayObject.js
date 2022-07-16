/*
Task
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"
Examples
blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array"
Using string template and ternary operator can make your work easier.
 */

function blackAndWhite(array){
    let arrayType = '';

    if (!Array.isArray(array)) arrayType = 'fake'
    else if (array.includes(5) && array.includes(13)) arrayType = 'black'
    else if (!(array.includes(5) && array.includes(13))) arrayType = 'white'

    return `It's a ${arrayType} array`
}