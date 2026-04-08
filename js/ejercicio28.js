"use strict";


const botonModo = document.getElementById("modo");
const botonTraducir = document.getElementById("traducir");
const botonAumentar = document.getElementById("aumentar");
const botonDisminuir = document.getElementById("disminuir");

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const texto2 = document.getElementById("texto2");


botonModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        botonModo.innerText = "☀️"; 
    } else {
        botonModo.innerText = "🌙"; 
    }
});

let tamaño = 16;
botonAumentar.addEventListener("click", () => {
    if (tamaño < 30) { 
        tamaño += 2;
        document.body.style.fontSize = tamaño + "px";
    }
});

botonDisminuir.addEventListener("click", () => {
    if (tamaño > 12) { 
        tamaño -= 2;
        document.body.style.fontSize = tamaño + "px";
    }
});


let enIngles = true;

botonTraducir.addEventListener("click", () => {

    if (enIngles) {
        titulo.innerText = "Hola Mundo";

        texto.innerText = "El mundo es un lugar hermoso lleno de culturas, personas y naturaleza. Vivimos en un planeta que está en constante cambio y crecimiento. Es importante cuidar nuestro mundo para las futuras generaciones.";

        texto2.innerText = "La Tierra es el tercer planeta desde el Sol y el único objeto astronómico conocido que alberga vida. Esto es posible porque la Tierra es un mundo oceánico, el único en el Sistema Solar que mantiene agua líquida en su superficie.";

        botonTraducir.classList.remove("bi-translate");
        botonTraducir.classList.add("bi-globe");

        botonTraducir.title = "Traducir a inglés";

        enIngles = false;

    } else {
        titulo.innerText = "Hello World";

        texto.innerText = "The world is a beautiful place full of cultures, people, and nature. We live on a planet that is constantly changing and growing. It is important to take care of our world for future generations.";

        texto2.innerText = "Earth is the third planet from the Sun and the only known astronomical object to harbor life. This is possible because Earth is an ocean world, the only one in the Solar System that maintains liquid water on its surface.";

        botonTraducir.classList.remove("bi-globe");
        botonTraducir.classList.add("bi-translate");

        botonTraducir.title = "Traducir a español";

        enIngles = true;
    }
});