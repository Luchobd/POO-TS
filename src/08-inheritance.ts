export class Animal {
  constructor(public name: string) {}
  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
fifi.greeting();
console.log('Saludo =>', fifi.greeting());

const cheis = new Dog('cheis', 'Lucho');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);

// Herencia: Como su palabra lo dice, las propiedades y métodos de una clase son heredadas por otra para evitar la redundancia de código en nuestro proyector.
