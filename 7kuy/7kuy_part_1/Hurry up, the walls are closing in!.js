/*
DESCRIPTION:
Task
Given a list walls closing in at you, can you make it past those walls without being hit?

Input
walls: an array of 2-ples, each 2-ple storing non-negative numbers representing the distance of the walls closing in at you from each side respectively to the center of the room.
Output
return a boolean indicating whether it is possible to run past the walls without being hit.
 */

function canEscape(walls) {
    return walls.every(([a, b], i) => Math.min(a, b) > i + 1);
}