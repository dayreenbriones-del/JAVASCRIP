"use strict";

/* let fechaNacimiento = new Date(prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):"));

console.log("Año:", fechaNacimiento.getFullYear());
console.log("Mes:", fechaNacimiento.getMonth() + 1);
console.log("Día:", fechaNacimiento.getDate()); */

/* function saludar() {
    alert("Hola!Bienvenidos a la clase de JavaScript.")
} */
/* 
    window.addEventListener("onload",()=> {
        alert("¡Hola! Bienvenido a la clases JavaScript");
    }); */

/*     const saludar=(nombre,edad)=>{
    alert("  ¡Hola" $(nombre)! Tienes ${edad} años.Bienvenidos a la clase de JavaScript.);
    }
    saludar("Juan", 25); */

"use strict";

function generarNumeros() {

    let numeroUsuario = parseInt(prompt("Ingrese un número del 1 al 10:"));

    console.log("Tu número:", numeroUsuario);

    let numeros = [];

    for (let i = 1; i <= 3; i++) {

        setTimeout(() => {

            let numero = Math.floor(Math.random() * 10) + 1;
            numeros.push(numero);

            console.log("Número aleatorio " + i + ":", numero);

        }, i * 5000);
    }
}

generarNumeros();