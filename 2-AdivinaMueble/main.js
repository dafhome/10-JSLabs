// TIENDA MUEBLES *

// Tienes un super-catálogo de 4 muebles:

// Silla Mackintosh

// Silla IKEA

// Mesa Roble

// Mesa IKEA

// Encontrar con las preguntas adecuadas  (prompts) y responder s/n y encontrar cuál es el mueble elegido

// Que sea el mínimo de preguntas.

// Usar condicionales con esas respuestas para encontrar el mueble correcto.

// Mostrar respuesta (mueble correcto) en alert o en pantalla.


function eligeMueble() {
    let preguntaUno = prompt("¿Quieres un mueble de IKEA? Si o No");
    preguntaUno = preguntaUno.toLowerCase();
    let preguntaDos = prompt("¿Quieres una mesa? Si o No");
    preguntaDos = preguntaDos.toLowerCase();
    let getDocument = document.getElementById("main")

    if (preguntaUno == "si" && preguntaDos == "si") {
        getDocument.innerHTML = '<div class="imagenes rounded mt-4" id="imagenes4"><h1>Mesa IKEA</h1></div>';
    }
    else if (preguntaUno == "si" && preguntaDos == "no") {
        getDocument.innerHTML = '<div class="imagenes rounded mt-4" id="imagenes2"><h1>Silla IKEA</h1></div>';
    }
    else if (preguntaUno == "no" && preguntaDos == "si") {
        getDocument.innerHTML = '<div class="imagenes rounded mt-4" id="imagenes3"><h1>Mesa Roble</h1></div>';
    }
    else if (preguntaUno == "no" && preguntaDos == "si") {
        getDocument.innerHTML = '<div class="imagenes rounded mt-4" id="imagenes1"><h1>Silla Mackintosh</h1></div>';
    }
    else {
        getDocument.innerHTML = '<div class="imagenes rounded mt-4 d-flex justify-items-center" id="imagenes5"><h1>Responde Si o No</h1></div>';
    }
}