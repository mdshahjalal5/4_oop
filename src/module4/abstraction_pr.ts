interface  Ieducatino_platform {
    name:string, 
    version:string
    established?:number, 
    teach(x:string):void
}

class Education_platform implements Ieducatino_platform {
    version: string;
    constructor(public name:string, version_any:string, public established:number){
        this.name = name, 
        this.version = version_any, 
        this.established = established
    }
    teach(x:string):void{
        console.log(x)
    }
}

const Education_platform_instance1 = new Education_platform('vowal', "bangla", 1995)
console.log(Education_platform_instance1);


