/*
DESCRIPTION:
Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
 */

function containAllRots(strng, arr) {
    for (let i = 0; i < strng.length; i++) {
        if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) {
            return false;
        }
    }
    return true
}