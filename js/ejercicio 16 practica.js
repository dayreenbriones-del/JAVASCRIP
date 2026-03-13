// pide al usuario un numero y muestra su tabla de multiplicar del 1 al 12 usando un ciclo while

let numero = prompt("Ingrese un numero");
let i = 1;

while (i <=12) {
    console.log(numero + " x " + i + " = " + (numero * i));
    i++;
}
