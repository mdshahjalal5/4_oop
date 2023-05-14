"use strict";
// !n! e shic=> exactly not know the task but get shape(like as signature|annotation)> interface> class 
// !n! using interface> by interface we can create instance from the class 
class Education_platform {
    constructor(name, version_any, established) {
        this.name = name;
        this.established = established;
        this.name = name,
            this.version = version_any,
            this.established = established;
    }
    teach(x) {
        console.log(x);
    }
}
const Education_platform_instance1 = new Education_platform('vowal', "bangla", 1995);
console.log(Education_platform_instance1);
// 5/13/2023, 4:05:30 PM 
// !n! by  abstract class we can't create instance 
class complexNumber {
    constructor(imaginary) {
        this.imaginary = imaginary;
        this.imaginary = imaginary;
    }
}
// const inscomplex = new complexNumber //![ts] Cannot create an instance of an abstract class.
class Real_numbers extends complexNumber {
    constructor(real) {
        super(real);
        this.real = real;
    }
    print_motto(p1, p2) {
        console.log(p1, p2);
    }
}
const instanceReal = new Real_numbers(3);
instanceReal.print_motto("hello", 7);
