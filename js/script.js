// Navegación móvil
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú móvil al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Ajuste para el navbar fijo
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Cambiar color del navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--bg-color)';
        navbar.style.backdropFilter = 'none';
    }
});

// Animación de aparición de elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.service-card, .stat, .about-text, .contact-info, .product-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Manejo del formulario de contacto
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular envío del formulario
    const submitBtn = this.querySelector('button');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simular procesamiento (en una aplicación real, aquí harías la petición al servidor)
    setTimeout(() => {
        submitBtn.textContent = 'Mensaje Enviado ✓';
        submitBtn.style.backgroundColor = '#10b981';
        
        // Resetear el formulario
        this.reset();
        
        // Restaurar el botón después de 3 segundos
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
        }, 3000);
    }, 2000);
});

// Efecto de typing para el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Iniciar efecto de typing cuando la página carga
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 100);
});

// Contador animado para las estadísticas
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    updateCounter();
}

// Observar las estadísticas para iniciar la animación
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumber = entry.target.querySelector('h4');
            const targetNumber = parseInt(statNumber.textContent);
            animateCounter(statNumber, targetNumber);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Efecto parallax sutil para el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Animación especial para los badges de productos
function animateProductBadges() {
    const badges = document.querySelectorAll('.product-badge');
    badges.forEach((badge, index) => {
        setTimeout(() => {
            badge.style.animation = 'pulse 0.6s ease';
        }, index * 200);
    });
}

// Observar la sección de productos para animar los badges
const productObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProductBadges();
        }
    });
}, { threshold: 0.3 });

const productSection = document.querySelector('.products-highlight');
if (productSection) {
    productObserver.observe(productSection);
}

// Lazy loading para imágenes (cuando se agreguen)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Añadir estilos dinámicos para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        box-shadow: var(--shadow);
        padding: 1rem;
    }
    
    .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .nav-toggle.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Demo Functions
function openFullDemo() {
    // Abrir el mapa completo en una nueva ventana
    const demoWindow = window.open('mapa_universo_web.html', '_blank', 'width=1400,height=900,scrollbars=yes,resizable=yes');
    
    // Enfoque en la nueva ventana
    if (demoWindow) {
        demoWindow.focus();
    } else {
        // Fallback si el popup fue bloqueado
        alert('🚀 Para ver el demo completo, permita ventanas emergentes y haga click nuevamente.');
    }
}

function downloadDemo() {
    // Crear un elemento de descarga temporal
    const link = document.createElement('a');
    link.href = 'mapa_universo_web.html';
    link.download = 'BZK_Omnimind_Universe_Map_Demo.html';
    
    // Agregar al DOM temporalmente y activar la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mensaje de confirmación
    setTimeout(() => {
        alert('💾 Demo descargado! Abra el archivo HTML para experimentar con el mapa interactivo del universo.');
    }, 500);
}

// Función para mejorar la carga del iframe
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('.universe-iframe');
    if (iframe) {
        // Añadir un indicador de carga
        const loadingDiv = document.createElement('div');
        loadingDiv.innerHTML = `
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #00ffff;
                font-family: 'Orbitron', monospace;
                text-align: center;
                z-index: 10;
            ">
                <div style="font-size: 2rem; margin-bottom: 1rem;">🌌</div>
                <div>Cargando Universo...</div>
                <div style="font-size: 0.8rem; opacity: 0.7; margin-top: 0.5rem;">Inicializando demo BZK Omnimind</div>
            </div>
        `;
        loadingDiv.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 5;
        `;
        
        // Insertar el indicador de carga
        iframe.parentNode.style.position = 'relative';
        iframe.parentNode.insertBefore(loadingDiv, iframe);
        
        // Remover el indicador cuando el iframe cargue
        iframe.onload = function() {
            setTimeout(() => {
                if (loadingDiv.parentNode) {
                    loadingDiv.parentNode.removeChild(loadingDiv);
                }
            }, 1000);
        };
        
        // Remover el indicador después de un tiempo máximo (fallback)
        setTimeout(() => {
            if (loadingDiv.parentNode) {
                loadingDiv.parentNode.removeChild(loadingDiv);
            }
        }, 5000);
    }
});