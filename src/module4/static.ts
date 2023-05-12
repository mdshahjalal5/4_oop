class Counter {
  static counter: number = 0;

  static increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  static decrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}

// const instance1 = new Counter();
// const instance2 = new Counter();
console.log(Counter.increment()); // 0-1
console.log(Counter.increment()); // 1-2


class MyClass {
  static myStaticProp = 'Hello, world!';

  static myStaticMethod() {
    console.log('This is a static method.');
  }
}

console.log(MyClass.myStaticProp); // Output: 'Hello, world!'
MyClass.myStaticMethod(); // Output: 'This is a static method.'
