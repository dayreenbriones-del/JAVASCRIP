"use strict";
function calcularSalario() {
    var horas = document.getElementById("horas").value;
    var salarioHora = document.getElementById("salarioHora").value;
    var bruto = horas * salarioHora;
    var ivm = bruto * 0.07;
    var renta = bruto * 0.13;
    var neto = bruto - ivm - renta;

    document.getElementById("bruto").value = bruto.toFixed(2);
    document.getElementById("ivm").value = ivm.toFixed(2);
    document.getElementById("renta").value = renta.toFixed(2);
    document.getElementById("neto").value = neto.toFixed(2);
}