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

//let list = document.querySelectorAll('.submenu');
//console.log(list);
document.querySelectorAll('.submenu').forEach(item => {
    item.addEventListener('click', event => {
        document.getElementById('segundapagina').style.display = 'block'
        document.getElementById('paginaprincipal').style.display = 'none';
    //Write your code hear
    console.log(event);
    })
    }) 