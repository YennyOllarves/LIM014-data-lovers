import data from './data/rickandmorty/rickandmorty.js';
import {orderAZ, orderZA, genderMale, genderFemale, genderUnknown, speciesHuman, speciesAlien, statusAlive, statusDead, tierraOrigin,Buscadorr} from './data.js';

function uniqueTemplate (datos){
const items = document.getElementById('items');
items.innerHTML = "";
console.log(items);
const templateCard = document.getElementById('template_card1').content;
console.log(templateCard);
const fragment = document.createDocumentFragment("card1");
console.log(fragment);
const pintarCards = datos => {
datos.forEach(containerCharacter => {
templateCard.querySelector('img').setAttribute('src', containerCharacter.image)
templateCard.querySelector('p3').textContent = 'Nombre: ' + containerCharacter.name
templateCard.querySelector('p4').textContent = 'Estado: ' +containerCharacter.status
templateCard.querySelector('p5').textContent = 'Especie: ' +containerCharacter.species
templateCard.querySelector('p6').textContent = 'Género: ' +containerCharacter.gender
templateCard.querySelector('p7').textContent = 'Origen: ' +containerCharacter.origin.name
const clone = templateCard.cloneNode(true)
fragment.appendChild(clone)
})
items.appendChild(fragment)
}
return pintarCards(datos)
}

//orderAZ

document.querySelector(".orderAZ").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES ORDENADOS DE A-Z</p>`
}

document.getElementById("orderAZ").addEventListener(
"click", function () {

let datos = data.results;
datos = orderAZ(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
})
//orderZA

document.querySelector(".orderZA").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES ORDENADOS DE Z-A</p>`
}

document.getElementById("orderZA").addEventListener(
"click", function () {

let datos = data.results;
datos = orderZA(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
})

//species

document.querySelector("#human").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES POR SU ESPECIE</p>`
}

document.querySelector("#alien").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES POR SU ESPECIE</p>`
}

document.getElementById("human").addEventListener(
"click", function () {

let datos = data.results;
datos = speciesHuman(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
}) 

document.getElementById("alien").addEventListener(
"click" , function () {
let datos = data.results;
datos= speciesAlien(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
})

//gender

document.querySelector("#male").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES MASCULINOS</p>`
}

document.querySelector("#female").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES FEMENINOS</p>`
}
document.querySelector("#undknown").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES CON GÉNERO DESCONOCIDO</p>`
}

document.getElementById("male").addEventListener(
"click" , function () {
let datos = data.results;
datos= genderMale(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
})
document.getElementById("female").addEventListener(
"click" , function () {
let datos = data.results;
datos= genderFemale(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
})
document.getElementById("undknown").addEventListener(
"click" , function () {
let datos = data.results;
datos= genderUnknown(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
})

//status

document.querySelector("#alive").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES VIVOS</p>`
}

document.querySelector("#dead").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES MUERTOS</p>`
}

document.getElementById("alive").addEventListener(
"click" , function () {
let datos = data.results;
datos= statusAlive(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
}) 
document.getElementById("dead").addEventListener(
"click" , function () {
let datos = data.results;
datos= statusDead(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
})

//Personajes de la Tierra

document.querySelector(".liveEarth").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">PERSONAJES DE LA TIERRA C-137</p>`
let datos = data.results;
datos = tierraOrigin(datos);
document.getElementById("card1").innerHTML = uniqueTemplate(datos);
}

//Manipulacion del DOM

document.querySelectorAll('.orderAZ').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';

})
}) 

document.querySelectorAll('.orderZA').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';

})
})

document.querySelectorAll('#alien').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
})
}) 

document.querySelectorAll('#human').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
})
})

document.querySelectorAll('#male').forEach(item => {
item.addEventListener('click', ()=> {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
})
})

document.querySelectorAll('#female').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';

})
})

document.querySelectorAll('#undknown').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';

})
})
document.querySelectorAll('#alive').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
})
})

document.querySelectorAll('#dead').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';

})
})
document.querySelectorAll('.liveEarth').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
})
}) 

document.querySelectorAll('.home').forEach(item => {
item.addEventListener('click', () => {
document.getElementById('secondPage').style.display = 'none';
document.getElementById('homepage').style.display = 'block';
})
}) 

document.querySelector('.funFactsButton').addEventListener(
'click', () =>{
document.getElementById('tercerapagina').style.display = 'block';
document.getElementById('homepage').style.display = 'none';

}
)

document.getElementById("textBuscar").addEventListener(
"keyup", function () {
let input = document.getElementById("textBuscar").value;
let datos = data.results;
let datos1 = Buscadorr(datos,input);
document.getElementById("card").innerHTML = uniqueTemplate(datos1);
}) 
