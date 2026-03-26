"use strict"
 console.log(document);
/* 
const seleccionado=document.querySelector(".box2 h2");

seleccionado.textContent="Dayreen briones";
console.log(seleccionado.textContent); */ 

const seleccionado = document.getElementsByClassName("titulos");

for (let i = 0; i < 3; i++) {
    seleccionado [i].textContent="Dayreen briones";
}

console.log(seleccionado.textContent); 