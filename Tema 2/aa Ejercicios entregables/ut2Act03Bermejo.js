/*
Queremos programar un pequeño sistema que:

Compruebe si un rey está en jaque.
Si está en jaque, verifique con un nested if si además es jaque mate.
Si no está en jaque, indique que la partida sigue normal.
Finalmente, usar un operador ternario para mostrar de forma breve qué jugador tiene el turno.
Retos opcionales (implican investigación)
Cambiar valores de turno, enJaque y sinMovimientos para probar distintos escenarios.
Añadir un tercer nivel de comprobación: si es jaque mate, mostrar también qué jugador ganó.
Usar ternario dentro de un console.log() para imprimir directamente el ganador (ejemplo: "Ganaron las blancas" o "Ganaron las negras").
*/

// --- Configuración inicial ---
let turno = "blancas";       // "blancas" | "negras"
let enJaque = true;          // ¿El rey del jugador en turno está en jaque?
let sinMovimientos = false;  // ¿No hay jugadas legales para ese jugador?

/**
 * Comprueba el estado del rey, y lo muestra por consola
 */
function comprobarEstadoRey(enJaque, sinMovimientos) {
  if (enJaque) {
    console.log("El rey está en jaque.");

    // nested if → ¿también es jaque mate?
    if (sinMovimientos) {
      console.log("…y no tiene movimientos legales: ¡jaque mate!");

      // Tercer nivel (opcional): mostrar quién ganó con un ternario
      // Si el turno es de blancas y están en mate → ganan las negras (y viceversa)
      console.log(turno === "blancas" ? "Ganaron las negras" : "Ganaron las blancas");
    } else {
      console.log("No es mate: aún hay movimientos para defenderse.");
    }
  } else {
    console.log("No hay jaque. La partida sigue normal.");
  }
}

/**
 * Muestra de quién es el turno
 */
function mostrarTurno(turno) {
  console.log(`Turno: ${turno === "blancas" ? "♔ Blancas" : "♚ Negras"}`);
}

// --- Ejecución ---
comprobarEstadoRey(enJaque, sinMovimientos);
mostrarTurno(turno);

// --- Pruebas rápidas (puedes cambiar valores y volver a ejecutar) ---
// turno = "negras"; enJaque = true; sinMovimientos = true;
// comprobarEstadoRey(enJaque, sinMovimientos); mostrarTurno(turno);



