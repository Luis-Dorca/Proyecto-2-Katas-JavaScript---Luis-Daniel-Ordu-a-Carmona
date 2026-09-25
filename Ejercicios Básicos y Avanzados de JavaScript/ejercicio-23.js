/* ## ****Ejercicio 23****

Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

Imprime cada array por consola.

*/
const movies = [  
  { name: "Titan A.E.", durationInMinutes: 130 },  
  { name: "Nightmare before Christmas", durationInMinutes: 225 },  
  { name: "Inception", durationInMinutes: 165 },  
  { name: "The Lord of the Rings", durationInMinutes: 967 },  
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },  
  { name: "Terminator", durationInMinutes: 140 },  
  { name: "Spirited Away", durationInMinutes: 80 },  
  { name: "The Matrix", durationInMinutes: 136 },  
  { name: "Amélie", durationInMinutes: 110 },  
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },  
];

const pequeña = [];
const mediana = [];
const grande = [];

for (const element of movies) {
  if(element.durationInMinutes < 100){
    pequeña.push(element);
  }else if(element.durationInMinutes < 200){
    mediana.push(element);
  }else{
    grande.push(element);
  }
}

console.log("Pelicuals pequeñas: ", pequeña);
console.log("Peliculas medianas: ", mediana);
console.log("Peliculas grandes: ", grande);