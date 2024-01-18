/*
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
 */

function stockList(listOfArt, listOfCat) {
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return '';
    }
    let res = [];
    for (const cat in listOfCat) {
        let total = 0;
        for (const art in listOfArt) {
            if (listOfArt[art][0] === listOfCat[cat][0]) {
                total = total + Number(listOfArt[art].split(' ')[1])
            }
        }
        if (res.length !== 0) {res += ' - '}
        res += '(' + listOfCat[cat] + ' : ' + total + ')'
        res += `(${listOfCat[cat]} : ${total})`
    }
    return res
}