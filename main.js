/* ==========================================================================
   DALCANCIAA — Main JavaScript (Animations, BG Canvas, Scroll Effects)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ===== BG Canvas: Particle System ===== */
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.life = Math.random() * 500 + 200;
        this.color = Math.random() > 0.6
          ? `rgba(16, 185, 129, ${this.opacity})`
          : `rgba(100, 116, 139, ${this.opacity * 0.6})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        if (this.life <= 0 || this.x < -10 || this.x > w + 10 || this.y < -10 || this.y > h + 10) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const count = Math.min(80, Math.floor(w * h / 18000));
    for (let i = 0; i < count; i++) particles.push(new Particle());

    function animateParticles() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  /* ===== Scroll: Navbar Shrink ===== */
  const nav = document.getElementById('site-nav');
  if (nav) {
    let lastScrollY = 0;
    function onScroll() {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 50);
      lastScrollY = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ===== Mobile Menu Toggle ===== */
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = isOpen ? '' : 'column';
      navLinks.style.position = isOpen ? '' : 'absolute';
      navLinks.style.top = isOpen ? '' : '100%';
      navLinks.style.left = isOpen ? '' : '0';
      navLinks.style.width = isOpen ? '' : '100%';
      navLinks.style.background = isOpen ? '' : 'rgba(3,7,8,0.97)';
      navLinks.style.padding = isOpen ? '' : '20px 24px';
      navLinks.style.gap = isOpen ? '' : '16px';
      navLinks.style.borderBottom = isOpen ? '' : '1px solid rgba(255,255,255,0.08)';
      navLinks.style.backdropFilter = isOpen ? '' : 'blur(24px)';
      navLinks.style.zIndex = isOpen ? '' : '999';
      mobileBtn.textContent = isOpen ? '☰' : '✕';
    });
  }

  /* ===== Scroll Reveal ===== */
  const scrollRevealElements = document.querySelectorAll(
    '.glass-card, .feature-showcase-row, .gallery-phone, .value-card, .download-cta-box, .newsletter-box, .hero-content, .hero-visual-wrapper, .floating-3d-badge'
  );

  const observerOptions = { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  scrollRevealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
    revealObserver.observe(el);
  });

  // Add CSS class for revealed
  const revealStyle = document.createElement('style');
  revealStyle.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(revealStyle);

  /* ===== 3D Tilt on [data-tilt] elements ===== */
  document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mx = e.clientX - cx;
      const my = e.clientY - cy;
      const rx = -(my / rect.height) * 12;
      const ry = (mx / rect.width) * 12;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01,1.01,1.01)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  /* ===== Smooth scroll for anchor links ===== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        if (navLinks) {
          navLinks.style.display = '';
          if (mobileBtn) mobileBtn.textContent = '☰';
        }
      }
    });
  });

  /* ===== Waitlist Form ===== */
  const waitlistForm = document.getElementById('waitlist-form');
  const waitlistMsg = document.getElementById('waitlist-success-msg');
  if (waitlistForm && waitlistMsg) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = waitlistForm.querySelector('input[type="email"]');
      if (email && email.value.trim()) {
        waitlistMsg.textContent = `✓ ${email.value} has been added! We'll notify you on launch.`;
        waitlistMsg.style.display = 'block';
        email.value = '';
      }
    });
  }

  /* ===== Gallery Drag Scroll ===== */
  const galleryContainer = document.querySelector('.gallery-scroll-container');
  if (galleryContainer) {
    let isDown = false, startX, scrollLeft;
    galleryContainer.addEventListener('mousedown', e => {
      isDown = true;
      galleryContainer.style.cursor = 'grabbing';
      startX = e.pageX - galleryContainer.offsetLeft;
      scrollLeft = galleryContainer.scrollLeft;
    });
    galleryContainer.addEventListener('mouseleave', () => {
      isDown = false;
      galleryContainer.style.cursor = '';
    });
    galleryContainer.addEventListener('mouseup', () => {
      isDown = false;
      galleryContainer.style.cursor = '';
    });
    galleryContainer.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - galleryContainer.offsetLeft;
      galleryContainer.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
  }

  console.log('✨ Dalcanciaa website initialized');
});
