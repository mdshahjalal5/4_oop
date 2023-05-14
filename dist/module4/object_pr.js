"use strict";
// !n! ca con me ip  => class constructor => method => instance => parameter properties 
//  !n! constructor => up con this => pa po pri => public, protected , private 
// !n! pacipo pachin => param class> instance> property> parent's child can get by instanceof
class freinds {
    // !n! constructor holds objects property (perhaps)
    constructor(
    // !n! parameter properties
    name, age, behave, is_talented) {
        this.name = name;
        this.age = age;
        this.behave = behave;
        this.is_talented = is_talented;
    }
    // !n! method should write outside of constructor  
    transform() {
        console.log(`${this.name} is our freind age is ${this.age} and he is ${this.is_talented}`);
    }
}
const best_freind = new freinds('jahir', 33, 'good', true);
console.log(best_freind); // !n! output: freinds { name: 'jahir', age: 33, behave: 'good', is_talented: true }
class Car5 {
    constructor(model, color, isElectric) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }
    drive() {
        const engineStarted = this.startEngine();
        // some method to drive after starting the engine
    }
    startEngine() {
        // some method to start the engine
        return true;
    }
}
