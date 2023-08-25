/*
DESCRIPTION:
Your task is to find the maximum number of queens that can be put on the board so that there would be one single unbeaten square (ie. threatened by no queen on the board).

The Queen can move any distance vertically, horizontally and diagonally.
 */

function queens(n) {
    return n >= 3 ? (n - 2n) * (n - 1n) : 0n;
}
