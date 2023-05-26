
class complex_number3 {
    // name:string;
    value: number;
    constructor(
        public name: string,
        any_value: number,
        z: string,
    ) {
        this.name = name;
        this.value = any_value;
    }
    transform_complex(x: number): string {
        return ``
    }
}

const instance1 = new complex_number3('super', 3, 'chk')
console.log(instance1, "instance")


//?----------------- 5/26/2023, 3:18:25 PM ------------------------

class CHuman {
    kingdom:string;

 constructor(){
    this.kingdom = 'kingdom';

 }
   human_nature(){
    return `We are included this ${this.kingdom}`
   }
}

class CMan extends CHuman{

    constructor( ){
        super()
    }
    // ?n! generic constraints
    
    function<T extends name3>(p:T):string{
        return `I am ${p.name}`
    }
}

const  CIHuman =new CMan()

// ? modifying the CIHuman.kingdom property 
CIHuman.kingdom = "Animalia"
console.log(CIHuman);
interface name3 {
    name: string, 
    age?:number, 
}

const gen = CIHuman.function<name3>({name:'shahjal'})
console.log("🚀 ~ gen:", gen)


