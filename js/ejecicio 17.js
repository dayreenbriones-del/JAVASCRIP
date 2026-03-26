let numero;
let suma = 0;
let contador = 0;

do {
    numero = Number(prompt("Ingrese un número (0 para terminar):"));

    if (numero !== 0) {
        suma = suma + numero;
        contador++;
    }

} while (numero !== 0);

let promedio = 0;

if (contador > 0) {
    promedio = suma / contador;
}

console.log("Cantidad de números:", contador);
console.log("Suma total:", suma);
console.log("Promedio:", promedio);