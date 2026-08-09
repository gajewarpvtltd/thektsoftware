// Keystonetech — small, dependency-free interactions.

document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Draw-in animation for the hero arch (respects reduced-motion)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stones = document.querySelectorAll('.arch-stone');
  if (!prefersReducedMotion && stones.length) {
    stones.forEach((stone, i) => {
      stone.style.opacity = '0';
      stone.style.transform = 'translateY(8px)';
      stone.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
      requestAnimationFrame(() => {
        stone.style.opacity = '1';
        stone.style.transform = 'translateY(0)';
      });
    });
  }

  // Scroll reveal for cards and sections
  const revealTargets = document.querySelectorAll('.service-card, .flow-step, .value');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    revealTargets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(el => observer.observe(el));
  }

  // Contact form: no backend wired up yet — see README.md.
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('This form is not wired up to a backend yet. See README.md for how to connect it (e.g. Formspree), or replace this with a mailto: link in the meantime.');
    });
  }
});
