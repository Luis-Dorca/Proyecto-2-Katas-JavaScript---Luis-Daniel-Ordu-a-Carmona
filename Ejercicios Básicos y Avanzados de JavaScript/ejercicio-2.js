/*
## Ejercicio 2

****1. Luke Skywalker cumple años:****
Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.
*/
const jedi = {nombre: "Luke Skywalker", edad: 19};  

console.log(jedi.edad+6);

/*
****2. Presentación al estilo Leia Organa:****
- Crea tres variables con la siguiente información:
*/

const nombre = "Leia";
const apellido = "Organa";
let edad = 20;
// - Muestra un mensaje por consola que siga la siguiente estructura:
//- Utiliza la concatenación para ello.
console.log("Soy "+nombre+" "+apellido+", tengo "+edad+" años y soy una princesa de Alderaan.");


/*
****3. Calculando el coste total de sables de luz:****
- Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
- Imprime el resultado por consola utilizando console.log.
*/

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};  
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};  
const totalSables = sable1 + sable2;
console.log(totalSables);

/*
****4. Actualizando el precio final de las naves:****
- Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.
- Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).
// Cambia el precio base en esta linea modificando la variable  
*/

let precioBaseGlobal = 10000;  
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};  
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};  

precioBaseGlobal = 25000;

nave1.precioFinal = nave1.precioBase+precioBaseGlobal;
nave2.precioFinal = nave2.precioBase+precioBaseGlobal;

console.log(nave1);
console.log(nave2);

