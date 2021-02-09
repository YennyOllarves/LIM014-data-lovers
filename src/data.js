// estas funciones son de ejemplo

//export const example = () => {
  //return 'example';
//};
<<<<<<< HEAD

//export const anotherExample = () => {
  //return 'OMG';
//};


=======

//export const anotherExample = () => {
  //return 'OMG';
//};

export const gender = (datos) => {
  let malePersonaje = datos.filter(personaje => personaje.gender == 'Male');
  let femalePersonaje = datos.filter(personaje => personaje.gender == 'Female');
  let undknownPersonaje = datos.filter(personaje => personaje.gender == 'unknown');
  return (malePersonaje)
}

export const order = (datos) => {
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
>>>>>>> 9b21d582f304bfbb7456caa94554b4a3af7e81d8
