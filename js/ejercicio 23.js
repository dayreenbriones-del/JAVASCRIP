"use strict"

/* const boton = document.querySelector("#calcular");

const resultado = document.querySelector("#resultado");


boton.addEventListener("click", () => {
    resultado.textContent = "Hola Day"
    resultado.classList.add("formatoNuevo")

});




boton2=document.addEventListener("click",()=> resultado.classList.remove("formatoNuevo")); */

let padre=document.querySelector(".padre");
padre.style.border="2px solid black"
/* 
const hijos=document.querySelectorAll(".padre li:nth-child(even)");
hijos.forEach(elemento => {

    elemento.style.color="red";
});


const seleccion =hijos[4].parentNode;
seleccion.style.backgroundColor="yellow"; */

/* const hijos2=document.querySelector(".padre").childNodes;
hijos.forEach(elemento => {
    if (elemento.nodeType === 1) {
        elemento.style.color= "blue";
 }});
 */

/* const hijos2=document.querySelector(".padre").children;
console.log(hijos2);
for (let i =0; i < array.length; i++ ) {
    hijos2[i]
}

 */

const nuevo=document.createElement("div");
nuevo.classList.add("formatoNuevo");
nuevo.id="caja";
nuevo.setAttribute("title", "caja de herramientas")
nuevo.textContent="caja de herramientas";
console.log(nuevo);
/* padre.appendChild(nuevo);
 */

/* padre.insertBefore(nuevo,padre,children[2]);
 */

const body = document.body;
console.log(nuevo);



 