/*
I wrote a class Class, with a private static property foo and a getter to retrieve it:

class Class {
  static #foo = 42;

  static get foo() {
    return this.#foo;
  }
}
Class.foo; // 42
However, when I create a class Subclass that inherits from Class, the code breaks:

class Subclass extends Class {}
Subclass.foo; // Error !
Can you fix the code ?
 */

class Class {
    static #foo = 42;

    static get foo() {
        return Class.#foo;
    }
}