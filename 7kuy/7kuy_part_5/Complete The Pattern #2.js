/*
DESCRIPTION:
Task:
You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
 */

const pattern = n => {
    let number = '', output = '';
    while (n > 0) {
        number += n;
        output = number + (output ? '\n' : '') + output;
        n--
    }
    return output;
};