"use strict";

const boton = document.querySelector("#btnMostrar");
const contenedor = document.querySelector("#contenedor");

boton.addEventListener("click", () => {

    const imagen = document.createElement("img");

    imagen.src = "https://loveincorporated.blob.core.windows.net/contentimages/gallery/fd758fcd-2f8b-4d7a-8bae-2dcdbdd48e4b-cd2ce5ec-5088-4b64-8abb-e57d594540a2-Iceland.jpg";
    imagen.classList.add("imag");

    contenedor.appendChild(imagen);


});