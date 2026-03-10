// ejecicio variable
"use strict";


//delacracion de variable

class Vehiculo {
    constructor(marca,modelo,año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidad=0;
    }
acelerar(){
    this.velocidad += 10;
}
desacelerar(){
    this.velocidad -= 10;
}

}




//crear objeto p1 con nombre kevin y apellido rojas 
let auto1 = new Vehiculo ("toyota", "rav4", "azul");
let auto2 = new Vehiculo ("CELESTE", "2024");

console.log(auto1.marca);
console.log(auto2.modelo);

auto1.acelerar();
console.log(auto2);

