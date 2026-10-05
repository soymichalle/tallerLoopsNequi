/** 
 * * Taller Loops Nequi
 * * Michalle Muñoz
 */

// * Se crean variables
let movimientos = [100, -20, 200, 400, -550, 1000, 570];
let total = 0;
let cantidadRetiros = 0;

for (let movimiento of movimientos){
    total = total + movimiento;

    if (movimiento<0) {
        cantidadRetiros++;
    }
}

console.log("============ Conteo ============");
console.log("Total actual en la cuenta: ", total);
console.log("Total de retiros realizados al mes: ", cantidadRetiros);
console.log("============ Final ============");
