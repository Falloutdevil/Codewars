/*
DESCRIPTION:
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".
 */

const switchItUp = (number) =>{
    const word = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
    return word[number]
}