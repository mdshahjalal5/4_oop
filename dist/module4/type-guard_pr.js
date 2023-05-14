"use strict";
// !n! gun> type guard > type narrowing> 
// !n! ke in(kin)> keyof gurad> in gurad 
class concate6 {
    constructor(name_any, sort_any) {
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
instance.concatination();
const N8 = new concate6('natural', '8');
console.log(N8);
N8.concatination();
class subtraction extends concate6 {
    constructor(namechk, sortchk, is_good) {
        super(namechk, sortchk);
        this.is_good = is_good;
        this.is_good = is_good;
    }
    beingGood() {
        console.log(` come to me I will make you good. `);
    }
}
const instanceofSbubstraction = new subtraction("9+ 3i", 'complex number', true);
console.log(instanceofSbubstraction);
instanceofSbubstraction.beingGood();
class concate {
    constructor(name_any, sort_any) {
        this.name = sort_any; // ! for checking purposes I have written name = sort 
        this.sort = name_any;
    }
    concatination() {
        console.log(`my identity {this.name} +  ${this.sort}`); // 'German Shephard says Ghew Ghew'
    }
}
// 5/12/2023, 5:52:46 AM 
// !n! instance 
new concate('fsdf', 'fsdf'); // ! un 
new concate('fsdf', 'fsdf');
