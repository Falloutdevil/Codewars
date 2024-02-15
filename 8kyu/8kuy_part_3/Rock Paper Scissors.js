/*
DESCRIPTION:
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */

const rps = (p1, p2) => {
    const pattern = ['rock', 'paper', 'scissors'];
    const p1Index = pattern.findIndex((v) => v === p1);
    const p2Index = pattern.findIndex((v) => v === p2);

    if ((p1Index + 1) % 3 === p2Index) {
        return 'Player 2 won!';
    }
    if ((p1Index + 2) % 3 === p2Index) {
        return 'Player 1 won!';
    }

    return 'Draw!';
};