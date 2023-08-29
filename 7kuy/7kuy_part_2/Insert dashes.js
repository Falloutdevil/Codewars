/*
DESCRIPTION:
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
 */

function insertDash(num) {
    let result = '';
    let str = num.toString();

    for (let i = 0; i < str.length; i++) {
        if (i > 0 && str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
            result += '-';
        }
        result += str[i];
    }
    return result;
}
