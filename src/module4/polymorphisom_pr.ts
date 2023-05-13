// !n! polymorphism => sad > same but different behave 

// !n! pa sad => parent child same method but different works 
class science{
    // !n! printQoute method is same but they are console.logginn different data 
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


// 5/13/2023, 7:54:15 AM 

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

// !imp! pacipo =>param>class>instance>property> when func para is parent class  then we get all the properties & method of the parent and child by the param 
function get_offspring(p:father){
    // !here we've gotten the offspring method
    console.log(p.offspring());
    
}

const son_instance = new son('Abir')
console.log(son_instance);
get_offspring(son_instance)
const daughter_instance = new daughter2('I am Jannaty', '', 3)
console.log(daughter_instance);

const doffres = daughter_instance.offspring()
console.log(doffres);

get_offspring(daughter_instance )
//! alternative of the up process 



