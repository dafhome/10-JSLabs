// 1-ADIVINAR UN COLOR

// Creas una variable con un color que tú decidas.

// Sigue preguntando el programa hasta que el usuario adivine el color

// Si lo adivina, das mensaje de “felicidades!”

const COLOR = "violeta";
COLOR = COLOR.toLowerCase()
var colorOk;

function acertarColor(){
    while (colorOk != true){
        let colorElegido = prompt("Elige un color:")
        if (colorElegido.toLowerCase() == COLOR){
            colorOk = true;
        }
        else{
            alert("Lo siento! No has acertado, prueba otra vez.")
        }
    }
    window.open("/1-AdivinaColor/congrat.html");
}
