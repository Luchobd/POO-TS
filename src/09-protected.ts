export class Animal {
  constructor(protected name: string) {}
  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woff! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
}


const cheis = new Dog('cheis', 'Lucho');
// cheis.name = 'otro nombre';
cheis.woof(1);
cheis.move()

// Herencia: Como su palabra lo dice, las propiedades y métodos de una clase son heredadas por otra para evitar la redundancia de código en nuestro proyector.
// Con super(constructorPadre) => Con super podemos llamar al constructor. Y se utiliza cada vez que invocamos una clase por mediod de herencia.
// Protected (protected) => Básicamente, es la forma de heredar propiedades y métodos. Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia.
