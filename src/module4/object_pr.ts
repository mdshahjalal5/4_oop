amar sonart bangl// !n! ca con me ip  => class constructor => method => instance => parameter properties 

//  !n! constructor => up con this => pa po pri => public, protected , private 
 
// !n! pacipo pachin => param class> instance> property> parent's child can get by instanceof

class freinds {
  constructor(

    // ?n! parameter properties //? allow to define class properties directly in the class constructor's parameter list.
    public name: string,
    public age: number,
    public behave: string,
    private is_talented: boolean
  ) {}
  // !n! method should write outside of constructor
  public transform() {
    console.log(
      `${this.name} is our freind age is ${this.age} and he is ${this.is_talented}`
    );
  }
}
const best_freind = new freinds('jahir', 33, 'good', true)
console.log(best_freind) // !n! output: freinds { name: 'jahir', age: 33, behave: 'good', is_talented: true }

class Car5 {
    public model: string;
    public color: string;
    public isElectric: boolean;

    constructor(model: string, color: string, isElectric: boolean) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }

    public drive(): void {
        const engineStarted: boolean = this.startEngine();

        // some method to drive after starting the engine
    }

    private startEngine(): boolean {
        // some method to start the engine

        return true;
    }
}



// ?  another class practice 

class CApplication {
    public type: string;
    private verified: boolean;
    readonly enabled: true;
    constructor(type_any:string, verified_any:boolean, enabled_any:true){
        this.type = type_any;
        this.verified = verified_any;
        this.enabled = enabled_any;
    }

    application_intro(p:object):void{
        console.table({...p});
    }
}

const applicationInstance = new CApplication('informal', false, true)
console.log(applicationInstance);
applicationInstance.application_intro({
    age:20, 
    name:"shahjalal", 
    how_talented:"infinite"
})

