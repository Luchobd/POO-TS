export class MyDate {
  constructor(
    public year: number = 1989,
    private _month: number = 1,
    private _day: number = 24
  ) {}

  printFormat(): string {
    const day = this.addPading(this._day);
    const month = this.addPading(this._month);
    return `${day} / ${month} / ${this.year}`;
  }

  private addPading(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }

    if (type === 'months') {
      this._month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    // code
    return this._day;
  }

  get isLeapYear(): boolean {
    //code
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(newValue) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run =>', myDate.month);

myDate.month = 78;
console.log('error =>', myDate.month); // el throw new error corta la ejecución de forma brusca y solo arroja un error en consola.

// Notas.
// Set Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error. A set lo podemos usar para tener reglas de modificación para nuestros parámetros.

// El uso exclusivo de "Setters" es de modificar algo es decir el código, muy importante las reglas que debe cumplir. El metodo "set" siempre debe tener un parametro. Importante por definición el setter es un metodo "void", es decir no retorna nada.
