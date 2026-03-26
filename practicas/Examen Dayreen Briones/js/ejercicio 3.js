function ejercicio3() {

    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) { //el isNaN es por si no pone un numero en el espacio donde se debe colocar la nota le va a enviar un mensaje para que lo pueda colocar
        alert(" Por favor ingrese todas las notas");
        return;
    }

    let suma = nota1 + nota2 + nota3;

    let mensaje = "";

    if (suma >= 70) {
        mensaje = " Aprobado";
    } else if (suma > 50) {
        mensaje = " Examen extraordinario";
    } else {
        mensaje = " Reprobado";
    }

    alert("Suma: " + suma + "\nResultado: " + mensaje);
}