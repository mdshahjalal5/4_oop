
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

class CHuman{
    kingdom:string;

 constructor(){
    this.kingdom = 'kingdom';

 }
   human_nature(){
    return `We are included this ${this.kingdom}`
   }
}

const  CIHuman =new CHuman()
console.log("🚀 ~ new:", CIHuman)

