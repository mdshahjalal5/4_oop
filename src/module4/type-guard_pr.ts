// !n! gun> type guard > type narrowing> 
// !n! ke in(kin)> keyof gurad> in gurad 

type numOrString = number | string;
interface concate3 {
    (x:number, y:string) : numOrString;
}

class concate{
    name:string, 
    sort:string
    constructor(
        name_any:string, 
        sort_any:string
    ){
        this.name = sort_any; // ! for checking purposes I have written name = sort 
        this.sort = name_any;        
    }
      concatination() {
    console.log(`The ${this.name} says ${this.sort  
    
    
    
    
    
    
    }`); // 'German Shephard says Ghew Ghew'
  }

    // function concatination() { //!n! Unexpected token. A constructor, method, accessor, or property was expected. // we can't write function keyword inside class 
    //         console.log(`${name}`)  
    // }
}


