// ut2Act09Bermejo.js
/*
FASE 1:
Función calcularValorPiezas(tablero)
- Recibe un array de piezas (["♕", "♖", "♙", "♘"])
- Devuelve el valor total según la tabla
- Usa for...of
- Usa valor por defecto [] si no se pasa nada
*/

function calcularValorPiezas(tablero = []) {
  // Tabla de valores de las piezas
  const valores = {
    "♕": 9,   // Dama
    "♖": 5,   // Torre
    "♗": 3,   // Alfil
    "♘": 3,   // Caballo
    "♙": 1,   // Peón
    "♔": 500  // Rey
  };

  let total = 0;

  // Recorremos cada pieza del tablero
  for (const pieza of tablero) {
    // Si la pieza está en la tabla, sumamos su valor
    if (valores[pieza]) {
      total += valores[pieza];
    }
  }

  return total; // Devolvemos el total de puntos
}

/*
FASE 2:
Función compararJugadores(jugadorA, jugadorB)
- Recibe dos arrays de piezas
- Usa calcularValorPiezas()
- Devuelve un mensaje indicando quién tiene ventaja
*/

function compararJugadores(jugadorA, jugadorB) {
  const puntosA = calcularValorPiezas(jugadorA);
  const puntosB = calcularValorPiezas(jugadorB);

  if (puntosA > puntosB) {
    return `El Jugador A tiene ventaja con ${puntosA} puntos frente a ${puntosB}.`;
  } else if (puntosB > puntosA) {
    return `El Jugador B tiene ventaja con ${puntosB} puntos frente a ${puntosA}.`;
  } else {
    return `Empate: ambos jugadores tienen ${puntosA} puntos.`;
  }
}

// 🔹 Ejemplo de prueba:
const jugadorA = ["♕", "♙", "♙"];
const jugadorB = ["♖", "♘", "♙"];
console.log(compararJugadores(jugadorA, jugadorB));
