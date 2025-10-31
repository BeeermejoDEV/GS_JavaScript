
(() => {
  'use strict';

  // =========================
  // Constantes (no mutables)
  // =========================
  const TITLE_TEXT = 'Torneo de Ajedrez Online';
  const WELCOME_MSG = 'Bienvenido/a. Preparando tu “Torneo de Ajedrez Online”…';
  const UNKNOWN_URL_FALLBACK = '(URL no disponible)';
  const DEFAULT_LANG = 'en';

  // =======================================================
  // Utilidad: obtener código de idioma de forma segura
  // =======================================================
  function getBaseLanguage() {
    const raw = (typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage)) || DEFAULT_LANG;
    return String(raw).toLowerCase().split('-')[0];
  }

  // ======================================================================================
  // Fondo según idioma (sin depender de imágenes externas, usando gradientes tipo bandera)
  // ======================================================================================
  function setBackgroundForLang(lang) {
    const gradients = {
      es: 'linear-gradient(180deg, #AA151B 0 33%, #F1BF00 33% 66%, #AA151B 66% 100%)', // España
      en: 'linear-gradient(180deg, #00247D 0 33%, #FFFFFF 33% 66%, #CF142B 66% 100%)', // Inglés
      fr: 'linear-gradient(180deg, #0055A4 0 33%, #FFFFFF 33% 66%, #EF4135 66% 100%)', // Francia
      pt: 'linear-gradient(180deg, #006847 0 50%, #DA291C 50% 100%)', // Portugal
      it: 'linear-gradient(180deg, #009246 0 33%, #FFFFFF 33% 66%, #CE2B37 66% 100%)', // Italia
      de: 'linear-gradient(180deg, #000000 0 33%, #DD0000 33% 66%, #FFCE00 66% 100%)', // Alemania
      default: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)'
    };

    if (typeof document !== 'undefined' && document.body) {
      const bg = gradients[lang] || gradients.default;
      document.body.style.background = bg;
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.minHeight = '100vh';
    }
  }

  // =========================================
  // Paso a paso: cada línea = superpoder
  // =========================================

  // 1) Mensaje de bienvenida con alert()
  if (typeof window !== 'undefined' && typeof alert === 'function') {
    alert(WELCOME_MSG);
  }

  // 2) Detección del idioma del usuario
  const baseLang = getBaseLanguage();
  console.log(`Idioma detectado: ${baseLang}`);

  // 3) Mostrar la URL actual en consola
  const currentUrl = (typeof location !== 'undefined' && location.href) ? location.href : UNKNOWN_URL_FALLBACK;
  console.log(`URL actual: ${currentUrl}`);

  // 4) Cambiar el título del documento
  if (typeof document !== 'undefined') {
    document.title = TITLE_TEXT;
    console.log(`Título actualizado a: "${document.title}"`);
  }

  // 5) Mostrar tamaño de la ventana
  if (typeof window !== 'undefined') {
    const logSize = () => {
      console.log(`Tamaño ventana: ${window.innerWidth}×${window.innerHeight}px`);
    };
    logSize();
    window.addEventListener('resize', logSize);
  }

  // 6) Cambiar el fondo según idioma
  setBackgroundForLang(baseLang);
  console.log('Fondo actualizado en función del idioma.');

  console.log('Script cargado correctamente. Recuerda sustituir “Apellido” en el nombre del archivo por tu apellido.');
})();