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

document.addEventListener('DOMContentLoaded', () => {
    const singleOpen = true; 
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    function setExpanded(btn, content, expanded) {
        btn.setAttribute('aria-expanded', String(expanded));
        if (expanded) {
        content.hidden = false;
        const h = content.scrollHeight;
        content.style.height = '0px';
        content.dataset.animating = '1';
        requestAnimationFrame(() => {
            content.style.height = h + 'px';
            content.style.opacity = '1';
        });
        content.addEventListener('transitionend', function end() {
            content.style.height = '';
            content.removeAttribute('data-animating');
            content.removeEventListener('transitionend', end);
        });
        } else {
        const h = content.offsetHeight;
        content.style.height = h + 'px';
        content.dataset.animating = '1';
        requestAnimationFrame(() => {
            content.style.height = '0px';
            content.style.opacity = '0';
        });
        content.addEventListener('transitionend', function end() {
            content.hidden = true;
            content.style.height = '';
            content.removeAttribute('data-animating');
            content.removeEventListener('transitionend', end);
        });
        }
    }

    items.forEach((item) => {
        const btn = item.querySelector('.faq-toggle');
        const content = item.querySelector('.faq-a');
        if (!btn || !content) return;

        btn.addEventListener('click', () => {
        const willOpen = btn.getAttribute('aria-expanded') !== 'true';

        if (singleOpen && willOpen) {
            document.querySelectorAll('.faq-toggle[aria-expanded="true"]').forEach((openBtn) => {
            if (openBtn === btn) return;
            const cId = openBtn.getAttribute('aria-controls');
            const c = cId ? document.getElementById(cId) : null;
            if (c && !c.hidden) setExpanded(openBtn, c, false);
            });
        }
        setExpanded(btn, content, willOpen);
        });
    });
});


