import data from './data/rickandmorty/rickandmorty.js';
import {orderAZ, orderZA, genderMale, genderFemale, genderUnknown, speciesHuman, speciesAlien, statusAlive, statusDead, tierraOrigin} from './data.js';

function uniqueTemplate (datos){
const items = document.getElementById('items');
const templateCard = document.getElementById('template_card').content;
const fragment = document.createDocumentFragment();
const pintarCards = datos => {
datos.forEach(personaje => {
templateCard.querySelector('img').setAttribute('src', personaje.image)
templateCard.querySelector('p3').textContent = 'Nombre: ' + personaje.name
templateCard.querySelector('p4').textContent = 'Estado: ' +personaje.status
templateCard.querySelector('p5').textContent = 'Especie: ' +personaje.species
templateCard.querySelector('p6').textContent = 'Género: ' +personaje.gender
templateCard.querySelector('p7').textContent = 'Origen: ' +personaje.origin.name
const clone = templateCard.cloneNode(true)
fragment.appendChild(clone)
})
items.appendChild(fragment)
}
return pintarCards(datos)
}

//orderAZ

document.querySelector(".submenu0").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes de A-Z'</p>`
let datos = data.results;
datos = orderAZ(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
}
//orderZA

document.querySelector(".submenu1").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes de Z-A</p>`
let datos = data.results;
datos = orderZA(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
}

//species

document.querySelector("#human").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes por su especie</p>`
}

document.querySelector("#alien").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne "> Personajes por su especie</p>`
}

document.getElementById("human").addEventListener(
"click", function () {

let datos = data.results;
datos = speciesHuman(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
}) 

document.getElementById("alien").addEventListener(
"click" , function () {
let datos = data.results;
datos= speciesAlien(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
})

//gender

document.querySelector("#male").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes masculinos</p>`
}

document.querySelector("#female").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes femeninos</p>`
}
document.querySelector("#undknown").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes con genero desconocido'</p>`
}

document.getElementById("male").addEventListener(
"click" , function () {
let datos = data.results;
datos= genderMale(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
})
document.getElementById("female").addEventListener(
"click" , function () {
let datos = data.results;
datos= genderFemale(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
})
document.getElementById("undknown").addEventListener(
"click" , function () {
let datos = data.results;
datos= genderUnknown(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
})

//status

document.querySelector("#alive").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes vivos</p>`
}

document.querySelector("#dead").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes muertos</p>`
}

document.getElementById("alive").addEventListener(
"click" , function () {
let datos = data.results;
datos= statusAlive(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
}) 
document.getElementById("dead").addEventListener(
"click" , function () {
let datos = data.results;
datos= statusDead(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
})

//Personajes de la Tierra

document.querySelector(".submenu5").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes de la Tierra C-137</p>`
let datos = data.results;
datos = tierraOrigin(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
}

document.querySelectorAll('.submenu0').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';

//Write your code hear
console.log(event);
})
}) 

document.querySelectorAll('.submenu1').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#alien').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
}) 

document.querySelectorAll('#human').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#male').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#female').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#undknown').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})
document.querySelectorAll('#alive').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#dead').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})
document.querySelectorAll('.submenu5').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
}) 

document.querySelectorAll('.home').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('segundapagina').style.display = 'none';
document.getElementById('paginaprincipal').style.display = 'block';
//document.getElementById('items').style.display = 'none';
location.reload();
//Write your code hear
console.log(event);
})
}) 

document.querySelector('.boton2').addEventListener(
'click', event =>{
document.getElementById('tercerapagina').style.display = 'block';
document.getElementById('paginaprincipal').style.display = 'none';
console.log(event);

}
)

document.querySelector('.pregunta').addEventListener(
  'mouseover', event =>{
    document.getElementById('ventana').style.display = 'block';
    console.log(event)
  }
)

document.querySelector('.pregunta').addEventListener(
  'mouseout', event =>{
    document.getElementById('ventana').style.display = 'none';
    console.log(event)
  }
)


let datos = data.results;
let allWorlds = [];
let planeta = [];

let allnewObjetos = [];
//let numberEpisodes = [];
datos.forEach(elemento => {
  const objOrigin = elemento.origin;
  const nombre = elemento.name;
  const objEpisodios = elemento.episode;
  const numeros = objEpisodios.length
  //numberEpisodes.push(nombre,objEpisodios.length)
  
  const combinado = {nombre, objEpisodios, numeros}
  allnewObjetos.push(combinado)
  const valorObjOrigin = Object.values(objOrigin)
  allWorlds.push(valorObjOrigin[0]);
  
  //console.log(combinado);


});

//console.log(allnewObjetos);
let cinco = [];
allnewObjetos.map(numeros1 => {
  if(numeros1.numeros > 20) {
    cinco.push(numeros1)
  }
})
console.log(cinco);

allWorlds.map(mundo=>{
  if (planeta.includes(mundo) === false ){
    planeta.push(mundo)

  }

})

//console.log(numberEpisodes);
//console.log(names);
//console.log(planeta);
//console.log(allWorlds);



/*let separar = datos.origin;
let separar1 = Object.values(separar);
console.log(datos)
console.log(separar)
console.log(separar1)
console.log(separar1[0])*/