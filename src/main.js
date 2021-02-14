import data from './data/rickandmorty/rickandmorty.js';

import {orderAZ, orderZA, genderMale} from './data.js';


const datos = data.results;
const datoss = orderAZ(datos);
//console.log(datoss);
const datitos = orderZA(datos);
//console.log(datitos);
const genderM = genderMale(datos);

const items=document.getElementById('items');
const genderr=document.getElementById('genderr');
const templateCard = document.getElementById('template-card').content;
//const templateCardFront = document.getElementById('template-card-front').content;
const fragment = document.createDocumentFragment();

const pintarCards = datos => {
    datos.forEach(personaje => {
        //console.log(personaje)
        templateCard.querySelector('h3').textContent = personaje.name
        templateCard.querySelector('img').setAttribute("src", personaje.image)
        templateCard.querySelector('h4').textContent = personaje.status
        templateCard.querySelector('h5').textContent = personaje.species
        templateCard.querySelector('p').textContent = personaje.gender
        
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)
    genderr.appendChild(fragment)
}

pintarCards(datos, genderM)
console.log(datos, genderM, datoss)






document.querySelectorAll('.submenu').forEach(item => {
    item.addEventListener('click', event => {
        document.getElementById('segundapagina').style.display = 'block'
        document.getElementById('paginaprincipal').style.display = 'none';
        document.getElementById('tercerapagina').style.display='block';
    //Write your code hear
    console.log(event);
    })
    }) 