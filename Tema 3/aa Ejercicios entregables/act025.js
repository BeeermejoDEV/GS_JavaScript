
(() => {
  'use strict';

  // =====================================================
  // 1. Constantes
  // =====================================================
  const NOMBRE_KEY = 'nombreJugador';
  const PARTIDAS_KEY = 'partidasJugadas';
  const PERFIL_KEY = 'perfilJugador';
  const TURNO_KEY = 'turnoActual'; // Guardado en sessionStorage (solo pestaña actual)

  // =====================================================
  // 2. Funciones auxiliares
  // =====================================================

  // Obtener o crear nombre del jugador
  function obtenerNombreJugador() {
    let nombre = localStorage.getItem(NOMBRE_KEY);
    if (!nombre) {
      nombre = prompt('Introduce tu nombre de jugador:') || 'Jugador Anónimo';
      localStorage.setItem(NOMBRE_KEY, nombre);
      console.log(`Nuevo jugador guardado: ${nombre}`);
    }
    return nombre;
  }

  // Actualizar contador de partidas
  function actualizarContadorPartidas() {
    let contador = parseInt(localStorage.getItem(PARTIDAS_KEY)) || 0;
    contador++;
    localStorage.setItem(PARTIDAS_KEY, contador);
    return contador;
  }

  // Pedir color de piezas
  function seleccionarColor() {
    let color = prompt('Elige el color de tus piezas (blancas o negras):', 'blancas');
    color = (color || '').toLowerCase().trim();
    if (color !== 'blancas' && color !== 'negras') {
      color = 'blancas';
      console.log('Color no válido. Se ha asignado "blancas" por defecto.');
    }
    return color;
  }

  // Crear perfil avanzado
  function crearPerfilAvanzado(nombre, color) {
    const avatar = prompt('Introduce la URL de tu avatar (opcional):', '') || 'https://via.placeholder.com/80';
    const estadisticas = {
      victorias: 0,
      derrotas: 0,
      empates: 0
    };
    const perfil = {
      nombre,
      color,
      avatar,
      estadisticas,
      ultimaSesion: new Date().toLocaleString()
    };
    localStorage.setItem(PERFIL_KEY, JSON.stringify(perfil));
    return perfil;
  }

  // Mostrar bienvenida
  function mostrarBienvenida(nombre, perfil) {
    alert(`Bienvenido de nuevo, ${nombre}.
Color: ${perfil.color}
Último inicio: ${perfil.ultimaSesion}`);
  }

  // Reiniciar perfil
  function reiniciarPerfil() {
    const confirmar = confirm('¿Seguro que deseas reiniciar tu perfil? Se borrarán todos los datos.');
    if (confirmar) {
      localStorage.clear();
      sessionStorage.clear();
      alert('Perfil reiniciado correctamente.');
      location.reload();
    }
  }

  // =====================================================
  // 3. Flujo principal
  // =====================================================

  // Detectar si hay nombre guardado
  const nombreJugador = obtenerNombreJugador();

  // Si ya existe perfil, lo mostramos. Si no, lo creamos.
  let perfilGuardado = localStorage.getItem(PERFIL_KEY);
  let perfil;
  if (perfilGuardado) {
    perfil = JSON.parse(perfilGuardado);
    mostrarBienvenida(nombreJugador, perfil);
  } else {
    const color = seleccionarColor();
    perfil = crearPerfilAvanzado(nombreJugador, color);
    alert(`Perfil creado para ${nombreJugador} con piezas ${perfil.color}.`);
  }

  // Actualizar contador de partidas
  const partidasJugadas = actualizarContadorPartidas();
  console.log(`Partidas jugadas: ${partidasJugadas}`);

  // Guardar turno actual en sessionStorage (solo durante la pestaña abierta)
  let turno = sessionStorage.getItem(TURNO_KEY) || 'blancas';
  console.log(`Turno actual: ${turno}`);

  // Cambiar turno (simulado)
  const cambiarTurno = confirm('¿Deseas cambiar el turno actual?');
  if (cambiarTurno) {
    turno = turno === 'blancas' ? 'negras' : 'blancas';
    sessionStorage.setItem(TURNO_KEY, turno);
    console.log(`Turno cambiado a: ${turno}`);
  }

  // Actualizar fecha de última sesión en perfil
  perfil.ultimaSesion = new Date().toLocaleString();
  localStorage.setItem(PERFIL_KEY, JSON.stringify(perfil));

  // =====================================================
  // 4. Opción para reiniciar perfil
  // =====================================================
  const reiniciar = confirm('¿Deseas reiniciar tu perfil por completo?');
  if (reiniciar) {
    reiniciarPerfil();
  }

  console.log('Script finalizado correctamente.');
})();