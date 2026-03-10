"use strict";


let nombre = "Juan";
let apellido = "Perez";
let ciudad = "Liberia";
let edad = 23;

let salariobruto=100000, deducciones=20000, salarioneto=0;

// concatenacion tadicional 
/* 
let mensaje1= "hola mi nombre es " + nombre + "  " + apellido + " vivo en " + ciudad + " y tengo " + edad + " años."; 

console.log(mensaje1); */

/* let mensaje2 = `Hola, mi nombre es ${nombre} ${apellido}. Vivo en ${ciudad} y tengo ${eda} años`;
console.log(mensaje2);
 */

salarioneto = salariobruto - deducciones;

console.log(`El salario neto es, ${salarioneto-deducciones}`);
