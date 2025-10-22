// ♟️ Programa para calcular la puntuación total de piezas capturadas en ajedrez

// Asignamos los valores de cada pieza capturada
// (Podríamos pedirlos por prompt, pero aquí los simulamos)
let peones = 2;     // 2 peones capturados
let caballos = 1;   // 1 caballo capturado
let alfiles = 0;    // ningún alfil capturado
let torres = 1;     // 1 torre capturada
let damas = 0;      // ninguna dama capturada

// Valores en puntos por tipo de pieza
const PUNTOS_PEON = 1;
const PUNTOS_CABALLO = 3;
const PUNTOS_ALFIL = 3;
const PUNTOS_TORRE = 5;
const PUNTOS_DAMA = 9;

// 🧮 Calculamos la puntuación total
let puntuacionTotal = 
  (peones * PUNTOS_PEON) + 
  (caballos * PUNTOS_CABALLO) + 
  (alfiles * PUNTOS_ALFIL) + 
  (torres * PUNTOS_TORRE) + 
  (damas * PUNTOS_DAMA);

// Redondeamos a un decimal (aunque sean enteros)
let puntuacionRedondeada = puntuacionTotal.toFixed(1);

// Mostramos el resultado con una plantilla literal
console.log(`🎯 Puntuación total de piezas capturadas: ${puntuacionRedondeada} puntos`);
