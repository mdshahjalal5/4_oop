class Animal4 {
  
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  public makeSound() {
    console.log(`The ${this.name} says ${this.sound}`); // 'German Shephard says Ghew Ghew'
  }
}

const dog = new Animal4("German Shepard", "dog", "Ghew Ghew");
const cat = new Animal4("Persian", "cat", "meaw meaw");
dog.makeSound();
cat.makeSound();

cat.name = "Special Cat";
