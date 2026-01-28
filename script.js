function nav(id, el) {
    // ocultar todas las páginas
    document.querySelectorAll('.page').forEach(p => p.classList.remove('visible'));

    // mostrar la página objetivo
    const target = document.getElementById(id);
    if (target) target.classList.add('visible');

    // desactivar todas las entradas de navegación
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    // marcar la entrada activa: usa el elemento pasado, el evento actual, o busca un fallback por el atributo onclick
    if (el && el.classList) {
        el.classList.add('active');
    } else {
        // si existe `event` (algunos navegadores cuando se invoca desde onclick), intenta usarlo
        try {
            if (typeof event !== 'undefined' && event && event.target) {
                const t = event.target.closest && event.target.closest('.nav-item');
                if (t) {
                    t.classList.add('active');
                }
            }
        } catch (e) {
            // ignore
        }

        // Si no se pudo determinar por el evento, buscar un nav-item cuyo atributo onclick invoque nav con el id
        if (!document.querySelector('.nav-item.active')) {
            let found = null;
            document.querySelectorAll('.nav-item').forEach(n => {
                const attr = n.getAttribute('onclick');
                if (!found && attr && attr.replace(/\s+/g, '') === `nav('${id}')`) {
                    found = n;
                }
            });
            if (found) found.classList.add('active');
        }
    }

    // volver al inicio del contenido
    const main = document.querySelector('main');
    if (main) main.scrollTop = 0;
}

// Inicializar página por defecto
document.addEventListener('DOMContentLoaded', () => {
    nav('web-xss');
});
