/* ## Ejercicio 29

Agrupa las películas de Star Wars por ****década**** de lanzamiento en un objeto donde las ****claves**** son las décadas y los ****valores**** son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola.

// Añade tu código de bucle aquí
*/
const starWarsMovies = [  
  { title: 'A New Hope', releaseYear: 1977 },  
  { title: 'The Empire Strikes Back', releaseYear: 1980 },  
  { title: 'Return of the Jedi', releaseYear: 1983 },  
  { title: 'The Phantom Menace', releaseYear: 1999 },  
  { title: 'Attack of the Clones', releaseYear: 2002 },  
  { title: 'Revenge of the Sith', releaseYear: 2005 },  
  { title: 'The Force Awakens', releaseYear: 2015 },  
  { title: 'The Last Jedi', releaseYear: 2017 },  
  { title: 'The Rise of Skywalker', releaseYear: 2019 },  
  { title: 'Rogue One', releaseYear: 2016 },  
  { title: 'Solo', releaseYear: 2018 }  
];  

const agrupacion = { 'decada 1970': [], 'decada 1980': [], 'decada 1990': [], 'decada 2000': [], 'decada 2010': [] };

for (const element of starWarsMovies) {
  if(element.releaseYear > 1970 && element.releaseYear < 1980){
    agrupacion['decada 1970'].push(element)
  }else if(element.releaseYear > 1979 && element.releaseYear < 1990){
    agrupacion['decada 1980'].push(element)
  }else if(element.releaseYear > 1989 && element.releaseYear < 2000){
    agrupacion['decada 1990'].push(element)
  }else if(element.releaseYear > 1999 && element.releaseYear < 2010){
    agrupacion['decada 2000'].push(element)
  }else if(element.releaseYear >= 2010 && element.releaseYear < 2020){
        agrupacion['decada 2010'].push(element)
  }
}

console.log(agrupacion);