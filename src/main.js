import data from './data/rickandmorty/rickandmorty.js';
import {orderAZ, orderZA, genderMale, genderFemale, genderUnknown, speciesHuman, speciesAlien, statusAlive, statusDead, tierraOrigin,Buscadorr, mainCharacters} from './data.js';

function uniqueTemplate (datos){
const items = document.getElementById('items');
items.innerHTML = "";
const templateCard = document.getElementById('template_card').content;
const fragment = document.createDocumentFragment();
const pintarCards = datos => {
datos.forEach(containerCharacter => {
templateCard.querySelector('img').setAttribute('src', containerCharacter.image)
templateCard.querySelector('p3').textContent = 'Nombre: ' + containerCharacter.name
templateCard.querySelector('p4').textContent = 'Estado: ' + containerCharacter.status
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
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes de A-Z'</p>`
let datos = data.results;
datos = orderAZ(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
}
//orderZA

document.querySelector(".orderZA").onclick = function() {
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

document.querySelector(".liveEarth").onclick = function() {
document.getElementById("titulo").innerHTML = `<p class="tituloOne ">Personajes de la Tierra C-137</p>`
let datos = data.results;
datos = tierraOrigin(datos);
document.getElementById("card").innerHTML = uniqueTemplate(datos);
}

document.querySelectorAll('.orderAZ').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';

//Write your code hear
console.log(event);
})
}) 

document.querySelectorAll('.orderZA').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#alien').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
}) 

document.querySelectorAll('#human').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#male').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#female').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#undknown').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})
document.querySelectorAll('#alive').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})

document.querySelectorAll('#dead').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
})
document.querySelectorAll('.liveEarth').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
//document.getElementById('items').style.display = 'none';
//Write your code hear
console.log(event);
})
}) 

document.querySelectorAll('#home').forEach(item => {
item.addEventListener('click', event => {
document.getElementById('secondPage').style.display = 'none';
document.getElementById('homepage').style.display = 'block';
//document.getElementById('items').style.display = 'none';
//location.reload();
//Write your code hear
console.log(event);
})
}) 

document.querySelector('.funFactsButton').addEventListener(
'click', event =>{
document.getElementById('tercerapagina').style.display = 'block';
document.getElementById('homepage').style.display = 'none';
console.log(event);

}
)


/*document.querySelector('#buscador').addEventListener(
  'click', event =>{
    document.getElementById("homepage").style.display = 'none';
    document.getElementById("secondPage").style.display = 'block';
  
  console.log(event);
  
  }
  )*/

/*document.querySelector('#worlds').addEventListener(
  'click', event =>{
    document.getElementById('ventana').style.display = 'block';
    document.getElementById("containerP").innerHTML = "Hay: " + planeta.length + " mundos";
   
    //document.getElementById('card').style.display = 'none';
    console.log(event)
  }
)*/
/*document.querySelector('.cierraVentana').addEventListener(
  'click', event =>{
    document.getElementById('ventana').style.display = 'none';
    console.log(event)
  }
)
document.querySelector('.cierraVentana1').addEventListener(
  'click', event =>{
    document.getElementById('ventana1').style.display = 'none';
    console.log(event)
  }
)*/

/*document.querySelector('#mainCharacters').addEventListener(
  'click', event =>{
   
    document.getElementById('ventana1').style.display = 'block';
    //console.log(cincoPer(cinco))
     document.getElementById("cardCinco").innerHTML = cincoPer(cinco);
    //document.getElementById('containerP').style.display = 'none';
  }
)*/
/*document.querySelector('#worlds').addEventListener(
  'mouseout', event =>{
    document.getElementById('ventana').style.display = 'none';
    console.log(event);
  }
)*/
//document.querySelector('#mainCharacters').addEventListener(
  //'mouseout', event =>{
    //document.getElementById('ventana').style.display = 'none';
    //console.log(event)
  //}
//)


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
  const imagen = elemento.image;
  //numberEpisodes.push(nombre,objEpisodios.length)
  
  const combinado = {imagen, nombre, objEpisodios, numeros}
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


document.getElementById("textBuscar").addEventListener(
  "keyup", function () {
  let input = document.getElementById("textBuscar").value;
  let datos = data.results;
  let datos1 = Buscadorr(datos,input);
  document.getElementById("card").innerHTML = uniqueTemplate(datos1);
  //console.log(datos1)
  }) 


  function cincoPer(cinco) {
    const prueba = document.getElementById('containerCharacter');
    prueba.innerHTML="";
    const templateP= document.getElementById('templateCharacters').content;
    const fragment = document.createDocumentFragment();
    const personajesCards = cinco =>{
      cinco.forEach(personajes =>{
          templateP.querySelector('img').setAttribute('src', personajes.imagen)
          templateP.querySelector('p3').textContent = 'Nombre: ' + personajes.nombre
          templateP.querySelector('p4').textContent = 'Numero de Episodios: ' +personajes.numeros
          const clone=templateP.cloneNode(true)
          fragment.appendChild(clone)
      })
      
      prueba.appendChild(fragment)
    }
    return personajesCards(cinco)
      }

let top5 = mainCharacters(datos)  
let  nombreCinco = [];
let numeroEpisodios = [];
top5.forEach(elements=>{
  const nombres = elements.name;
  const episodioss = elements.numberEpisodes;
  nombreCinco.push(nombres);
  numeroEpisodios.push(episodioss)
})
console.log(nombreCinco);
console.log(numeroEpisodios);


 let ctx = document.getElementById("topFive").getContext("2D");
  var chart = new Chart(ctx,{
    type:"bar",
    data:{
      labels: nombreCinco,
      datasets:[{
        label: "Top Five",
        data: numeroEpisodios,
        backgroundColor: ["rgba(66,134,244)","rgba(66,134,50)","rgba(3,134,244)","rgba(66,80,244)","rgba(20,134,244)"
      ]
      }]
    },
    options: {

      scales: {
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }
  });
      



//const d=document.querySelector("#buscador")

//function searchFilter(input, selector){
  //selector = document.querySelector(".p3")
  //input = document.getElementById("textBuscar")
  //d.addEventListener("click", e => {
    //if(e.target.matches(input)){
      //console.log(e.input)
    //}
  //})
//}

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


