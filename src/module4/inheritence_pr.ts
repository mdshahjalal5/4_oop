// !n! => es => extends> super> super used for getting the parent properties(perhaps)
type skill = string
class developers{
    public name3: string;
    // age:number; //!n! if age not mention here=> have to use public below
    skill:string;
    // ie_experience:boolean;
    constructor( 
        name3:string, 
        public age:number,//!n! as age not mention so public keyword is used 
          skill:string,
          public is_experience:boolean,
    ){
        this.name3 = name3;
        this.age = age;
        this.skill = skill;
        this.is_experience  = is_experience;
    }
}


class designer extends developers{
    constructor(name3:string, age:number, skill:string, is_experience:boolean, public host:string){
        // !n! super for getting the parent property (perhaps)
        super(name3,age, skill, is_experience)
        this.host = host;
        console.log(host);
    }
    
}



// 