"uses strict";

let progreso = 0;
let barra = document.getElementById("file");

let intervalo = setInterval(() => {
    progreso++;

    barra.value = progreso;

    if (progreso >= 100) {
        clearInterval(intervalo);
    }
}, 500);