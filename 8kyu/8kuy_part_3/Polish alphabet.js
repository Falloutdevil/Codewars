/*
DESCRIPTION:
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
 */

function correctPolishLetters (string) {
    const mapping = {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z",
    };

    let withoutDiacritics = "";

    for (const char of string) {
        if (Object.keys(mapping).includes(char)) {
            withoutDiacritics += mapping[char];
        } else {
            withoutDiacritics += char;
        }
    }

    return withoutDiacritics;
}