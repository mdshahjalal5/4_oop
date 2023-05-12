// !n! mo => pa po pai> public> protected> private> 
// !n!prich > if private can't access in child > protected not use 
class BankAccount2 {
  public readonly id: number;
  public name: string;
  private _balance: number; // !n! protected should not use

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  getBalance() {
    console.log(`My Current Balance is : ${this._balance}`);
  }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

class StudentAccount2 extends BankAccount2{
  test(){
    this.addDeposit(30)
  }
}

const myAccount3 = new BankAccount2(444, "Persian", 20);
console.log(myAccount3);
myAccount3.id = 3 // ! [ts] Cannot assign to 'id' because it is a read-only property.
myAccount3.addDeposit(20);
myAccount3.getBalance();

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
  return a + b;
};

// const sum = add(2, 3); // 5

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
const sum = calculator.add(2, 3); // 5

