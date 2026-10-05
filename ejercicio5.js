/** 
 * * Taller Loops Nequi
 * * Michalle Muñoz
 * * Ejercicio 5: Varias cuentas
 */

// * Se definen variables
let usuarios = [
    {
        nombre: "Pepito",
        movimientos: [200, 200, -300]
    },

    {
        nombre: "Pepita",
        movimientos: [100, -50, -20]
    },

    {
        nombre: "Juanito",
        movimientos: [1500, -800, -20]
    }
];

console.log("============ Conteo por usuario ============");

for (let usuario of usuarios) {

    // * Se define conteo por usuario aquí para no sumar todo lo de las cuentas, solo lo una cuenta
    let totalUsuario = 0;

    for (let movimiento of usuario.movimientos) {
        totalUsuario = totalUsuario + movimiento;
    }
    console.log("El usuario " + usuario.nombre + " tiene $" + totalUsuario + " en su cuenta.");
}
console.log("============ Fin ============");