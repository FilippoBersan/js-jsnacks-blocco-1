'use strict';

const cortaParola = prompt('prima parola');
const lungaParola = prompt('seconda parola');

if (cortaParola < lungaParola) {
  console.log(cortaParola);
  console.log(lungaParola);
} else if (lungaParola > cortaParola) {
  console.log(cortaParola);
  console.log(lungaParola);
} else lungaParola === cortaParola;
console.log('uguale');
