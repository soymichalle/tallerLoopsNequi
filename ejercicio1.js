/** 
 * * Taller Loops Nequi
 * * Michalle Muñoz
 * * Ejercicio 1: Validar total y cantidad de retiros
 */

// * Se crean variables
let movimientos = [100, -20, 200, 400, -550, 1000, 570];
let total = 0;
let cantidadRetiros = 0;

// * Se recorre lista
for (let movimiento of movimientos){

    // * Se almacena valor total que hay en cuenta
    total = total + movimiento;

    // * Se valida si se hizo retiro de la cuenta
    if (movimiento<0) {
        cantidadRetiros++;
    }
}

// * Se presentan resultados en consola
console.log("============ Conteo ============");
console.log("Total actual en la cuenta: ", total);
console.log("Total de retiros realizados al mes: ", cantidadRetiros);
console.log("============ Final ============");
