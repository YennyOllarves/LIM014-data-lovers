
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

//Calculo

export const Buscadorr = (datos,input) => {
  let malePersonaje = datos.filter(personaje => personaje.name.startsWith(input) === true);
  return (malePersonaje)
}