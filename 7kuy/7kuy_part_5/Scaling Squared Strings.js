/*
ESCRIPTION:
You are given a string of n lines, each substring being n characters long. For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
A v-vertical scaling of a string consists of replicating v times each part of the squared string.

Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.
 */

function scale(strng, k, n) {
    return strng
        .split('\n')
        .map(el => el.split('')
            .map(el => (el).repeat(k))
            .join(''))
        .map(el => (el + ' ')
            .repeat(n))
        .map(el => el.trim()
            .replace(/ /g, '\n'))
        .join('\n')
}