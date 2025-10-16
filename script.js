// Mobile Navigation Toggle
const mobileNavToggle = document.getElementById('mobileNavToggle');
const mainNav = document.getElementById('mainNav');

if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
    });

    // Close mobile nav when clicking on a nav link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
        }
    });

    // Close mobile nav on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            mobileNavToggle.focus();
        }
    });
}

const io = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        const el = entry.target;
        const visible = entry.isIntersecting;

        if (el.dataset.ioClass) el.classList.toggle(el.dataset.ioClass, visible);

        if (el.dataset.ioPause === "animation") el.classList.toggle("paused", !visible);

    });
});

document.querySelectorAll("[data-io]").forEach(el => io.observe(el));

