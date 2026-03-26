"use strict";

function iniciarReloj() {
    setInterval(() => {
        const fecha = new Date();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();

        relojDigital.textContent = `${horas}:${minutos}:${segundos}`;
    }, 1000);
}

iniciarReloj();