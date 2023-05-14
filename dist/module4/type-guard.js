"use strict";
// keyof guard
function add3(param1, param2) {
    if (typeof param1 == "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
add3("1", "2");
add3(1, 2);
function getUser(user) {
    if ("role" in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}
const normalUser1 = { name: "Mr. kallu" };
const adminUser1 = { name: "Mr. Gallu", role: "admin" };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
//instaceof guard
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am making sound");
    }
}
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log(`my name is ${this.name}`, " I am barking");
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaw() {
        console.log("I am Meawing");
    }
}
// !un (not understood)
function isDog(animal) {
    return animal instanceof Dog;
}
// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }
function isCat(animal) {
    return animal instanceof Cat;
}
// !n! pacipo pachin => param class> instance> property> parent's child can get by instanceof
// !n! pac paramter type class 
// ! param of the func will be instance of animal > child are attached to animal(perhaps)
function getAnimal2(ani) {
    if (ani instanceof Dog) {
        ani.makeBark();
    }
    else if (ani instanceof Cat) {
        ani.makeMeaw();
    }
    else {
        ani.makeSound();
    }
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog("German Bhai", "dog"); // instance -> Dog
const animal2 = new Cat("Persian Bhai", "cat"); // inatance -> Cat
// getAnimal(animal2);
getAnimal2(animal1);
