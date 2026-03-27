"uses strict";

const luzRoja = document.getElementById('luz-roja');
const luzAmarilla = document.getElementById('luz-amarilla');
const luzVerde = document.getElementById('luz-verde');

const tiempoRojo = 4000;
const tiempoAmarillo = 2000;
const tiempoVerde = 4000;

function apagarTodas() {
    luzRoja.classList.remove('rojo_prendido');
    luzAmarilla.classList.remove('amarillo_prendido');
    luzVerde.classList.remove('verde_prendido');
}


function iniciarCiclo() {
    apagarTodas();
    luzRoja.classList.add('rojo_prendido');

    setTimeout(() => {
        apagarTodas();
        luzVerde.classList.add('verde_prendido');

        setTimeout(() => {

            apagarTodas();
            luzAmarilla.classList.add('amarillo_prendido');


            setTimeout(() => {
                iniciarCiclo(); 
            }, tiempoAmarillo);

        }, tiempoVerde);

    }, tiempoRojo);
}

iniciarCiclo();

