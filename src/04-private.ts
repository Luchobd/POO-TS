export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPading(this.day);
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
      this.day += amount;
    }

    if (type === 'months') {
      this.month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  // Metodo Publico
  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
console.log(myDate.getDay());

// la clase "private" => Al aplicar private, solo internamente podra ser utilizado ese metodo. Es decir solo la clase internamente puede acceder a este metodo.
// Utilizando "Private" se puede encapsular dicha clase. Para que solo pueda ser utilizada dentro de la clase.
// Utilizando un metodo publico, tambien se puede utilizar un mentodo privado. Es decir se crea un metodo publico como "getDay()" que tendra dentro el llamado del metodo publico en este caso "this.day"
