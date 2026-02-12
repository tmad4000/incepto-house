// Incepto House Website - Interactive Features

// Theme Management
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');

    function updateToggleUI(theme) {
        if (theme === 'dark') {
            icon.textContent = '🌙';
            label.textContent = 'Dark';
        } else {
            icon.textContent = '☀️';
            label.textContent = 'Light';
        }
    }

    // Set initial UI state
    updateToggleUI(document.documentElement.getAttribute('data-theme'));

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateToggleUI(next);
        });
    }

    // Listen for system theme changes (only if user hasn't manually chosen)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const theme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            updateToggleUI(theme);
        }
    });
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Image Gallery Lightbox (Simple Version)
    const galleryImages = document.querySelectorAll('.photo-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            // Create lightbox overlay
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

            // Add lightbox styles if not already present
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

            // Close lightbox on click
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    lightbox.remove();
                    document.body.style.overflow = '';
                }
            });

            // Close on escape key
            document.addEventListener('keydown', function closeOnEscape(e) {
                if (e.key === 'Escape') {
                    lightbox.remove();
                    document.body.style.overflow = '';
                    document.removeEventListener('keydown', closeOnEscape);
                }
            });
        });
    });

    // Add loading animation for cards
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

    // Observe all cards
    const cards = document.querySelectorAll('.startup-card, .playlist-card, .link-card, .community-card, .fun-card, .research-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add external link indicator
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Console Easter Egg
    console.log('%c🏠 Welcome to Incepto House!', 'font-size: 20px; font-weight: bold; color: #0066ff;');
    console.log('%cHeart-centered intellectual community in Menlo Park, CA', 'font-size: 14px; color: #565656;');
    console.log('%cBuilt with ❤️ using Claude Code', 'font-size: 12px; color: #8e8e8e;');

    // Performance logging (optional, can be removed in production)
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });

    // Add hover effect sound preparation (optional)
    // This is just a placeholder - you can add actual sound effects if desired
    const addHoverSounds = false; // Set to true if you want to add sounds
    if (addHoverSounds) {
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Add subtle hover sound here if desired
                // const audio = new Audio('assets/sounds/hover.mp3');
                // audio.volume = 0.1;
                // audio.play().catch(() => {});
            });
        });
    }
});

// Add parallax effect to header (optional)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        header.style.transform = `translateY(${rate}px)`;
    }
});

// Add copy email functionality
const contactEmail = document.querySelector('.contact a');
if (contactEmail) {
    contactEmail.addEventListener('click', (e) => {
        const email = contactEmail.textContent;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Show tooltip
                const tooltip = document.createElement('span');
                tooltip.textContent = 'Email copied!';
                tooltip.style.cssText = `
                    position: absolute;
                    background: #0066ff;
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    margin-left: 10px;
                    animation: fadeIn 0.3s ease;
                `;
                contactEmail.parentNode.appendChild(tooltip);

                setTimeout(() => {
                    tooltip.style.opacity = '0';
                    setTimeout(() => tooltip.remove(), 300);
                }, 2000);
            });
        }
    });
}

// Detect if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    // Disable animations
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// Add service worker for PWA (optional future enhancement)
if ('serviceWorker' in navigator) {
    // Uncomment when you want to add PWA functionality
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js');
    // });
}
