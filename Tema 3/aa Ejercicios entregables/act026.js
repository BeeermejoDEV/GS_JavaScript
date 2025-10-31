
(() => {
  'use strict';

  // =====================================================
  // 1. Funciones auxiliares de cookies
  // =====================================================
  function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    const expira = 'expires=' + fecha.toUTCString();
    document.cookie = `${nombre}=${encodeURIComponent(valor)};${expira};path=/`;
  }

  function getCookie(nombre) {
    const nombreEQ = nombre + '=';
    const partes = document.cookie.split(';');
    for (let parte of partes) {
      while (parte.charAt(0) === ' ') parte = parte.substring(1);
      if (parte.indexOf(nombreEQ) === 0) {
        return decodeURIComponent(parte.substring(nombreEQ.length, parte.length));
      }
    }
    return '';
  }

  function borrarCookies() {
    const cookies = document.cookie.split(';');
    for (let c of cookies) {
      const eqPos = c.indexOf('=');
      const nombre = eqPos > -1 ? c.substr(0, eqPos) : c;
      document.cookie = `${nombre}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }

  // =====================================================
  // 2. Configuración inicial (tema, idioma, piezas)
  // =====================================================
  const temaGuardado = getCookie('temaTablero') || 'claro';
  const idiomaGuardado = localStorage.getItem('idioma') || 'es';
  const ultimaPieza = getCookie('ultimaPieza') || 'Caballo';

  // =====================================================
  // 3. Aplicar tema visual (accesibilidad)
  // =====================================================
  function aplicarTema(tema) {
    document.body.style.backgroundColor = tema === 'oscuro' ? '#222' : '#f8f8f8';
    document.body.style.color = tema === 'oscuro' ? '#f8f8f8' : '#222';
  }
  aplicarTema(temaGuardado);

  // =====================================================
  // 4. Mostrar mensaje de bienvenida y última visita
  // =====================================================
  const ultimaVisita = getCookie('ultimaVisita');
  if (ultimaVisita) {
    alert(`Última visita registrada: ${ultimaVisita}`);
  } else {
    alert('Bienvenido/a. Esta es tu primera visita.');
  }

  const fechaActual = new Date().toLocaleString();
  setCookie('ultimaVisita', fechaActual, 7);

  // =====================================================
  // 5. Permitir cambio de tema e idioma
  // =====================================================
  const cambiarTema = confirm('¿Deseas cambiar el tema del tablero? (Aceptar = cambiar, Cancelar = mantener)');
  if (cambiarTema) {
    const nuevoTema = temaGuardado === 'oscuro' ? 'claro' : 'oscuro';
    setCookie('temaTablero', nuevoTema, 7);
    aplicarTema(nuevoTema);
    alert(`Tema cambiado a ${nuevoTema}.`);
  }

  let idioma = idiomaGuardado;
  const cambiarIdioma = confirm('¿Deseas cambiar el idioma de la interfaz?');
  if (cambiarIdioma) {
    idioma = idiomaGuardado === 'es' ? 'en' : 'es';
    localStorage.setItem('idioma', idioma);
  }

  // =====================================================
  // 6. Guardar última pieza movida
  // =====================================================
  const nuevaPieza = prompt('Introduce la última pieza movida:', ultimaPieza) || ultimaPieza;
  setCookie('ultimaPieza', nuevaPieza, 7);

  // =====================================================
  // 7. Guardar preferencias combinadas (cookies + localStorage)
  // =====================================================
  const preferencias = {
    tema: getCookie('temaTablero'),
    idioma: idioma,
    ultimaPieza: getCookie('ultimaPieza'),
    ultimaVisita: getCookie('ultimaVisita')
  };
  localStorage.setItem('preferenciasGlobales', JSON.stringify(preferencias));
  console.log('Preferencias guardadas:', preferencias);

  // =====================================================
  // 8. Crear botón para restablecer preferencias
  // =====================================================
  const botonReset = document.createElement('button');
  botonReset.textContent = idioma === 'es' ? 'Restablecer preferencias' : 'Reset preferences';
  botonReset.style.marginTop = '20px';
  botonReset.style.padding = '10px 20px';
  botonReset.style.cursor = 'pointer';
  document.body.appendChild(botonReset);

  botonReset.addEventListener('click', () => {
    if (confirm(idioma === 'es' ? '¿Seguro que deseas borrar tus preferencias?' : 'Are you sure you want to reset preferences?')) {
      borrarCookies();
      localStorage.clear();
      alert(idioma === 'es' ? 'Preferencias restablecidas.' : 'Preferences reset.');
      location.reload();
    }
  });

  // =====================================================
  // 9. Mensaje final
  // =====================================================
  const mensaje = idioma === 'es'
    ? `Tema: ${preferencias.tema}\nIdioma: ${idioma}\nÚltima pieza: ${preferencias.ultimaPieza}`
    : `Theme: ${preferencias.tema}\nLanguage: ${idioma}\nLast piece: ${preferencias.ultimaPieza}`;

  alert(mensaje);
})();