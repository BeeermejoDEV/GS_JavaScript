// --- Configuración inicial ---
// turno puede ser "blancas" o "negras"
// enJaque ¿El rey está en jaque?
// sinMovimientos ¿El rey no tiene movimientos legales?

let turno = "blancas";       // puedes cambiarlo a "negras" para probar
let enJaque = true;          // true o false
let sinMovimientos = false;  // true o false

/**
 * Comprueba el estado del rey, y lo muestra por consola
 */
function comprobarEstadoRey(enJaque, sinMovimientos) {
  if (enJaque) {
    console.log("El rey está en jaque.");

    if (sinMovimientos) {
      console.log("Y además no puede moverse: ¡jaque mate!");
      // Ternario dentro del log para mostrar el ganador
      console.log(turno === "blancas" ? "Ganaron las negras" : "Ganaron las blancas");
    } else {
      console.log("Pero aún puede moverse. No es mate.");
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
