function leerNumero() {
    let num = parseInt(prompt("Ingrese un número del 1 al 10:"));

    if (num >= 1 && num <= 10) {
        let texto = "";

        switch (num) {
            case 1: texto = "Uno"; break; // el break es para detener la ejecucion de un bloque,cuando usamos swicht
            case 2: texto = "Dos"; break;
            case 3: texto = "Tres"; break;
            case 4: texto = "Cuatro"; break;
            case 5: texto = "Cinco"; break;
            case 6: texto = "Seis"; break;
            case 7: texto = "Siete"; break;
            case 8: texto = "Ocho"; break;
            case 9: texto = "Nueve"; break;
            case 10: texto = "Diez"; break;
        }

        alert("Número en texto: " + texto);
    } else {
        alert(" El número está fuera del rango (1 - 10)");
    }
}