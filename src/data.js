
//orderZ-A
export const orderZA = (datos) => {
  let ordenarZ = datos.sort((a,b) => {
    if (a.name > b.name){
      return -1
    }
    if (a.name > b.name){
      return 1
    }
    return 0
})
return ordenarZ
}

export const orderAZ = (datos) => {
  let ordenarA = datos.sort((a,b) => {
    if (a.name < b.name){
      return -1
    }
    if (a.name > b.name){
      return 1
    }
    return 0
})
return ordenarA
}
//Gender

export const genderMale = (datos) => {
  let malePersonaje = datos.filter(personaje => personaje.gender == 'Male');
  return (malePersonaje)
}
