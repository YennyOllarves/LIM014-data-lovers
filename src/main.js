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
  pintarCards(datos)
  }


//orderAZ

document.querySelector(".submenu").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes ordenamos de A-Z'
  let datos = data.results;
  datos = orderAZ(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);

}
  
//orderZA
document.querySelector(".submenu1").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes ordenamos de Z-A'
  let datos = data.results;
  datos = orderZA(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
}

//species
document.querySelector(".submenu2").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes ordenamos por su especie'
  
  const button = document.createElement("button")
  button.textContent = "Human";
  button.id = "human";
  
  const filtro = document.querySelector(".filtro");
  filtro.insertAdjacentElement("beforeend", button);

  document.querySelector("#human").onclick = function() {
  let datos = data.results;
  datos = speciesHuman(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
  }

  const button1 = document.createElement("button")
  button1.textContent = "Alien";
  button1.id = "alien";
  
  const filtro1 = document.querySelector(".filtro");
  filtro1.insertAdjacentElement("beforeend", button1);

  document.querySelector("#alien").onclick = function() {
  let datos = data.results;
  datos = speciesAlien(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
  }
}

//gender
document.querySelector(".submenu3").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes filtrados por su género'
  
  const button = document.createElement("button")
  button.textContent = "Masculino";
  button.id = "male";
  
  const filtro = document.querySelector(".filtro");
  filtro.insertAdjacentElement("beforeend", button);
  document.querySelector("#male").onclick = function() {
    let datos = data.results;
  datos = genderMale(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
  }

  const button1 = document.createElement("button")
  button1.textContent = "Femenino";
  button1.id = "female";
  
  const filtro1 = document.querySelector(".filtro");
  filtro1.insertAdjacentElement("beforeend", button1);
  document.querySelector("#female").onclick = function() {
    let datos = data.results;
  datos = genderFemale(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
  }

  const button2 = document.createElement("button")
  button2.textContent = "Desconocido";
  button2.id = "undknown";
  
  const filtro2 = document.querySelector(".filtro");
  filtro2.insertAdjacentElement("beforeend", button2);
  document.querySelector("#undknown").onclick = function() {
    let datos = data.results;
  datos = genderUnknown(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
  }
}

//status

document.querySelector(".submenu4").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes ordenamos por su estado'
  
  const button = document.createElement("button")
  button.textContent = "Vivo";
  button.id = "alive";
  
  const filtro = document.querySelector(".filtro");
  filtro.insertAdjacentElement("beforeend", button);

  document.querySelector("#alive").onclick = function() {
  let datos = data.results;
  datos = statusAlive(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
  }

  const button1 = document.createElement("button")
  button1.textContent = "Muerto";
  button1.id = "dead";
  
  const filtro1 = document.querySelector(".filtro");
  filtro1.insertAdjacentElement("beforeend", button1);

  document.querySelector("#dead").onclick = function() {
  let datos = data.results;
  datos = statusDead(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
  }
}

//Personajes de la Tierra

document.querySelector(".submenu5").onclick = function() {
  document.getElementById("titulo").innerHTML = 'Personajes de la Tierra C-137'
  let datos = data.results;
  datos = tierraOrigin(datos);
  document.getElementById("card").innerHTML = uniqueTemplate(datos);
}
//document.getElementById("AZ").onclick =
  //(datos = orderAZ(datos));
//document.getElementById("ZA").onclick=
  //(datos = orderZA(datos));
//datos = orderAZ(datos);

//datos = orderZA(datos);


//orderZA


//


//const datosFem = genderFemale(datos)
//const datosUnd = genderUnknown(datos)
//datos.forEach(function(element){
  //  console.log(element);
//})



    //const list = document.createElement('tr');
    //list.innerHTML = `
 //  <td>Name: <th>${element.name}</th></td>
   //<td>Estado: <th>${element.status}</th></td>
//   <td>Especie: <th>${element.species}</th></td>
   //<td>Género: <th>${element.gender}</th></td>
   //<td>Origen: <th>${element.origin.name}</th></td>
    //`
    //element.name; 
    //contenedor.appendChild(list)
//})

//console.log(datos);
//console.log(gender(datos));
//console.log(order(datos));

//let list = document.querySelectorAll('.submenu');
//console.log(list);
document.querySelectorAll('.submenu').forEach(item => {
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

      document.querySelectorAll('.submenu2').forEach(item => {
        item.addEventListener('click', event => {
            document.getElementById('segundapagina').style.display = 'block';
            document.getElementById('paginaprincipal').style.display = 'none';
            //document.getElementById('items').style.display = 'none';
    
        //Write your code hear
        console.log(event);
        })
        }) 

      document.querySelectorAll('.submenu3').forEach(item => {
        item.addEventListener('click', event => {
            document.getElementById('segundapagina').style.display = 'block';
            document.getElementById('paginaprincipal').style.display = 'none';
            //document.getElementById('items').style.display = 'none';
    
        //Write your code hear
        console.log(event);
        })
        })
        
        document.querySelectorAll('.submenu4').forEach(item => {
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
    
        //Write your code hear
        console.log(event);
        })
        }) 