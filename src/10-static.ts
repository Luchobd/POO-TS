console.log(Math.PI);
console.log(Math.max(1, 2, 2, 8, 1, 0));

// Crear una clase copiando la libreria Math
class MyMath {
  static PI = 3.14;

  static max(...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item) => (max >= item ? max : item), - Infinity );
  }
}

// const math = new MyMath();
// math.PI;
console.log('Valor de PI =>', MyMath.PI);
console.log('Valor maximo =>', MyMath.max(12, 2, 1, 1112, 9));
const numbers = [12, 2, 1, 1112, 9, 3000];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-10, -9, -8));
