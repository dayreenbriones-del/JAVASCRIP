"use strict";
 
// propiedadades y metodos de la clase Math
 
// propiedades de la clase Math
/* console.log("propiedadades de la clase Math:");
console.log("Valor de Pi: " + Math.PI); // 3.141592653589793
console.log("Valor de Euler: " + Math.E); // 2.718281828459045 */
 
// metodos de la clase Math
/* console.log("metodos de la clase Math:");
console.log("math.round(4.7): " + Math.round(4.7)); // redondea al numero entero mas cercano, resultado: 5
console.log("math.ceil(4.2): " + Math.ceil(4.2)); // redondea hacia arriba, resultado: 5
console.log("math.floor(4.8): " + Math.floor(4.8)); // redondea hacia abajo, resultado: 4 */
 
// ejemplo de uso de math.random()
console.log("ejemplo de uso de math.random():");
let randomNumber = Math.random(); // genera un numero aleatorio entre 0 y 1
console.log("Numero aleatorio entre 0 y 1: " + randomNumber);
// para generar un numero aleatorio entre 0 y 100
let randomNumber100 = Math.random() * 100;
console.log("Numero aleatorio entre 0 y 100: " + randomNumber100);    


let base = 2;
let exponente = 3;
console.log(Math.pow(base,exponente));

let num = -5
console.log(Math.abs(num));
ts