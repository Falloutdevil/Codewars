/*
You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!

The function should take one parameter: an object/dict with two or more name-value pairs that represent the members of the group and the amount spent by each.

Your function should return an object/dict with the same names, showing how much money the members should pay or receive.
 */

function splitTheBill(x) {
    let average = Object.values(x).reduce((a, b) => a + b, 0) / Object.values(x).length;
    let arr = Object.keys(x);
    let arr2 = Object.values(x).map(a => a - average);
    return Object.assign(...arr.map((n, i) => ({[n]: parseFloat((arr2[i]).toFixed(2))})))
}