/*
DESCRIPTION:
Write a class Block that creates a block (Duh..)

Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
 */

class Block {
    constructor(data) {
        this.data = data
    }

    getWidth() {
        return this.data[0]
    }

    getLength() {
        return this.data[1]
    }

    getHeight() {
        return this.data[2]
    }

    getVolume() {
        return this.data[0] * this.data[1] * this.data[2]
    }

    getSurfaceArea() {
        return (this.data[0] * this.data[1] + this.data[0] * this.data[2] + this.data[1] * this.data[2]) * 2
    }
}