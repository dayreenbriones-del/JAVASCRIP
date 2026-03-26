//**********************METODOS SOBRE ARRAY

//revisar eso.
//Indice o posiciones en Arreglos []

"use strict"

const tecnologias = ["HTML", "REACT", "CSS", "BOOTSTRAP", "ANGULAR", "VAE"];
//const numero = [20, 10, 30, 15];

//console.log(typeof numero);

//*********************PROPIEDADES DE ARRAY
/*
console.log (tecnologias.length);
console.log (numero.length)
 
console.log(tecnologias[3])
 */

//*********************FILTER: en automático recorre el array filtramos y sacamos HTML */

/* const nuevoarray = tecnologias.filter(function (tech){
    if (tech !== "HTML" && tech !=="CSS") {
        return tech;
    }
});
console.log(nuevoArray);
 
 */

//*********************FILTER: en automático recorre el array filtramos y sacamos HTML */
/*  
const nuevoArray = tecnologias.filter(function (tech){
    if (tech !== "HTML" && tech !=="CSS") {
        return tech;
    }
});
console.log(nuevoArray);
 */

//const nuevoarray=tecnologias.filter(tech =>(tech !== "HTML" && tech !== "CSS"));

/* const resultado2=numero.filter(num => num !==10);
console.log(resultado2);
 */

/* const verificar=numero.includes(10);
console.log(verificar);
 */

/*  const verificar=numero.every(num => num >= 15);
console.log(verificar);

if (verificar) {
    console.log("Cumple la condicion");
    
} else {
    console.log("No cumple la condicion");
    
} */

/* const numeros = [10, 3, 5, 6, 7, 8, 42];

const pares = numeros.filter(num => num % 2 === 0);

console.log(pares); */

//metodo map

/* const numeros = [2,3,5,6];
const cuadrado=numeros.map(num=> num*num);
console.log(cuadrado); */

/* const nombres=["Juan", "Maria", "Pedro", "Ana"];
const nombresO=nombres.sort();
console.log(nombresO);
 */
/* 
const precios = [100, 200, 300];

const preciosiba = precios.map(precio => precio * 0.13 + precio);

console.log(preciosiba); */

/* const nombres = ["kevin", "esmeralda", "Yerika", "jesus"];


const nombresM = nombres.map(nombre => nombre.toUpperCase());

const nombresO = nombresM.sort();

console.log(nombresO); */

/* const frutas = ["manzana", "pera", "uva"];

if (frutas.includes("pera")) {
    console.log("Sí está la pera");
} else {
    console.log("No está la pera");
} */
/* 
const frutas=["manzana", "pera","uva"]
const verificar=frutas.includes("pera")
console.log(`Pera = ${verificar}`); */


const nombres = ["Esmeralda", "Francella", "Jesus", "Pedro"];

let salarios = [];


for (let i = 0; i < nombres.length; i++) {
    let salario = parseFloat(prompt("Ingrese el salario de " + nombres[i] + ":"));
    salarios.push(salario);
}


let mayor = salarios[0];
let personaMayor = nombres[0];

for (let i = 1; i < salarios.length; i++) {
    if (salarios[i] > mayor) {
        mayor = salarios[i];
        personaMayor = nombres[i];
    }
}


console.log("La persona que gana más es: " + personaMayor);
console.log("Con un salario de: " + mayor);