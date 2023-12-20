/*
DESCRIPTION:
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:
 */

function findAdmin(list, lang) {
    return list.filter(el => el.language === lang && el.githubAdmin === 'yes');
}
