/*
DESCRIPTION:
Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

each noun containing less than 2 vowels has the article "das"
each noun containing 2/3 vowels has the article "die"
each noun containing more than 3 vowels has the article "der"
Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!
 */

function derDieDas(wort) {
    let n = wort.split(/[aioueäöü]/i).length - 1;
    if (n < 2) {
        return 'das ' + wort;
    }
    if (n > 3) {
        return 'der ' + wort;
    }
    return 'die ' + wort;
}