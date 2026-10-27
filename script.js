// ==========================================
// FUNCIONES INTERACTIVAS Y NAVEGACIÓN
// ==========================================

// Función para la acción del botón de contacto (CTA)
function contactar() {
    const mensaje = '¡Gracias por comunicarte! Acércate a la sala del Centro de Estudiantes o habla con cualquier integrante durante el recreo.';
    
    // Crear o reutilizar banner de notificación flotante accesible
    let toast = document.getElementById('toast-notificacion');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notificacion';
        toast.className = 'toast-banner';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);
    }
    
    toast.textContent = mensaje;
    toast.classList.add('visible');

    setTimeout(() => {
        toast.classList.remove('visible');
    }, 4500);
}

// ==========================================
// NAVEGACIÓN Y RESALTADO DE SECCIÓN ACTIVA
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Función para actualizar el estado activo en la barra de navegación al hacer scroll
    function updateActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            // Offset para detectar la sección visible en pantalla mobile
            if (window.scrollY >= sectionTop - 140) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Escuchar el desplazamiento (scroll) para actualizar la navegación activa
    window.addEventListener('scroll', updateActiveLink);

    // Inicializar el estado al cargar la página
    updateActiveLink();
});

// ==========================================
// MENSAJE DE CONFIRMACIÓN DE CARGA EN CONSOLA
// ==========================================
window.addEventListener('load', function() {
    console.log('Centro de Estudiantes EES Nº 63 - Sitio web cargado y listo.');
});
// Función para procesar el envío del formulario de participación
function enviarFormulario(event) {
    event.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById('nombre').value;
    
    // Generar mensaje personalizado de confirmación
    const mensaje = `¡Gracias ${nombre}! Recibimos tu propuesta. Nos contactaremos con vos durante el recreo.`;
    
    // Reutilizar o crear el toast de notificación
    let toast = document.getElementById('toast-notificacion');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notificacion';
        toast.className = 'toast-banner';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);
    }
    
    toast.textContent = mensaje;
    toast.classList.add('visible');

    // Limpiar los campos del formulario
    document.getElementById('form-participar').reset();

    setTimeout(() => {
        toast.classList.remove('visible');
    }, 5000);
}