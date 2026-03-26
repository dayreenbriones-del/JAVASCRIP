"use strict"

function codigo() {
            let recaudado = parseFloat(prompt("Ingrese el monto recaudado:"));
            let gastos = parseFloat(prompt("Ingrese los gastos:"));

            let ganancia = recaudado - gastos;

            let taxi = ganancia * 0.50;
            let conductor = ganancia * 0.25;
            let dueno = ganancia * 0.25;

            alert("Ganancia total: " + ganancia);
            alert("Taxi (50%): " + taxi);
            alert("Conductor (25%): " + conductor);
            alert("Dueño (25%): " + dueno);
        }