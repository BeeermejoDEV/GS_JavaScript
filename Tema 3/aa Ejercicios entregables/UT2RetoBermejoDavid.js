// Valores de las piezas (en puntos)
const VALORES = {
  // dama
  "♕": 9,
  // torre
  "♖": 5,
  // caballo
  "♘": 3,
  // peón
  "♙": 1,
};

// Puntos y jugadas
let puntosBlancas = 0;
let puntosNegras = 0;
let jugadas = 0;

/**
 * Captura de pieza
 * @param {string} pieza - símbolo de la pieza (♕, ♖, ♘, ♙)
 * @param {string} color - "blancas" o "negras" (quién captura)
 */
function capturar(pieza, color) {
  // Aumentamos jugada
  jugadas++;

  // Sumamos puntos según quién captura
  const valor = VALORES[pieza] ?? 0;
  if (color === "blancas") {
    puntosBlancas += valor;
  } else if (color === "negras") {
    puntosNegras += valor;
  } else {
    console.log("Color no válido. Usa 'blancas' o 'negras'.");
  }

  console.log(`${color} capturan ${pieza}`);
  mostrarEstado();
}

/**
 * Muestra el estado de la partida
 */
function mostrarEstado() {
  // Mostrar puntos actuales
  console.log(`Blancas: ${puntosBlancas} | Negras: ${puntosNegras}`);

  // Mostrar quién va ganando
  if (puntosBlancas > puntosNegras) {
    console.log("Van ganando: blancas");
  } else if (puntosNegras > puntosBlancas) {
    console.log("Van ganando: negras");
  } else {
    console.log("Empate");
  }

  // Comprobar si alguien llega exactamente a 10 puntos
  if (puntosBlancas === 10) {
    console.log("¡Blancas llegan exactamente a 10 puntos!");
  }
  if (puntosNegras === 10) {
    console.log("¡Negras llegan exactamente a 10 puntos!");
  }

  // Turno según jugadas (par = blancas, impar = negras)
  const turno = jugadas % 2 === 0 ? "blancas" : "negras";
  console.log(`Turno: ${turno}`);
}

// Ejemplo de partida
capturar("♖", "blancas"); // +5
capturar("♘", "negras");  // +3
capturar("♙", "blancas"); // +1
capturar("♕", "negras");  // +9
