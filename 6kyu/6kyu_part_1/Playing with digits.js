/*
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 */

function digPow(n, p) {
    let string = n.toString();
    let len = string.length;
    let result = 0;
    for (let i = 0; i < len; i++) {
        let numberser = parseInt(string.charAt(i), 10);
        result += Math.pow(numberser, p + i)
    }
    let x = Math.pow(n, p);
    if (result === x) {
        return p;
    } else if (result % n === 0) {
        return result / n;
    } else {
        return -1;
    }
}