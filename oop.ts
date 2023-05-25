//  !n! of => oc => fun 
//  ! => object oriented or funtional => object | class =>
// ! fun = functional => in out => take input, give output 


class Car2 {
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


const data = {
   
}
const carInstance = new Car2( 'bmw', "red", true,)
console.log(carInstance);



