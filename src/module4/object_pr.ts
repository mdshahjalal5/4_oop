// !n! ca con me ip  => class constructor => method => instance => parameter properties 
class freinds {
    constructor(
        // !n! parameter properties
        public name: string,
        public age: number,
        public behave: string,
        private is_talented: boolean
    ) {

    }
    public transform() {
        console.log(`${this.name} is our freind age is ${this.age}`)
    }

}
const best_freind = new freinds('jahir', 33, 'good', true)
console.log(best_freind)

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



