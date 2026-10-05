/** 
 * * Taller Loops Nequi
 * * Michalle Muñoz
 * * Ejercicio 3: El menu de la app
 */

// * Se definen variables
const prompt = require('prompt-sync')();

console.log("============ Bienvenido a Nequi ============");
console.log();

// * Se presenta menu de opciones en consola
console.log("============ Menu ============");
console.log("Digite el número entre las opciones a continuación:");
console.log("1) Ver saldo");
console.log("2) Enviar dinero");
console.log("3) Recargar");
console.log("4) Salir");
console.log("===============================");

// * Se recibe la opcion seleccionada
let opcion = Number(prompt("Digite la opción a continuación: "));

do {
    if (opcion == 1) {
        // * Ver saldo
        console.log("Se seleccionó Opcion 1: ver saldo");

    } else if (opcion == 2) {
        // * Enviar dinero        
        console.log("Se seleccionó Opción 2: Enviar dinero");
    } else if (opcion == 3) {
        // * Recargar
        console.log("Se seleccionó Opción 3: Recargar");
    }

    // * Se presenta menu de opciones en consola
    console.log("============ Menu ============");
    console.log("Digite el número entre las opciones a continuación:");
    console.log("1) Ver saldo");
    console.log("2) Enviar dinero");
    console.log("3) Recargar");
    console.log("4) Salir");
    console.log("===============================");

    // * Se recibe la opcion seleccionada
    opcion = Number(prompt("Digite la opción a continuación: "));
} while (opcion !== 4);

console.log("Se seleccionó salir");
console.log("============ Hasta pronto! :) ============");
