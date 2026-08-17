document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // 1. Theme Toggle
    // ============================================
    var themeToggle = document.getElementById('themeToggle');
    var savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.toggle('light-mode');
            var isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // ============================================
    // 2. Hamburger Menu
    // ============================================
    var hamburger = document.querySelector('.hamburger');
    var mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    var mobileNav = document.querySelector('.mobile-nav');

    function closeMobileMenu() {
        if (hamburger) hamburger.classList.remove('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
        if (mobileNav) mobileNav.classList.remove('active');
    }

    function openMobileMenu() {
        if (hamburger) hamburger.classList.add('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.add('active');
        if (mobileNav) mobileNav.classList.add('active');
    }

    if (hamburger) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            var isOpen = hamburger.classList.contains('active');
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileMenu);
    }

    var mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', closeMobileMenu);
    });

    // ============================================
    // 3. Language Switcher
    // ============================================
    var langButtons = document.querySelectorAll('.lang-switcher button');
    var currentLang = (typeof getLang === 'function') ? getLang() : 'ar';

    langButtons.forEach(function (btn) {
        var btnLang = btn.getAttribute('data-lang') || btn.textContent.trim().toLowerCase();
        if (btnLang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', function () {
            if (typeof setLang === 'function') {
                setLang(btnLang);
            }
        });
    });

    // ============================================
    // 4. Smooth Scrolling
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // 5. Portfolio Filter
    // ============================================
    var filterButtons = document.querySelectorAll('.filter-btn');
    var projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterButtons.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(function (card) {
                var category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = '';
                    requestAnimationFrame(function () {
                        card.style.opacity = '1';
                    });
                } else {
                    card.style.opacity = '0';
                    setTimeout(function () {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ============================================
    // 6. Contact Form
    // ============================================
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var message = document.getElementById('message');

            var isValid = true;

            [name, email, message].forEach(function (field) {
                if (field && !field.value.trim()) {
                    field.style.borderColor = '#ff4444';
                    isValid = false;
                } else if (field) {
                    field.style.borderColor = '';
                }
            });

            if (email && email.value) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    email.style.borderColor = '#ff4444';
                    isValid = false;
                }
            }

            if (isValid) {
                alert('شكراً على رسالتك! سيتم التواصل معك قريباً.');
                contactForm.reset();
            }
        });
    }

    // ============================================
    // 7. Active Navigation Link
    // ============================================
    function setActiveLink() {
        var currentPage = window.location.pathname.split('/').pop() || 'Index.html';
        var navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
        navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'Index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setActiveLink();

    // ============================================
    // 8. Scroll Animations
    // ============================================
    var animateElements = document.querySelectorAll('.animate-on-scroll');

    if (animateElements.length && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        animateElements.forEach(function (el) {
            observer.observe(el);
        });
    }

    // ============================================
    // 9. Scroll to Top Button
    // ============================================
    var scrollTopBtn = document.querySelector('.scroll-to-top');

    if (!scrollTopBtn) {
        scrollTopBtn = document.createElement('button');
        scrollTopBtn.className = 'scroll-to-top';
        scrollTopBtn.innerHTML = '&#8593;';
        scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollTopBtn);
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============================================
    // 10. Set Current Year
    // ============================================
    var yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ============================================
    // 11. Input Focus Styles
    // ============================================
    var formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    formInputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('focused');
        });
    });

});
