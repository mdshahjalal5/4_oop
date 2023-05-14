"use strict";
// !n! in c > instance> class 
class Counter {
    static increment() {
        // !n! can't use this instead of this use ClassName here Counter
        return (Counter.counter = Counter.counter + 1);
    }
    static decrement() {
        return (Counter.counter = Counter.counter - 1);
    }
}
Counter.counter = 0;
// const instance1 = new Counter();
// const instance2 = new Counter();
console.log(Counter.increment()); // 0-1
console.log(Counter.increment()); // 1-2
class MyClass {
    static myStaticMethod() {
        console.log('This is a static method.');
    }
}
MyClass.myStaticProp = 'Hello, world!';
console.log(MyClass.myStaticProp); // ! no need create instance 
MyClass.myStaticMethod(); //! directly access from class
// !n! instance it's not reference type that means instance not exist in same storage location 
