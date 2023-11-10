'use strict';

const cortaParola = prompt('prima parola');
const lungaParola = prompt('seconda parola');

if (cortaParola.length < lungaParola.length) {
  console.log(cortaParola);
  console.log(lungaParola);
} else if (cortaParola.length > lungaParola.length) {
  console.log(lungaParola);
  console.log(cortaParola);
} else console.log('uguale');
