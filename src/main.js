//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

import {gender} from './data.js';
//import sonMale from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';
//import {order} from './data.js';

const datos = data.results;
//console.log(datos);
console.log(gender(datos));
//console.log(order(datos));