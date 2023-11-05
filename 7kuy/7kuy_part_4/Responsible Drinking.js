/*
DESCRIPTION:
Welcome to the Codewars Bar!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
 */

function hydrate(s) {
    let numberOfGlasses = s.match(/\d/g).map(element => Number(element)).reduce((sum, current) => sum + current, 0);
    return numberOfGlasses > 1 ? `${numberOfGlasses} glasses of water` : '1 glass of water';
}
