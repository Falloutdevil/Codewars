/*
Task
Write function potatoes with

int parameter p0 - initial percent of water-
int parameter w0 - initial weight -
int parameter p1 - final percent of water -
potatoesshould return the final weight coming out of the oven w1 truncated as an int.

Example:
potatoes(99, 100, 98) --> 50
 */

const potatoes = (p0, w0, p1) => Math.floor(w0 * (100 - p0) / (100 - p1));