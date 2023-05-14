// ! 1 name import 
import { MyClass } from "./export";
console.log(MyClass);

// !2 default import & name 
import myClass2_any, {intro_name} from './export'
console.log(myClass2_any);

// !3  alias import(ot)>own terminology
import { Class1 as Class1_any, Class2 } from "./export";
console.log(Class1_any, Class2);

// !4 importing all 
import * as utils from "./export";




