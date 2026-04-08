"use strict";

const botonModo = document.getElementById("modo");
const botonTraducir = document.getElementById("traducir");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");


botonModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        botonModo.innerText = "Modo claro";
    } else {
        botonModo.innerText = "Modo oscuro";
    }
});

let enIngles = true;

botonTraducir.addEventListener("click", () => {
    if (enIngles) {
        titulo.innerText = "Hola Mundo";
        texto.innerText = "El mundo es un lugar hermoso lleno de culturas, personas y naturaleza. Vivimos en un planeta que está en constante cambio y crecimiento. Es importante cuidar nuestro mundo para las futuras generaciones.";

        botonTraducir.innerText = "Traducir a inglés";
        enIngles = false;

    } else {
        titulo.innerText = "Hello World";
        texto.innerText = "The world is a beautiful place full of cultures, people, and nature. We live on a planet that is constantly changing and growing. It is important to take care of our world for future generations.";

        botonTraducir.innerText = "Traducir a español"; 
        enIngles = true;
    }
});