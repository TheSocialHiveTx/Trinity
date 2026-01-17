document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                menuOpenIcon.classList.remove('hidden');
                menuCloseIcon.classList.add('hidden');
            } else {
                mobileMenu.classList.remove('hidden');
                menuOpenIcon.classList.add('hidden');
                menuCloseIcon.classList.remove('hidden');
            }
        });
    }

    // FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');
            const isOpen = !content.classList.contains('hidden');

            // Close all other FAQs
            document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
            document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-45'));

            if (!isOpen) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-45');
            }
        });
    });

    // Gallery Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button state
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'border-blue-500', 'text-white');
                btn.classList.add('bg-zinc-900', 'border-zinc-700', 'text-zinc-400');
            });
            button.classList.add('bg-blue-600', 'border-blue-500', 'text-white');
            button.classList.remove('bg-zinc-900', 'border-zinc-700', 'text-zinc-400');

            // Filter items
            galleryItems.forEach(item => {
                if (filter === 'All' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Build Request Form Mock
    const buildForm = document.getElementById('build-request-form');
    if (buildForm) {
        buildForm.addEventListener('submit', (e) => {
            // For GitHub Pages, we can't do real form processing without a backend or service
            // This is just a mock for the SPA-like behavior
            window.location.href = 'thank-you.html';
        });
    }

    // Contact Form Mock
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            window.location.href = 'thank-you.html';
        });
    }

    // Delivery Method Toggle in Build Form
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
    const shippingAddress = document.getElementById('shipping-address-container');
    if (deliveryOptions.length > 0 && shippingAddress) {
        deliveryOptions.forEach(option => {
            option.addEventListener('change', (e) => {
                if (e.target.value === 'Shipping') {
                    shippingAddress.classList.remove('hidden');
                } else {
                    shippingAddress.classList.add('hidden');
                }
            });
        });
    }

    // Case Type Toggle in Build Form
    const caseTypeSelect = document.getElementById('case-type-select');
    const otherCaseDetails = document.getElementById('other-case-container');
    if (caseTypeSelect && otherCaseDetails) {
        caseTypeSelect.addEventListener('change', (e) => {
            if (e.target.value === 'Other') {
                otherCaseDetails.classList.remove('hidden');
            } else {
                otherCaseDetails.classList.add('hidden');
            }
        });
    }
});
