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
// eslint-disable-next-line no-undef
new Chart(ctx,{
  type:"bar",
  data:{
    labels: nombreCinco,
    datasets:[{
      label: "Número de episodios de aparicion",
      data: numeroEpisodios,
      backgroundColor: ["rgba(66,134,244)","rgb(178, 23, 235)","rgb(247, 27, 211)","rgb(255, 68, 0)","rgb(0, 204, 255)"
    ]
    }]
  },
  options: {

    scales: {
      yAxes:[{
        ticks:{
          beginAtZero:true,
          fontColor:["rgba(255,255,255)"],
        }
      }],
      xAxes:[{
        ticks:{
          fontColor: ["rgba(255,255,255)"],
<<<<<<< HEAD
          fontSize: ["14"]
=======
          fontSize: ["13"]
>>>>>>> e285d2546b1edf9fc482652cabd0ccefe2ea5353
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


let mundos = document.getElementById("numberMundos").getContext("2d");
// eslint-disable-next-line no-undef
new Chart(mundos,{
  type:"line",
  data:{
    labels: nombresPlanetas,
    datasets:[{
      label: "Número de personajes originarios de este  planeta",
      data: personajesDelPlaneta,
      fill: false,
      fontColor: ["rgba(255,255,255)"],
      borderColor: ["rgba(66,134,244)"],
      backgroundColor: ["rgba(66,134,244)","rgba(66,134,50)","rgba(3,134,244)","rgba(66,80,244)","rgba(20,134,244)"
    ]
    }]
  },
  options: {

    scales: {
      yAxes:[{
        ticks:{
          fontColor: ["rgba(255,255,255)"],
          beginAtZero:true
        }
      }],
      xAxes:[{
        ticks:{
          fontColor: ["rgba(255,255,255)"],
<<<<<<< HEAD
          fontSize: ["14"]
=======
          fontSize: ["13"]
>>>>>>> e285d2546b1edf9fc482652cabd0ccefe2ea5353
        }
      }]
    }
  }
});