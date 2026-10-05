/** 
 * * Taller Loops Nequi
 * * Michalle Muñoz
 * * Ejercicio 2: Validar PIN
 */

// * Se definen variables
const prompt = require('prompt-sync')();
let pinCorrecto = 2003;
let numeroIntentos = 0;

console.log("============ Acceso ============");

let intento = prompt("Digite su PIN a continuación: ")

// * Se valida y se repite hasta que el pin es correcto
while (Number(intento) !== pinCorrecto) {
    console.log("El PIN digitado es incorrecto, intente nuevamente");
    intento = prompt("Digite su PIN nuevamente: ")

    numeroIntentos++;
}

// * Se muestra en consola cuando el pin sea correcto
console.log("============ Bienvenido a Nequi ============");