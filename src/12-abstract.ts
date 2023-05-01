import {Animal, Dog}  from './09-protected';

const animal = new Animal('elite');
animal.greeting();

const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);

//En conclusión, cada vez que implementamos una clase abstracta, no podemos crear instancias de esa clase, si no solo de las clases hijas.
