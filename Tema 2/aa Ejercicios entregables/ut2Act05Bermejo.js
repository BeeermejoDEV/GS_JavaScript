/*
Contexto:
Queremos crear un programa que muestre cómo se mueve una pieza de ajedrez según el símbolo que elija el jugador:

♕ → Dama
♖ → Torre
♔ o ♚ → Rey (blanco o negro)

Pasos a realizar:
Usar un switch para mostrar un mensaje con el movimiento de la pieza.
Agrupar casos (♔ y ♚) para que tengan el mismo comportamiento.
Usar default para manejar un símbolo que no corresponda a ninguna pieza.

Retos opcionales:
Añadir más piezas (♗, ♘, ♙) con su explicación de movimientos.
Agrupar rey blanco (♔) y rey negro (♚) en un mismo case. Lo mismo con el resto de piezas negras.
Añadir un mensaje que indique si la pieza es mayor (dama, torre, rey) o menor (alfil, caballo, peón).
*/

// --- Configuración inicial ---
let pieza = "♘"; // Cambia este valor para probar (♕, ♖, ♔, ♚, ♗, ♘, ♙, etc.)

/**
 * Muestra cómo se mueve una pieza según su símbolo
 */
function mostrarMovimiento(pieza) {
  let tipo = ""; // "mayor" o "menor"

  switch (pieza) {
    case "♕":
      console.log("La dama se mueve en cualquier dirección, tantas casillas como quiera.");
      tipo = "mayor";
      break;

    case "♖":
      console.log("La torre se mueve en líneas rectas: horizontal o verticalmente.");
      tipo = "mayor";
      break;

    case "♔":
    case "♚":
      console.log("El rey se mueve una casilla en cualquier dirección.");
      tipo = "mayor";
      break;

    case "♗":
      console.log("El alfil se mueve en diagonal, sin límite de casillas.");
      tipo = "menor";
      break;

    case "♘":
      console.log("El caballo se mueve en forma de 'L': dos casillas en una dirección y una en perpendicular.");
      tipo = "menor";
      break;

    case "♙":
      console.log("El peón se mueve hacia adelante una casilla (dos en su primer movimiento).");
      tipo = "menor";
      break;

    default:
      console.log("Símbolo no reconocido. Introduce una pieza válida de ajedrez.");
      return; // Sale de la función si no coincide
  }

  // Mensaje adicional según el tipo de pieza
  console.log(`Esta pieza se considera ${tipo === "mayor" ? "una pieza mayor" : "una pieza menor"}.`);
}

// --- Ejecución ---
mostrarMovimiento(pieza);
