/*
DESCRIPTION:
Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.
 */

const howManyDalmatians = number => {
    if (number <= 10) return 'Hardly any'
    if (number <= 50) return 'More than a handful!'
    if (number === 101) return '101 DALMATIANS!!!'
    return "Woah that's a lot of dogs!"
}