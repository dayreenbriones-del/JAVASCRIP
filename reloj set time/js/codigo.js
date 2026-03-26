"use strict";

const relojDigital=document.querySelector("#reloj");
relojDigital.classList.add("reloj")

function iniciarReloj() {
    const fecha = new Date();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    relojDigital.textContent=`${horas}:${minutos}:${segundos}`;
    setTimeout(iniciarReloj,1000);
}

