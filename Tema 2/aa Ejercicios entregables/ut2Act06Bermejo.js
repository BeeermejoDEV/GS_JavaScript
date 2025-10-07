function valorPieza(pieza) {
  switch (pieza) {
    case "♕": // Dama
      return 9;

    case "♖": // Torre
      return 5;

    case "♘": // Caballo
      return 3;

    case "♗": // Alfil
      return 3;

    case "♙": // Peón
      return 1;

    case "♔":
    case "♚": // Rey (blanco o negro)
      return Infinity; // o un valor simbólico muy alto

    default:
      return 0; // Si no se reconoce la pieza
  }
}

// Ejemplo de uso:
console.log(valorPieza("♕")); // 9
console.log(valorPieza("♘")); // 3
console.log(valorPieza("♚")); // Infinity
console.log(valorPieza("❌")); // 0
