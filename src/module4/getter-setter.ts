// 5/12/2023, 2:59:21 PM 
// !n ges => getter|setter> get, return value from class>  set, add value> 
class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
   
  private getTestBalance(): number{
     return this._balance
  }
  
  get Test():number{
    return this.getTestBalance()
  }
  //getter //! we can get value 
  get balance(): number {
    return this._balance;
  }
get get_name(){
  return this.name;
}
set set_name(name:string){
  this.name = name;
  // return null; // ! [ts] Setters cannot return a value.
}
  //setter
  set deposit(amount: number) {
    this._balance = this.balance + amount;
  }
}


const myAccount = new BankAccount(444, "Persian", 30);
console.log(myAccount.balance);
myAccount.deposit = 30;
console.log(myAccount.balance); // ! getter implementation
console.log(myAccount.name)
const myAccount2 = new BankAccount(33, "shahjalal", 40)
myAccount2.set_name = 'shahjalal new set' // ! setter implementation 
console.log(myAccount2.name)