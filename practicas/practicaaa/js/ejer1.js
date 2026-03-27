"use strict";

function preparando() {
    document.getElementById("mensaje1").textContent = "Preparando...";
    setTimeout(procesando, 2000);
}

function procesando() {
    document.getElementById("mensaje2").textContent = "Procesando...";
    setTimeout(finalizado, 2000);
}

function finalizado() {
    document.getElementById("mensaje3").textContent = "Finalizado";
}


preparando();
