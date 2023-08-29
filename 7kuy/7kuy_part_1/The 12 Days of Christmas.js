/*
DESCRIPTION:
Oh No!

The song sheets have been dropped in the snow and the lines of each verse have become all jumbled up.

Task
You have to write a comparator function which can sort the lines back into their correct order, otherwise Christmas will be cancelled!

Reminder: Below is what the final verse should look like
 */

const comparator = function(a, b) {
    const pos = ['On', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'a'];
    return pos.indexOf(a.split(' ')[0]) - pos.indexOf(b.split(' ')[0]);
}