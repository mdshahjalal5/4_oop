// !n! ca con me ip  => class constructor => method => instance => parameter properties 

//  !n! constructor => up con this => pa po pri => public, protected , private 
 
// !n! pacipo pachin => param class> instance> property> parent's child can get by instanceof

class freinds {
    // !n! constructor holds objects property (perhaps)
    constructor(
        // !n! parameter properties
        public name: string,
        public age: number,
        public behave: string,
        private is_talented: boolean
    ) {

    }
    // !n! method should write outside of constructor  
    public transform() {
        console.log(`${this.name} is our freind age is ${this.age} and he is ${this.is_talented}`)
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



