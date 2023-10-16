/*
DESCRIPTION:
This Kata is intended as a small challenge for my students

Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

Example (Input --> Output)

"drake" --> "drk"
"aeiou" --> ""
remove_vowels("drake") // => "drk"
remove_vowels("aeiou") // => ""
 */

const removeVowels = function(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
            newStr += str[i];
        }
    }
    return newStr;
}

// function removeVowels(str) {
//     const vowels = 'aeiou';
//     return str.replace(new RegExp(`[${vowels}]+`, 'g'), '');
// }

// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
// }
