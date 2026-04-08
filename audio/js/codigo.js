"use strict";

const audio = new Audio();

const input = document.getElementById("seleccionar");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const mute = document.getElementById("mute");
const loop = document.getElementById("loop");
const volumen = document.getElementById("volumen");
const velocidad = document.getElementById("velocidad");

input.addEventListener("change", () => {
    const archivo = input.files[0];
    if (archivo) {
        audio.src = URL.createObjectURL(archivo);
    }
});

play.addEventListener("click", () => {
    audio.play();
});

pause.addEventListener("click", () => {
    audio.pause();
});

mute.addEventListener("click", () => {
    audio.muted = !audio.muted;
});

loop.addEventListener("click", () => {
    audio.loop = !audio.loop;
});

volumen.addEventListener("input", function () {
    audio.volume = this.value;
});

velocidad.addEventListener("input", function () {
    audio.playbackRate = this.value;
});

loop.addEventListener("click", () => {
    audio.loop = !audio.loop;
    loop.textContent = audio.loop ? "🔂" : "🔁";
});