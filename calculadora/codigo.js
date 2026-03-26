"use strict"

const calcular=document.querySelector("#igual");
const borrar=document.querySelector("#borrar");
const mostrar=document.querySelector(".display");
const limpiar=document.querySelector("#limpiar");



const botonesVariable=document.querySelectorAll(".botones");

botonesVariable.forEach((boton) => {
boton.addEventListener("click", () => {
    document.getElementById("display").value += boton.textContent;
});


});