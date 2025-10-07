function puedeMoverRey(enJaque, piezaDestino, colorDestino, puedeEnrocar) {
  // Regla 1: si el rey está en jaque, NO se mueve (simplificación del enunciado/ejemplos)
  if (enJaque) return false;

  // Regla 2: casilla libre → puede moverse
  if (piezaDestino == null) return true;

  // Regla 3: pieza enemiga (negras) → puede capturar
  if (colorDestino === "negras") return true;

  // Regla 4: casilla ocupada por pieza propia (blancas)
  // Solo permitimos si se puede enrocar y es una torre propia
  if (colorDestino === "blancas" && puedeEnrocar && piezaDestino === "♖") {
    return true;
  }

  // En cualquier otro caso, no puede moverse
  return false;
}

console.log(puedeMoverRey(false, null, null, false));        // true
console.log(puedeMoverRey(true, "♖", "blancas", false));      // false
console.log(puedeMoverRey(false, "♖", "blancas", true));      // true
console.log(puedeMoverRey(false, "♙", "negras", false));      // true
console.log(puedeMoverRey(false, "♙", "blancas", false));     // false
console.log(puedeMoverRey(false, "♘", "negras", false));      // true
console.log(puedeMoverRey(false, "♘", "blancas", false));     // false     
console.log(puedeMoverRey(false, "♕", "negras", false));      // true