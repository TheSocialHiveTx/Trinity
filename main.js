document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuOpenIcon.classList.toggle('hidden');
            menuCloseIcon.classList.toggle('hidden');
        });
    }

    // Lightbox Logic
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (lightboxModal && lightboxImg && lightboxClose) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightboxModal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Lock scroll
                }
            });
        });

        const closeLightbox = () => {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = ''; // Unlock scroll
        };

        lightboxClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeLightbox();
        });

        lightboxModal.addEventListener('click', () => {
            closeLightbox();
        });
    }

    // FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');

            // Toggle current
            const isOpen = !content.classList.contains('hidden');

            // Close all first (optional, for single-open behavior)
            // document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
            // document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-45'));

            if (isOpen) {
                content.classList.add('hidden');
                icon.classList.remove('rotate-45');
            } else {
                content.classList.remove('hidden');
                icon.classList.add('rotate-45');
            }
        });
    });

    // Gallery Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    // galleryItems is already defined above in lightbox logic

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update button styles
            filterButtons.forEach(b => {
                b.classList.remove('bg-blue-600', 'border-blue-500', 'text-white');
                b.classList.add('bg-zinc-900', 'border-zinc-700', 'text-zinc-400');
            });
            btn.classList.add('bg-blue-600', 'border-blue-500', 'text-white');
            btn.classList.remove('bg-zinc-900', 'border-zinc-700', 'text-zinc-400');

            // Filter items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'All' || category === filter) {
                    item.classList.remove('hidden');
                    // Re-trigger animation
                    item.classList.remove('animate-in', 'fade-in', 'zoom-in');
                    void item.offsetWidth; // Trigger reflow
                    item.classList.add('animate-in', 'fade-in', 'zoom-in', 'duration-500');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Form Submissions (Mock)
    const buildForm = document.getElementById('build-request-form');
    if (buildForm) {
        buildForm.addEventListener('submit', (e) => {
            // If not Netlify, prevent default and redirect
            // e.preventDefault();
            // window.location.href = 'thank-you.html';
        });

        // Conditional fields in Build Form
        const deliveryRadios = document.getElementsByName('delivery');
        const shippingContainer = document.getElementById('shipping-address-container');
        if (deliveryRadios && shippingContainer) {
            deliveryRadios.forEach(radio => {
                radio.addEventListener('change', () => {
                    if (radio.value === 'Shipping') {
                        shippingContainer.classList.remove('hidden');
                    } else {
                        shippingContainer.classList.add('hidden');
                    }
                });
            });
        }

        const caseTypeSelect = document.getElementById('case-type-select');
        const otherCaseContainer = document.getElementById('other-case-container');
        if (caseTypeSelect && otherCaseContainer) {
            caseTypeSelect.addEventListener('change', () => {
                if (caseTypeSelect.value === 'Other') {
                    otherCaseContainer.classList.remove('hidden');
                } else {
                    otherCaseContainer.classList.add('hidden');
                }
            });
        }
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // e.preventDefault();
            // window.location.href = 'thank-you.html';
        });
    }

    // Scroll Revel Integration
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
});
