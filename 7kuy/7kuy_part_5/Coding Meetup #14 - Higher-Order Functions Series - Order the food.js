/*
DESCRIPTION:
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..
 */

function orderFood(list) {
    let answer = {};
    for (const element of list) {
        if (answer[element.meal]) {
            answer[element.meal] += 1;
        } else {
            answer[element.meal] = 1
        }
    }
    return answer;
}