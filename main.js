/* ═══════════════════════════════════════════════
   WAHA CAFE LOUNGE — main.js
   Preloader · Navbar · Mobile Menu
   Smooth Scroll · Scroll Reveal · Parallax
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  /* Preloader */
  window.addEventListener('load', function () {
    setTimeout(function () {
      var p = document.getElementById('preloader');
      if (p) { p.classList.add('hidden'); setTimeout(function () { p.remove(); }, 700); }
    }, 1000);
  });

  /* Navbar scroll */
  var nav = document.getElementById('navbar');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  /* Mobile Menu */
  var hamburger   = document.getElementById('hamburger');
  var mobileMenu  = document.getElementById('mobileMenu');
  var mobileClose = document.getElementById('mobileClose');
  function openMenu()  { if (mobileMenu) mobileMenu.classList.add('open');    document.body.style.overflow = 'hidden'; }
  function closeMenu() { if (mobileMenu) mobileMenu.classList.remove('open'); document.body.style.overflow = ''; }
  if (hamburger)   hamburger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  if (mobileMenu)  mobileMenu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* Smooth Scroll */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var nh = (document.getElementById('navbar') || {}).offsetHeight || 80;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - nh, behavior: 'smooth' });
    });
  });

  /* Scroll Reveal */
  var els = document.querySelectorAll('.reveal');
  if (els.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Parallax */
  var heroBg = document.querySelector('.hero-photo');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      heroBg.style.transform = 'translateY(' + (window.scrollY * 0.25) + 'px)';
    }, { passive: true });
  }

})();
