
// 1) Contar alfiles (♗) en el tablero con un for
const tablero = ["♖", "♘", "♗", "♕", "♗", "♘", "♖", "♔"];
let contadorAlfiles = 0;
for (let i = 0; i < tablero.length; i++) {
    if (tablero[i] === "♗") contadorAlfiles++;
}
console.log(`Número de alfiles: ${contadorAlfiles}`);

// 2) Simular el avance de un peón desde la fila 2 hasta la 8 con while
let filaPeon = 2;
while (filaPeon < 8) {
    filaPeon++; // avanza una fila por turno
}
console.log("¡El peón ha llegado a la octava fila y puede coronar!");

// 3) Comprobar si el rey está en jaque con do...while (corregido)
const estados = ["seguro", "presión", "amenaza", "jaque"];
let idx = 0;
let enJaque = false;
do {
    if (estados[idx] === "jaque") {
        enJaque = true;
    }
    idx++;
} while (!enJaque && idx < estados.length);
console.log(enJaque ? "El rey está en jaque" : "El rey NO está en jaque");

// 4) Usar continue para saltar el enroque "O-O" dentro de una lista de movimientos
const movimientos = ["e4", "d4", "O-O", "c5"];
for (const m of movimientos) {
    if (m === "O-O") continue; // saltamos el enroque
    console.log("Movimiento:", m);
}

// 5) Usar break para detenerse al encontrar la dama (♕)
const piezas = ["♙", "♘", "♗", "♕", "♖"];
for (let i = 0; i < piezas.length; i++) {
    if (piezas[i] === "♕") {
        console.log("Dama encontrada en índice", i);
        break; // detenemos la búsqueda
    }
}
