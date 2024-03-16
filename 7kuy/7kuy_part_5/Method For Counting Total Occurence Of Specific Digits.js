/*
DESCRIPTION:
We need a method in the List Class that may count specific digits from a given list of integers. This marked digits will be given in a second list. The method .count_spec_digits()/.countSpecDigits() will accept two arguments, a list of an uncertain amount of integers integers_lists/integersLists (and of an uncertain amount of digits, too) and a second list, digits_list/digitsList that has the specific digits to count which length cannot be be longer than 10 (It's obvious, we've got ten digits). The method will output a list of tuples, each tuple having two elements, the first one will be a digit to count, and second one, its corresponding total frequency in all the integers of the first list. This list of tuples should be ordered with the same order that the digits have in digitsList
 */

function List() {
    this.countSpecDigits = function(integersList, digitsList) {
        let result = [];
        for (let i = 0; i < digitsList.length; i++) {
            result.push([digitsList[i], integersList.join().split(digitsList[i]).length - 1]);
        }
        return result;
    }
}