// Add any custom javascript here.

/**
 * Aplica target="_blank" y rel="noopener noreferrer" a todos los enlaces externos de la página.
 *
 * Se considera enlace externo cualquier <a href> que:
 *  - Comience por http/https (URL absoluta), Y
 *  - No apunte a eustat.eus
 *
 * Esto cubre los campos de metadatos del indicador (dato_global, indicador_meta_enlace, etc.)
 * que se almacenan como HTML crudo en los YAML y Jekyll no puede modificar en tiempo de build,
 * así como cualquier otro enlace externo que pueda añadirse en el futuro.
 *
 * Si el enlace ya tiene target="_blank", setAttribute lo sobreescribe sin duplicar.
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href && /^https?:\/\//i.test(href) && href.indexOf('eustat.eus') === -1) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // La columna "Progress" se usa internamente en el motor de goldilocks para
  // calcular el progreso, pero no debe mostrarse en el footer del indicador.
  // Open SDG la detecta como time series attribute y muestra su valor numérico
  // (ej: 1.01) bajo la leyenda de unidades. Lo ocultamos aquí.
  //
  // No podemos hacerlo en DOMContentLoaded porque Open SDG inyecta estos
  // elementos vía JS después de cargar los datos. Usamos MutationObserver
  // para detectar cuándo el elemento se hace visible y ocultarlo de nuevo.
  var indicatorRoot = document.getElementById('indicator');
  if (indicatorRoot) {
    var hideProgressFooter = function () {
      ['dt', 'dd'].forEach(function (tag) {
        var el = document.querySelector(tag + '[data-ts-attribute="Progress"]');
        if (el) {
          el.style.setProperty('display', 'none', 'important');
        }
      });
    };
    var observer = new MutationObserver(hideProgressFooter);
    observer.observe(indicatorRoot, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });
  }
});
