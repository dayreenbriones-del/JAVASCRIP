// ejecicio variable
"use strict";


//delacracion de variable

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar(){
    console.log("hola me llamo : " + this.nombre + " " + this.apellido);

}

}


//crear objeto p1 con nombre kevin y apellido rojas 
let p1 = new Persona("Dayreen", "Briones");
let p2 = new Persona("Maria", "Gomez");

console.log(p1.apellido);
console.log(p2.nombre);
p1.saludar();


