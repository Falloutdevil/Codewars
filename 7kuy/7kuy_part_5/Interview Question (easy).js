/*
DESCRIPTION:
You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
 */

function getStrings(city) {
    city = city.toLowerCase();
    let obj = {};
    let str = '';

    for (const elem of city) {
        if (!(elem in obj)) {
            obj[elem] = '*';
        } else {
            obj[elem] += '*'
        }
    }

    for (const key in obj) {
        if (key !== ' ') {
            str += key + ':' + obj[key] + ',';
        }
    }
    return str.substring(0, str.length - 1);
}