/* ================================================================
   main.js — Obsidian Capital Research
   ================================================================ */

// ---- Navbar: apply 'scrolled' class after 40px ----
const navbar = document.getElementById('navbar');
if (navbar) {
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on load
}

// ---- Mobile menu toggle ----
const navToggle   = document.getElementById('navToggle');
const mobileMenu  = document.getElementById('mobileMenu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });
}

function closeMobileMenu() {
  if (!mobileMenu || !navToggle) return;
  mobileMenu.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

// Close on outside click
document.addEventListener('click', (e) => {
  if (mobileMenu && mobileMenu.classList.contains('open')) {
    if (!mobileMenu.contains(e.target) && !navToggle.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
}

// ---- Active nav link (index page only) ----
const sections    = document.querySelectorAll('section[id]');
const navLinkEls  = document.querySelectorAll('.nav-links a');

if (sections.length > 0 && navLinkEls.length > 0) {
  const activateLink = (id) => {
    navLinkEls.forEach(link => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);
    });
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateLink(entry.target.getAttribute('id'));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
}

// ---- Smooth scroll for anchor links (fallback for older Safari) ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
