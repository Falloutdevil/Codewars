/*
DESCRIPTION:
Task
Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

Note: There is no newline in the end (after the pattern ends)
 */

function pattern(n) {
    let result = ''

    for (let i = 0; i < n; i++) {
        const iPlusOne = i + 1
        result += `1${'*'.repeat(i)}${i < 1 ? '' : iPlusOne}${
            iPlusOne === n ? '' : '\n'
        }`
    }
    return result
}
