// ♟️ Función para colocar una pieza de ajedrez en una posición aleatoria del tablero

/**
 * Genera una posición aleatoria en el tablero (1–8) y muestra dónde se coloca la pieza.
 * @param {string} pieza - Nombre de la pieza a colocar (por ejemplo: "Reina", "Caballo", "Torre")
 * @returns {object} Objeto con la fila y columna generadas
 */
function colocarPiezaAleatoria(pieza) {
  // 🎲 Generamos los números aleatorios en un solo punto del código
  const fila = Math.floor(Math.random() * 8) + 1;      // número entre 1 y 8
  const columna = Math.floor(Math.random() * 8) + 1;   // número entre 1 y 8

  // 🧩 Mostramos el resultado con una plantilla literal
  console.log(`📍 La ${pieza} se ha colocado en la posición: fila ${fila}, columna ${columna}.`);

  // 💾 Devolvemos los valores como objeto (función pura → no depende del entorno externo)
  return { fila, columna };
}

// 🔍 Ejemplo de uso:
colocarPiezaAleatoria("Dama");
colocarPiezaAleatoria("Caballo");
