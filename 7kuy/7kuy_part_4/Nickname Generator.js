/*
DESCRIPTION:
Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
 */

function nicknameGenerator(name) {
    if (name.length < 4) return 'Error: Name too short';
    if (name[2].match(/[aeuio]/)) return name.slice(0, 4);
    return name.slice(0, 3);
}