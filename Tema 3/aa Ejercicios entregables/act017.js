// ♟️ Generar una disposición inicial aleatoria de 8 piezas (una por fila)

/**
 * Genera una disposición aleatoria de piezas en un tablero de ajedrez (8x8)
 * Cada pieza se coloca en una fila distinta, con columna aleatoria.
 * @returns {Array} Array de objetos con la pieza y su posición (fila, columna)
 */
function generarDisposicionInicial() {
  // 🧱 Array con las piezas principales
  const piezas = ["rey", "reina", "torre", "alfil", "caballo", "peón", "torre", "alfil"];

  // 🎯 Array donde guardaremos las posiciones generadas
  const disposicion = [];

  // 🔁 Recorremos cada pieza con forEach (más legible que un for tradicional)
  piezas.forEach((pieza, indice) => {
    // Fila = índice + 1 (una pieza por fila)
    const fila = indice + 1;

    // Generamos columna aleatoria (1 a 8)
    const columna = Math.floor(Math.random() * 8) + 1;

    // Creamos un objeto con los datos estructurados
    const posicion = {
      pieza: pieza,
      fila: fila,
      columna: columna
    };

    // Lo añadimos al array de disposición
    disposicion.push(posicion);
  });

  // 🧾 Mostramos el resultado en formato tabla (más claro visualmente)
  console.table(disposicion);

  // 🔙 Devolvemos los datos (función reutilizable)
  return disposicion;
}

// 🚀 Ejecutamos la función
generarDisposicionInicial();
