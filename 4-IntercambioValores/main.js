// EJERCICIO DE INTERCAMBIO DE VALORES EN DOS VARIABLES

// Pides dos nombres al usuario. Ejemplo, el usuario entra:
// Variable A = “Alejandro”
// Variable B = “Noelia”

// Primero mostramos estos valores, del tipo:
// “En Barcelona está Alejandro, y en Tarragona está Noelia” 

// Después intercambiamos los valores,
// Y mostramos:
// “En Barcelona está Noelia, y en Tarragona está Alejandro” 

// Muestras el valor real cambiado de cada variable, no simplemente cambiar la visualización. Es decir, que al hacer console.log(A) y console.log(B), antes y después,  se vea que el contenido de la variable ha cambiado.
 
// Puedes usar en pantalla exactamente la misma instrucción antes y después, pero el resultado debe ser diferente:
// document.write(“En Barcelona está A, y en Tarragona está B” 


// Ejercicio típico, no buscar la solución en internet, hay que pensar!


var nombreUno = prompt("Indicame el primer nombre");
var nombreDos = prompt("Indicame el segundo nombre");

document.write("<h1>En Barcelona está "+nombreUno+", y en Tarragona está "+nombreDos+".</h1>");
console.log("nombreUno:"+nombreUno);
console.log("nombreDos:"+nombreDos);


// function cambiarVariables(a,b){
//     let uno = a;
//     a = b;
//     b = uno;
// }

function cambiarNombres(){
    document.write("<h1>En Barcelona está "+nombreUno+", y en Tarragona está "+nombreDos+".</h1>");    console.log("nombreUno:"+nombreUno);
    let a = nombreUno;
    nombreUno = nombreDos;
    nombreDos = uno;
    document.write("<h1>En Barcelona está "+nombreUno+", y en Tarragona está "+nombreDos+".</h1>");    
    console.log("nombreUno:"+nombreUno);
    console.log("nombreDos:"+nombreDos);
}
