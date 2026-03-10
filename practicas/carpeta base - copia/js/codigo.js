"use strict";

function agregar(valor){
    document.getElementById("resultado").value += valor;
}

function limpiar(){
    document.getElementById("resultado").value = "";
}

function borrar(){
    let valor = document.getElementById("resultado").value;
    document.getElementById("resultado").value = valor.slice(0,-1);
}

function calcular(){
    let expresion = document.getElementById("resultado").value;
    document.getElementById("resultado").value = eval(expresion);
}