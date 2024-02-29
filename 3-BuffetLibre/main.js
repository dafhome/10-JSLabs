// BUFFET LIBRE RESTAURANTE

// Estás en un restaurante con buffet libre y vas pidiendo platos.

// Escribes lo que se ha pedido cada vez.

// Ejemplo: qué quieres comer? Respuesta: lentejas. En pantalla: “Has pedido lentejas”. Que se vaya viendo todo lo que se va pidiendo.

// Escribir ‘salir’ para salir.

// Cuando salgas, decir la cantidad total de platos que has comido: “has pedido 7 platos. Que aproveche!”

// NOTA: Cuando lleves 5 platos, tiene que dar el mensaje “vas a reventar!”

function eligeComida(){
    // let i=1
    // let end = "";
    var end = false;
    var comida;
    let i = 0;
    while (end != true){
        comida = prompt("¿Que te apetece comer?");
        if (comida == "salir"){
            end = true;
            console.log(end);
        }
        else{
            i++;
            document.write("<p>Has elegido "+comida+"</p>");
            console.log(comida);
            if (i>4){
                alert("vas a reventar! Llevas ya "+i+" platos.");
            }
        }  
    }
    document.write("<h4>Has pedido "+i+" platos</h4>");


    // while (comida.toLowerCase() != "salir"){
  
    // }
    
}