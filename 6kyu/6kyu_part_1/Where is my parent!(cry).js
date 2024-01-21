/*
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
 */

function findChildren(str) {
    str = str.toLowerCase()

    let arr = str.split('')

    let r = '';
    let letters = [...new Set(arr)].sort()


    for(let i = 0; i<letters.length; i++){
        for(let j = 0; j<str.length; j++){
            if(letters[i] === arr[j]) r += arr[j]
        }
    }
    return r.split('').map((x,i)=> x !== r[i-1] ? x = x.toUpperCase() : x ).join('')
}