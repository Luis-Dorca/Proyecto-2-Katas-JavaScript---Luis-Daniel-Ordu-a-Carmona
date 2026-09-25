/* ## ****Ejercicio 7****

Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

*/

function greaterNumber(numberOne , numberTwo) {  
  if(numberOne>numberTwo){
    console.log(numberOne+" Es mayor");
  }else{
    console.log(numberTwo+" Es el número más grande");
  }
}

greaterNumber(5,2);
