"use strict"

const arregloPinturas = ["imagenes/Pintura1min.gif", "imagenes/Pintura2min.gif", "imagenes/Pintura3min.gif", "imagenes/Pintura4min.gif", "imagenes/Pintura5min.gif", "imagenes/Pintura6min.gif", "imagenes/Pintura7min.gif", "imagenes/Pintura8min.gif", "imagenes/Pintura9min.gif", "imagenes/Pintura10min.gif", "imagenes/Pintura11min.gif", "imagenes/Pintura12min.gif"];


let contenedor = document.querySelector("#contenedor");

arregloPinturas.forEach((pintura) => {

   /* ***********caja************** */
   let columna = document.createElement("div");
   columna.classList.add("col-md-4");


   let card = document.createElement("div");
   card.classList.add("card")
   card.classList.add("m-3")

   let cardBody = document.createElement("div");
   cardBody.classList.add("card-body");





   /* ***********titulo************** */
   let titulo = document.createElement("h5");
   titulo.classList.add("card-tittle");
   titulo.classList.add("text-center");
   titulo.textContent = "pintura " + (arregloPinturas.indexOf(pintura) + 1);




   /* ***********imagen************** */
   let imagen = document.createElement("img");
   imagen.src = pintura;
   imagen.classList.add("card-img-top")





   /* ***********boton************** */
   let boton = document.createElement("button")
   boton.href = "#";
   boton.classList.add("d-block");
   boton.classList.add("m-auto");
   boton.classList.add("btn");
   boton.classList.add("mt-3");
   boton.classList.add("btn-primary");
   boton.textContent = "ver mas";
   boton.setAttribute("data-bs-toggle", "modal"); // Se asigna el atributo para activar el modal a
   boton.setAttribute("data-bs-target", "texampleModal");
   boton.classList.add("numeroBoton"); // Se usa para identificar el botón y asignarle un evento po: boton classlist. add("d-block", ""x-auto", "w-100"I'my-2", "Justify-content-center", "btn", "btn-prima
   boton.classList.add("d-block", "mx-auto", "w-100", "my-2", "justify-content-center", "btn", "btn-primary");
   boton.textContent - "Ver";




   /* ***********invocar************** */
   cardBody.appendChild(titulo);
   cardBody.appendChild(imagen);
   cardBody.appendChild(boton);


   card.appendChild(cardBody);

   columna.appendChild(card);

   contenedor.appendChild(columna)


});