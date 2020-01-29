// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreVisitante = prompt("ingrese su nombre por favor");
const miNombre = "gustavo";
const nombrePariente = "benjamin";

if (nombreVisitante.toLowerCase() === miNombre) {

    console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}`);

} else if (nombreVisitante.toLowerCase() === nombrePariente) {

    console.log(`Hola, te llamas ${nombrePariente}, igual que mi hijo`);

} else {

    console.log(`Hola ${nombreVisitante}`);

}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadVisitante = Number(prompt("ingrese su edad"));
const miEdad = 39;

if (edadVisitante === miEdad) {

    console.log("tenemos la misma edad");

} else if (edadVisitante < miEdad) {

    console.log("sos menor que yo");
} else {

    console.log("sos mas viejo, ponete las pilas");

}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


const tieneDni = prompt("tiene dni?").toLowerCase();

if (tieneDni === "si") {

    const edadVisitante = Number(prompt("ingrese su edad"));

    if (edadVisitante >= 18) {

        console.log("puede ingresar al bar");

    } else {
        console.log("tomate el palo");
    }

} else {
    console.log("tomatelas");
}
