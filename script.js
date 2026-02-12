// Incepto House — Interactive Features

// Theme Management
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    function getSystemTheme() {
        return systemDark.matches ? 'dark' : 'light';
    }

    function applyTheme(resolved) {
        document.documentElement.setAttribute('data-theme', resolved);
    }

    function updateToggleUI(mode) {
        if (mode === 'system') {
            icon.textContent = '\uD83D\uDCBB';
            label.textContent = 'System';
        } else if (mode === 'dark') {
            icon.textContent = '\uD83C\uDF19';
            label.textContent = 'Dark';
        } else {
            icon.textContent = '\u2600\uFE0F';
            label.textContent = 'Light';
        }
    }

    function getMode() {
        return localStorage.getItem('theme') || 'system';
    }

    updateToggleUI(getMode());

    if (toggle) {
        toggle.addEventListener('click', () => {
            const mode = getMode();
            var next;
            if (mode === 'light') next = 'dark';
            else if (mode === 'dark') next = 'system';
            else next = 'light';

            if (next === 'system') {
                localStorage.removeItem('theme');
                applyTheme(getSystemTheme());
            } else {
                localStorage.setItem('theme', next);
                applyTheme(next);
            }
            updateToggleUI(next);
        });
    }

    systemDark.addEventListener('change', () => {
        if (!localStorage.getItem('theme')) {
            applyTheme(getSystemTheme());
        }
    });
});

// Lightbox & Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    // Lightbox for photo widgets
    const photoWidgets = document.querySelectorAll('.widget--photo[data-lightbox]');
    photoWidgets.forEach(widget => {
        widget.addEventListener('click', () => {
            const img = widget.querySelector('img');
            if (!img) return;

            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;

            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';

            if (!document.getElementById('lightbox-styles')) {
                const style = document.createElement('style');
                style.id = 'lightbox-styles';
                style.textContent = `
                    .lightbox {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.9);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                        animation: fadeIn 0.3s ease;
                    }
                    .lightbox-content {
                        position: relative;
                        max-width: 90%;
                        max-height: 90%;
                    }
                    .lightbox-content img {
                        max-width: 100%;
                        max-height: 90vh;
                        border-radius: 8px;
                    }
                    .lightbox-close {
                        position: absolute;
                        top: -40px;
                        right: 0;
                        color: white;
                        font-size: 40px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: opacity 0.2s;
                    }
                    .lightbox-close:hover {
                        opacity: 0.7;
                    }
                `;
                document.head.appendChild(style);
            }

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    lightbox.remove();
                    document.body.style.overflow = '';
                }
            });

            document.addEventListener('keydown', function closeOnEscape(e) {
                if (e.key === 'Escape') {
                    lightbox.remove();
                    document.body.style.overflow = '';
                    document.removeEventListener('keydown', closeOnEscape);
                }
            });
        });
    });

    // Intersection observer for widget fade-in (widgets beyond the first 10)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('widget--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '200px 0px 200px 0px' });

    const widgets = document.querySelectorAll('.widget');
    widgets.forEach((widget, i) => {
        if (i >= 10) {
            widget.classList.add('widget--deferred');
            observer.observe(widget);
        }
    });

    // External link safety
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Console Easter Egg
    console.log('%c\uD83C\uDFE0 Welcome to Incepto House!', 'font-size: 20px; font-weight: bold; color: #0066ff;');
    console.log('%cHeart-centered intellectual community in Menlo Park, CA', 'font-size: 14px; color: #565656;');
});

// Copy email functionality
const contactEmail = document.querySelector('.sidebar-contact a');
if (contactEmail) {
    contactEmail.addEventListener('click', (e) => {
        const email = contactEmail.textContent;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                const tooltip = document.createElement('span');
                tooltip.textContent = 'Email copied!';
                tooltip.style.cssText = `
                    position: absolute;
                    background: #0066ff;
                    color: white;
                    padding: 6px 10px;
                    border-radius: 6px;
                    font-size: 11px;
                    margin-left: 8px;
                    animation: fadeIn 0.3s ease;
                `;
                contactEmail.parentNode.style.position = 'relative';
                contactEmail.parentNode.appendChild(tooltip);
                setTimeout(() => {
                    tooltip.style.opacity = '0';
                    tooltip.style.transition = 'opacity 0.3s';
                    setTimeout(() => tooltip.remove(), 300);
                }, 2000);
            });
        }
    });
}

// Reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.widget').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}
