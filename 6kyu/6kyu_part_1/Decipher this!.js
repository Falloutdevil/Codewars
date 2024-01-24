/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces
Examples

'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go'
 */

function decipherThis(str) {
    return str
        .replace(/\d+/g, v => String.fromCharCode(v * 1)).split(' ')
        .map(v => v.length > 2 ? v.slice(0, 1) + v.slice(-1) + v.slice(2, -1) + v.slice(1, 2) : v).join(' ')
}