// !n! e shic=> exactly not know the task but get shape(like as signature|annotation)> interface> class 
   
interface  Ieducatino_platform {
    name:string, 
    version:string
    established?:number, 
    teach(x:string):void
}

// !n! using interface> by interface we can create instance from the class 
class Education_platform implements Ieducatino_platform {
    version: string;
    constructor(public name:string, version_any:string, public established:number){
        this.name = name, 
        this.version = version_any, 
        this.established = established
    }
    teach(x:string):void{
        console.log(x)
    }
}

const Education_platform_instance1 = new Education_platform('vowal', "bangla", 1995)
console.log(Education_platform_instance1);



// 5/13/2023, 4:05:30 PM 

// !n! by  abstract class we can't create instance 
abstract class complexNumber{
    abstract real: number;
    constructor( public imaginary:number){
        this.imaginary = imaginary
    }
    abstract print_motto(p1:string, p2:number):void
}

// const inscomplex = new complexNumber //![ts] Cannot create an instance of an abstract class.

class Real_numbers extends complexNumber{
    real: number;
    constructor(
        real:number, 
    ){
        super(real)
        this.real = real;
    }
    print_motto(p1: string, p2: number): void {
            console.log(p1, p2)
    }
}


const instanceReal = new Real_numbers(3)
instanceReal.print_motto("hello", 7) 



// ? 5/27/2023, 12:06:35 PM 5/27/2023, 12:06:36 PM 5/27/2023, 12:06:36 PM 5/27/2023, 12:06:36 PM 5/27/2023, 12:06:37 PM 

interface ISchool {
    name:string, 
    total_teacher:number, 
    is_goog:boolean, 
}


class CSchool implements ISchool {
    constructor(){
        
    }
}