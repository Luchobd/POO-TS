export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23,
// };

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {
    //code
  }
}

class OravleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
  connect(): void {
    //code
  }
}

// Interfaces en clases => Las interfaces en clases funcionan como contratos, nos permiten tipar tanto los atributos como los métodos. Aquí no podemos utilizar encapsulamiento, por defecto todos los atributos y métodos son públicos.

// Implements => Tiene la misma sintaxis cuando aplicamos herencias en las clases, pero implements no es una herencia, es un contrato que nos dice que nuestra clase tiene que cumplir con un estándar que es la interface. Este contrato es tanto como para los parámetros como para los métodos.

// Para poder utilizar o implementar interfaces en POO o class. Se debe utilizar la extension "implements + numbreInterface".
