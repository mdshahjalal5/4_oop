"use strict";
class Animal4 {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`); // 'German Shephard says Ghew Ghew'
    }
}
const dog = new Animal4("German Shepard", "dog", "Ghew Ghew");
const cat = new Animal4("Persian", "cat", "meaw meaw");
dog.makeSound();
cat.makeSound();
cat.name = "Special Cat";
