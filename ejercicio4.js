/** 
 * * Taller Loops Nequi
 * * Michalle Muñoz
 * * Ejercicio 4: Filtrar y buscar
 */

// * Se definen variables
let movimientos = [100, 0, -20, 200, 400, -550, 0, 1000, 570, 0];
let posicionEncontrada = 0;

// * Se recorre el listado y pago comercio es mayor o igual a 600
for (let i = 0; i < movimientos.length; i++) {
    
    if (movimientos[i] == 0) {
        continue;
    } else {
        posicionEncontrada++;
    }

    if (movimientos[i] >= 600) {
        console.log("Se encontró el pago comercio de $" + movimientos[i] + " en la posición " + posicionEncontrada);
        break;
    }
}