interface Imodel<TMethods, TInfo>{
    printFull_name:TMethods, 
    info:TInfo, 
}

type TInfo_any = {
    name:string, 
    age:number, 
}

let methods = function full_name(p1:string, p2:number){
    return `I am ${p1} and I am ${p2} years old`
}
const methodType  = (typeof methods);
console.log(methodType);




