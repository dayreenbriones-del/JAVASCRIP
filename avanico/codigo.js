"use strict";

let abanico = document.querySelector("#imgaba");

document.querySelector("#uno")
.addEventListener("click", () => {
    abanico.style.animationDuration = "1s";
});

document.querySelector("#dos")
.addEventListener("click", () => {
    abanico.style.animationDuration = "0.5s";
});

document.querySelector("#tres")
.addEventListener("click", () => {
    abanico.style.animationDuration = "0.35s";
});


const botonOn = document.querySelector("#on");

botonOn.addEventListener("click", () => {
    if (botonOn.innerText === "off") {
        botonOn.innerText = "on";
        botonOn.classList.add("activo"); 
        abanico.style.animationPlayState = "running";
    } else {
        botonOn.innerText = "off";
        botonOn.classList.remove("activo"); 
        abanico.style.animationPlayState = "paused";
    }
});