// Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
//en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
//la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, 
//que al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, 
//si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.

// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
let numeroMagico;
let btnComenzar = document.querySelector("#btnComenzar");

function comenzarJuego() {
    numeroMagico = getRandomArbitrary(1, 101);
    console.log(numeroMagico);
    //Cambio el mensaje del botón
    btnComenzar.className = "btn btn-secondary btn-lg";
    btnComenzar.innerHTML = "El juego comenzo 🤗";
    btnComenzar.disable = true;
    //Resetear el form
    let formJuego = document.querySelector("#formJuego");
    formJuego.reset();
}

//Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function consultarNumero(e) {
    e.preventDefault();
    let numeroIngresado = document.querySelector("#numeroIngresado").value;
    let mensaje = document.querySelector("#msj");
    if (numeroIngresado == numeroMagico) {
        //Mensaje de alerta
        mensaje.className = "alert alert-primary";
        mensaje.innerHTML = "Adivinaste!! 😁";
        btnComenzar.className = "alert alert-primary";
        btnComenzar.innerHTML = "Vuelve a jugar";
        btnComenzar.disable = false;
    } else if (numeroIngresado > numeroMagico) {
        mensaje.className = "alert alert-info";
        mensaje.innerHTML = "Vuelve a interntarlo 😫, el número mágico es menor!";
    } else {
        mensaje.className = "alert alert-info";
        mensaje.innerHTML = "Vuelve a intentarlo 😯, el número mágico es mayor!";
    }

}

