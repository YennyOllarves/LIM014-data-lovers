import data from './data/rickandmorty/rickandmorty.js';
import {mainCharacters, numberWorlds} from './data.js';

let datos=data.results
let top5 = mainCharacters(datos)  
let  nombreCinco = [];
let numeroEpisodios = [];
top5.forEach(elements=>{
  const nombres = elements.name;
  const episodioss = elements.numberEpisodes;
  nombreCinco.push(nombres);
  numeroEpisodios.push(episodioss)
})

let ctx = document.getElementById("topFive").getContext("2d");
var Top = new Chart(ctx,{
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


let arrayMundos = numberWorlds(datos)
let repetidos = {};

arrayMundos.forEach(numero=>{
  repetidos[numero]= (repetidos[numero]||0)+1;
})
let nombresPlanetas = Object.keys(repetidos);
let personajesDelPlaneta = Object.values(repetidos);
console.log(repetidos);
console.log(nombresPlanetas);
console.log(personajesDelPlaneta);

let mundos = document.getElementById("numberMundos").getContext("2d");
let World = new Chart(mundos,{
  type:"pie",
  data:{
    labels: nombresPlanetas,
    datasets:[{
      label: "Aproximadamente hay " + nombresPlanetas.length,
      data: personajesDelPlaneta,
      backgroundColor: ["rgba(66,134,244)","rgba(66,134,50)","rgba(3,134,244)","rgba(66,80,244)","rgba(20,134,244)"
    ]
    }]
  }
});