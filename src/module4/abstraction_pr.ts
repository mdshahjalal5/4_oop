interface  Ieducatino_platform {
    name:string, 
    version:string
    estalished:number, 
    (x:string):void
}

class Education_platform {
    version: string;
    constructor(public name:string, version_any:string, public established:number){
        this.name = name, 
        this.version = version_any, 
        this.established = established
    }
}