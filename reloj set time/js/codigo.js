"use strict";

const relojDigital = document.querySelector("#reloj");
relojDigital.classList.add("reloj");

function iniciarReloj() {
    const fecha = new Date();

    let horas = fecha.getHours().toString().padStart(2, "0");
    let minutos = fecha.getMinutes().toString().padStart(2, "0");
    let segundos = fecha.getSeconds().toString().padStart(2, "0");

    relojDigital.textContent = `${horas}:${minutos}:${segundos}`;

    setTimeout(iniciarReloj, 1000);
}

iniciarReloj();