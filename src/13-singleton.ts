// Patrón para crear multiples instancias d eun mismo objeto
export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('debería entrar una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}
const myService1 = MyService.create('service 1');
console.log(myService1.getName());

const myService2 = MyService.create('service 2');
console.log(myService2.getName());

const myService3 = MyService.create('service 3');
console.log(myService3.getName());

console.log(myService1 === myService2);

// ¡Qué interesante! 😮

// Singleton: constructor privado
// Singleton nos previene crear múltiples instancias de una clase.

// Esto es muy usado en Arquitectura de Software, pues nos ayuda a ahorrar uso de memoria.
