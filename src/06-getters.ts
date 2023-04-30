export class MyDate {
  constructor(
    public year: number = 1989,
    public month: number = 1,
    private _day: number = 24
  ) {}

  printFormat(): string {
    const day = this.addPading(this._day);
    const month = this.addPading(this.month);
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
      this.month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  // Metodo Publico
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
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log('get =>', myDate.day);
console.log('getBool =>', myDate.isLeapYear);
console.log('1993', myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log('2001', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 7, 10);
console.log('2004', myDate3.isLeapYear);

// Notas.
// getters => es una funcion o metodo que acede al valor interno de la propiedad privada. Se nombra de la misma manera que la propiedad que se coloca como privada su diferencia esta en que la propiedad privada se coloca con "_" al princio y el getter no solo el nombre. Recordar que el getter es un get (es decir solo es para realizar llamados del valor), no permite su modificación. MUY IMPORTANTE permite aplicar código y logica dentro del metodo getters. Para no solo devolverlo por alguna condicion en especial. Su esencia o comportamiento es de una propiedad es decir que para invocarla solo actua como un objeto. Es decir se invoca nombreDeVariable.getterCreado.

// IMPORTANTE T0DOS los getters por definición deben obligatoriamente retornar algo.
