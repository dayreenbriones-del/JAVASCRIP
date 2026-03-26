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

function elevado(){
    let valor = document.getElementById("resultado").value;
    document.getElementById("resultado").value = Math.sqrt(valor);
}

function cuadrado(){
    let valor = document.getElementById("resultado").value;
    document.getElementById("resultado").value = Math.pow(valor,2);
}

const resultado = document.getElementById("resultado");

