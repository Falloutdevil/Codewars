/*
DESCRIPTION:
In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Can't find entry for Banana
 */

class Dictionary {
    constructor() {
        this.dict = new Map();
    }
    newEntry(key, value) {
        this.dict.set(key,value);
        return this;
    }
    look(key) {
        return this.dict.get(key) || `Can't find entry for ${key}` ;
    }
}