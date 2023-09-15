/*
DESCRIPTION:
My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price,
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
 */

function movie(card, ticket, perc) {
    let costA = n = 0,
        costB = card;
    while (Math.ceil(costB) >= costA) {
        costA += ticket;
        costB += ticket * Math.pow(perc, ++n);
    }
    return n;
}