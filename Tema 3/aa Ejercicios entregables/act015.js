// ♟️ Función para validar si una posición está dentro del tablero de ajedrez (1 a 8)

/**
 * Valida que las coordenadas x e y estén dentro del tablero de ajedrez.
 * @param {number} x - Coordenada en el eje horizontal (columna)
 * @param {number} y - Coordenada en el eje vertical (fila)
 * @returns {boolean} true si la posición es válida, false si no lo es.
 */
function validarPosicion(x, y) {
  // Comprobamos si alguno de los valores no es un número válido
  if (
    isNaN(x) || isNaN(y) ||          // No es un número
    !isFinite(x) || !isFinite(y) ||  // Es Infinity o -Infinity
    x < 1 || x > 8 ||                // Fuera del rango horizontal
    y < 1 || y > 8                   // Fuera del rango vertical
  ) {
    console.log(`❌ Error: posición inválida (${x}, ${y}). Debe estar entre 1 y 8.`);
    return false;
  }

  console.log(`✅ Posición válida: (${x}, ${y})`);
  return true;
}

// 🔍 Ejemplos de uso:
validarPosicion(4, 7);  // ✅ válido
validarPosicion(0, 9);  // ❌ error (fuera del tablero)
validarPosicion("a", 5); // ❌ error (NaN)
validarPosicion(3, Infinity); // ❌ error (Infinity)
