
//orderA-Z
export const orderAZ = (datos) => {
  let ordenar = datos.sort((a,b) => {
    if (a.name < b.name){
      return -1
    }
    if (a.name > b.name){
      return 1
    }
    return 0
})
return ordenar
}

//orderZ-A
export const orderZA = (datos) => {
  let ordenar = datos.sort((a,b) => {
    if (a.name > b.name){
      return -1
    }
    if (a.name > b.name){
      return 1
    }
    return 0
})
return ordenar
}

//Gender

export const genderMale = (datos) => {
  let malePersonaje = datos.filter(personaje => personaje.gender == 'Male');
  return (malePersonaje)
}
export const genderFemale = (datos) => {
  let femalePersonaje = datos.filter(personaje => personaje.gender == 'Female');
  return (femalePersonaje)
}
export const genderUnknown = (datos) => {
  let unknownPersonaje = datos.filter(personaje => personaje.gender == 'unknown');
  return (unknownPersonaje)
} 

//Species

export const speciesHuman = (datos) => {
  let humanPersonaje = datos.filter(personaje => personaje.species == 'Human');
  return (humanPersonaje)
} 

export const speciesAlien = (datos) => {
  let alienPersonaje = datos.filter(personaje => personaje.species == 'Alien');
  return (alienPersonaje)
} 

//Status

export const statusAlive = (datos) => {
  let alivePersonaje = datos.filter(personaje => personaje.status == 'Alive');
  return (alivePersonaje)
} 

export const statusDead = (datos) => {
  let deadPersonaje = datos.filter(personaje => personaje.status == 'Dead');
  return (deadPersonaje)
} 

//Personajes de la Tierra 

export const tierraOrigin = (datos) => {
  let tierraPersonaje = datos.filter(personaje => personaje.origin.name == 'Earth (C-137)');
  return (tierraPersonaje)
} 

//Input Buscador

export const Buscadorr = (datos,input) => {
  let buscarTexto = datos.filter(personaje => personaje.name.startsWith(input) === true);
  return (buscarTexto)
}

//Calculo Estadistico

export const numberWorlds = (datos) =>{
  let allWorlds = [];
  let planet = [];
  datos.forEach(element => {
    const objOrigin = element.origin;
    const valorObjOrigin = Object.values(objOrigin);
    allWorlds.push(valorObjOrigin[0]);
  })
  allWorlds.map(mundo=>{
    if (planet.includes(mundo) === false ){
      planet.push(mundo)
    }
  })
  return allWorlds;
}

export const mainCharacters = (datos) =>{
  let allnewObjetos = [];
  let topFive = [];
  datos.forEach(elemento => {
    const name = elemento.name;
    const objEpisodes = elemento.episode;
    const numberEpisodes = objEpisodes.length
    const image = elemento.image;
    
    const combinado = {image, name, objEpisodes, numberEpisodes}
    allnewObjetos.push(combinado)
  })
   allnewObjetos.map(element => {
   if(element.numberEpisodes > 20) {
    topFive.push(element)
  }
})
return topFive;
}