// ── Nav hamburger
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if(hamburger) hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

// ── Active nav link
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
navLinks.forEach(a => {
  if(a.href === location.href || location.pathname.endsWith(a.getAttribute('href')))
    a.classList.add('active');
});

// ── Smooth appear on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: 0.1});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
