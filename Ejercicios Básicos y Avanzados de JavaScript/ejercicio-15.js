/* ## ****Ejercicio 15****

****Includes****: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .__includes__ de javascript.

*/
const products = [  
  "Camiseta de Metallica",  
  "Pantalón vaquero",  
  "Gorra de beisbol",  
  "Camiseta de Basket",  
  "Cinturón de Orión",  
  "AC/DC Camiseta",  
];

for (const element of products) {
  if(element.includes("Camiseta")){
    console.log(element);
  }
}