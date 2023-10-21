/*
DESCRIPTION:
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).
 */

function getAverageAge(list) {
    const totalAge = list.reduce((acc, curr) => {
        return acc + parseInt(curr.age);
    }, 0);

    return Math.round(totalAge / list.length);
}