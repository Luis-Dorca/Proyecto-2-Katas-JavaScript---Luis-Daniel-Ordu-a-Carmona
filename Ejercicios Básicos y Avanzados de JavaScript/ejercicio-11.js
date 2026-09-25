/* ****Ejercicio 11****

****Calcular promedio mezclado****: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función:

*/
const mixedElements = [  
  6,  
  1,  
  "Marvel",  
  1,  
  "hamburguesa",  
  "10",  
  "Prometeo",  
  8,  
  "Hola mundo",  
];  
function averageWord(list) {  
  let suma = 0;
  
  for(let i = 0; i < list.length; i++){
    let elemento = list[i];
    if(typeof list[i] == "string"){
      suma+=elemento.length;
    }else if (typeof list[i] == "number"){
      suma+=elemento;
    }
  }
  let promedio = suma/list.length;
  return "El promedio de la suma de letras y números del array es "+promedio;
}

console.log(averageWord(mixedElements));