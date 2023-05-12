// !n! polymorphism => sad > same but different behave 
class science{
    printQuote(){
        console.log("I am fond of  science quote");
    }
}

class Math3 extends science{
    printQuote(){
        console.log(`I am fond of Math`);
    }
        
}

class physics extends science{
    printQuote(){
        console.log("I am fond of physics");
    }
}

function getPrint(sub:science){
    sub.printQuote();
}

const mathInstance  = new Math3();
getPrint(mathInstance)
const physicsInstance = new physics();
getPrint(physicsInstance)
const scienceInstance = new science();
getPrint(scienceInstance)
type str = string | null |  undefined | void
const str:str = "I have two offsprings"
class father{
 private readonly  identity: string;
    constructor(identity:string){
        this.identity = identity;
    }
    offspring(){
        return `${str} `
    }
}

class daughter2 extends father{
    name: string;
    age:number;
    constructor(identity_chk: string, name: string, age: number) {
        super(identity_chk)
        this.name = name;
        this.age = age;
    }    
    offspring(): string {
        return `I am ${this.name} the daugther of my father.`
    }

}


class son extends father{
    offspring(): string {
        return `I am son of my father.`
    }
}


