//keyof guard
type Alphaneumeric = string | number;
// keyof guard
function add3(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  // return param1 + param2
  
  if (typeof param1 == "number" && typeof param2 === "number") {
    return param1 + param2;
    
  } else {
    return param1.toString() + param2.toString();
  }
}

add3("1", "2");
add3(1, 2);

//in guard

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};
    // the
function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an admin and my role is ${user.role}`;
  } else {
    return `I am a normal user`;
  }
}

const normalUser1: NormalUserType = { name: "Mr. kallu" };
const adminUser1: AdminUserType = { name: "Mr. Gallu", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));


// ? 5/27/2023, 11:34:38 AM 5/27/2023, 11:34:39 AM 5/27/2023, 11:34:39 AM 

//instaceof guard
// the more 
class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`my name is ${this.name}` , " I am barking");
  }
} 
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am Meawing");
  }
}
// !un (not understood)

function isDog(animal: Animal): animal is Dog { // !animal is dog means ts sure that it is instance of dog 
  return animal instanceof Dog;
}

// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }

function isCat(animal:Animal):animal is Cat{
  return animal instanceof Cat;  
}
// !n! pacipo pachin => param class> instance> property> parent's child can get by instanceof
// !n! pac paramter type class 

// ! param of the func will be instance of animal > child are attached to animal(perhaps)
function getAnimal2(ani:Animal){
      if(ani instanceof Dog){

        ani.makeBark()
      }
       else if(
        ani instanceof Cat){
          ani.makeMeaw()
        }
        else{
          ani.makeSound()
        }
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

const animal1 = new   Dog("German Bhai", "dog"); // instance -> Dog
const animal2 = new Cat("Persian Bhai", "cat"); // inatance -> Cat

// getAnimal(animal2);
getAnimal2(animal1)




// ? 5/27/2023, 5:25:20 AM 5/27/2023, 5:25:21 AM 5/27/2023, 5:25:21 AM 5/27/2023, 5:25:21 AM ---------------- chk purpose 

const object  = {
  name:'shahjala', 
  age:20, 
  profession:'student', 
  is_married:false,
}
 

// ? 5/27/2023, 11:13:11 AM 5/27/2023, 11:13:12 AM 5/27/2023, 11:13:12 AM 
const in3 = 'name' in object;
console.log("🚀 ~ in3:", in3)




//? 5/28/2023, 6:17:45 AM 5/28/2023, 6:17:45 AM 5/28/2023, 6:17:45 AM 5/28/2023, 6:17:45 AM 5/28/2023, 6:17:47 AM 5/28/2023, 6:17:47 AM  
// !n! example of type guard function

function isString(value: unknown): value is string {
  return typeof value === "string";
}
