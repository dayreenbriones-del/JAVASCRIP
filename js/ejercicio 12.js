//operadores arimeticos
/* let a = 9;
let b = 2;
console.log("suma: " + (a + b));
console.log("resta: " + (a - b));
console.log("multiplicacion: " + (a * b));
console.log("division: " + (a % b));
console.log("exponente: " + (a ** b));


//operadores de signacion
let c = 5;
c += 3; 
console.log("asignacion suma: " + c );
c -= 2;
console.log("asignacion resta: " + c );
c *= 4;
console.log("asignacion multiplicacion: " + c );
c /= 2;
console.log("asignacion division: " + c );
c **= 2;
console.log("asignacion exponente: " + c );


let d = 10;
let e = "10";
console.log("igualdad: " + (d == e));
console.log("identidad: " + (d === e));
console.log("diferente: " + (d != e));
console.log("no identico: " + (d !== e));
console.log("mayor que: " + (d > 5));
console.log("menor: " + (d < 15));
 */

let horas = 45;
let pagoHora = 5000;
let salario;

if (horas <= 40) {
    salario = horas * pagoHora;
} else {
    let horasExtra = horas - 40;
    salario = (40 * pagoHora) + (10 * pagoHora * 1.5);
}

console.log("Salario total: ₡" + salario);


let celsius = 30;
let fahrenheit;

fahrenheit = (celsius * 9/5) + 32;

console.log("Temperatura en Fahrenheit: " + fahrenheit);