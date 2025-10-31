
(() => {
  'use strict';

  // =====================================================
  // 1. Recuperar datos previos si existen en localStorage
  // =====================================================
  const prevNombre = localStorage.getItem('nombreJugador');
  const prevDificultad = localStorage.getItem('dificultad');

  // =====================================================
  // 2. Pedir el nombre del jugador con prompt()
  // =====================================================
  let nombreJugador = prompt('Introduce tu nombre de jugador:', prevNombre || '');

  // Validar que el nombre no esté vacío o nulo
  if (!nombreJugador) {
    nombreJugador = 'Jugador Anónimo';
    console.log('No se introdujo nombre. Se ha asignado "Jugador Anónimo" por defecto.');
  }

  // =====================================================
  // 3. Preguntar si quiere comenzar la partida con confirm()
  // =====================================================
  const comenzar = confirm(`¿Deseas comenzar la partida, ${nombreJugador}?`);

  // =====================================================
  // 4. Mostrar mensaje según la respuesta del jugador
  // =====================================================
  if (comenzar) {
    alert(`Comienza la partida, ${nombreJugador} con las blancas.`);
  } else {
    alert(`El jugador ${nombreJugador} ha pospuesto la partida.`);
  }

  // =====================================================
  // 5. Selección de dificultad
  // =====================================================
  let dificultad = prompt('Elige nivel: fácil, medio o difícil', prevDificultad || 'medio');
  dificultad = (dificultad || '').toLowerCase().trim() || 'medio';

  // Normalizar entrada del usuario
  const nivelesValidos = ['fácil', 'facil', 'medio', 'difícil', 'dificil'];
  if (!nivelesValidos.includes(dificultad)) {
    console.log(`Nivel no reconocido ("${dificultad}"). Se asigna dificultad "medio" por defecto.`);
    dificultad = 'medio';
  }

  // =====================================================
  // 6. Guardar los datos en localStorage
  // =====================================================
  localStorage.setItem('nombreJugador', nombreJugador);
  localStorage.setItem('dificultad', dificultad);

  // =====================================================
  // 7. Feedback en consola
  // =====================================================
  console.log(`Jugador: ${nombreJugador}`);
  console.log(`Dificultad seleccionada: ${dificultad}`);
  console.log('Datos guardados correctamente en localStorage.');
})();