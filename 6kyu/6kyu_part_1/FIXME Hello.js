/*
DESCRIPTION:
The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

But it's not working properly.

Notes
There are 3 attributes

name
age
sex ('M' or 'F')
When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.

Examples
Hello.
Hello. My name is Bob. I am 27. I am male.
Hello. I am 27. I am male. My name is Bob.
Hello. My name is Alice. I am female.
Hello. My name is Batman.
Task
Fix the code so we can all go home early.
 */

class Dinglemouse {

    constructor(age, sex, name) {
        this.obj = {};
    }

    setAge(age) {
        this.obj.age = ` I am ${age}.`
        return this
    }

    setSex(sex) {
        this.obj.sex = ` I am ${sex === 'M' ? 'male' : 'female'}.`;
        return this
    }

    setName(name) {
        this.obj.name = ` My name is ${name}.`;
        return this
    }

    hello() {
        return 'Hello.' + Object.values(this.obj).join('')
    }
}