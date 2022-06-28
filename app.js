//puedeAvanzar(colorSemaforo)
//Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

//puedeAvanzar('verde')     // true
//puedeAvanzar('amarillo')  // false
//puedeAvanzar('rojo')      // false
//puedeAvanzar('lila')      // 'Error: color de semáforo inválido'


const puedeAvanzar = (colorSemaforo)=>{
  if(colorSemaforo === "verde"){
    return("true");
  }
  else if(colorSemaforo === "amarillo"){
    return("false");
  }
   else if(colorSemaforo === "rojo"){
    return("false");
  }
  else{
    return "Error: color de semáforo inválido";
  }
}

console.log(puedeAvanzar("verde"));
console.log(puedeAvanzar("amarillo"));
console.log(puedeAvanzar("rojo"));
console.log(puedeAvanzar("lila"));


