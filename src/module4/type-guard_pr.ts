// !n! gun> type guard > type narrowing> 
// !n! ke in(kin)> keyof gurad> in gurad 

type numOrString = number | string;
interface concate3 {
    (x:number, y:string) : numOrString;
}

class concate6{
  name:string;
  sort:string;
  constructor(
    name_any:string, 
    sort_any:string
  ){
    this.name = sort_any;
    this.sort = name_any;        
  }
  concatination() {
    console.log(`my identity is ${this.name} ${this.sort}`);
  }
}

// Instance of the class
const instance = new concate6('7', 'Natural number');
console.log(instance);
instance.concatination()   
const N8 = new concate6('natural', '8')
console.log(N8);
N8.concatination()

class subtraction extends concate6{
  constructor(namechk:string, sortchk:string, public is_good:boolean){
    super(namechk, sortchk)
    this.is_good = is_good;
  }
  beingGood(){
    console.log(` come to me I will make you good. `)
  }
}

const instanceofSbubstraction = new subtraction("9+ 3i",'complex number' , true)
console.log(instanceofSbubstraction);
instanceofSbubstraction.beingGood();
class concate{
    name:string;
    sort:string;
    constructor(
        name_any:string, 
        sort_any:string
    ){
        this.name = sort_any; // ! for checking purposes I have written name = sort 
        this.sort = name_any;        
    }
      concatination() {
    console.log(`my identity {this.name} +  ${this.sort}`); // 'German Shephard says Ghew Ghew'
  }

  // 5/12/2023, 5:52:46 AM 

  // !n! instance 
  // new concate('fsdf', 'fsdf');// ! un 

// new concate('fsdf', 'fsdf')
    // function concatination() { //!n! Unexpected token. A constructor, method, accessor, or property was expected. // we can't write function keyword inside class 
    //         console.log(`${name}`)  
    // }
}



