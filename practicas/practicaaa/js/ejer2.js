"use stric";

function cambiarColor() {
    let colores = ["red", "blue", "green", "yellow", "purple"];
    let color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = color;
}

setInterval(cambiarColor, 2000);
