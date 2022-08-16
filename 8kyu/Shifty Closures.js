/*
DESCRIPTION:
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
 */

// var name = 'Abe';
// var greet_abe = function() {
//     return "Hello, " + name + '!';
// };
// name = 'Ben';
// var greet_ben = function() {
//     return "Hello, " + name + '!';
// };

let name;
const greet_abe = function() {
    name = 'Abe';
    return 'Hello, ' + name + '!';
};

const greet_ben = function() {
    name = 'Ben';
    return 'Hello, ' + name + '!';
};