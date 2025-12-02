function nav(id) {
    // 1. Ocultar todas las páginas
    document.querySelectorAll('.page').forEach(p => p.classList.remove('visible'));
    
    // 2. Mostrar la página seleccionada
    const target = document.getElementById(id);
    if(target) target.classList.add('visible');
    
    // 3. Actualizar el menú lateral (poner en azul el activo)
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    // Buscar el botón que fue clickeado (usando event)
    // Nota: 'event' es una variable global en callbacks onclick en HTML
    if (typeof event !== 'undefined' && event.target) {
        event.target.classList.add('active');
    }

    // 4. Hacer scroll hacia arriba
    document.querySelector('main').scrollTop = 0;
}

// Cargar la primera sección por defecto al abrir la web
// Puedes cambiar 'web-xss' por 'web-sqli' si quieres que esa sea la portada
document.addEventListener('DOMContentLoaded', () => {
    nav('web-xss');
});