/**
 * js/main.js
 * Vanilla JavaScript (ES6+) for Ayushi Sawant's Portfolio
 * Single-page interactivity: typing animation, sparkle cursor trail,
 * theme toggle, accessible mobile menu, project filter & modal,
 * contact form validation, and image error fallbacks.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure data.js loaded
  const data = window.portfolioData || {};

  /* --------------------------------------------------------------------------
     1. THEME TOGGLE (Light "Blush" vs Dark "Cozy Night")
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('ayushi_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Default to stored theme or system preference
  const currentTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeAria(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ayushi_portfolio_theme', newTheme);
      updateThemeAria(newTheme);
    });
  }

  function updateThemeAria(theme) {
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light blush theme' : 'Switch to dark cozy night theme');
    }
  }

  /* --------------------------------------------------------------------------
     2. ACCESSIBLE MOBILE NAVBAR DRAWER
     -------------------------------------------------------------------------- */
  const navToggleBtn = document.getElementById('nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggleBtn && navLinksContainer) {
    navToggleBtn.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open');
      navToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        navToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinksContainer.contains(e.target) && !navToggleBtn.contains(e.target)) {
        navLinksContainer.classList.remove('open');
        navToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinksContainer.classList.contains('open')) {
        navLinksContainer.classList.remove('open');
        navToggleBtn.setAttribute('aria-expanded', 'false');
        navToggleBtn.focus();
      }
    });
  }

  /* --------------------------------------------------------------------------
     3. ACTIVE SECTION HIGHLIGHT (Scroll Spy)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  /* --------------------------------------------------------------------------
     4. TYPING ANIMATION IN HERO
     -------------------------------------------------------------------------- */
  const typingElement = document.getElementById('hero-typed-text');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const typedTitles = (data.hero && data.hero.typedTitles) ? data.hero.typedTitles : [
    "Aspiring Developer",
    "AI + Web Builder",
    "Engineering Student",
    "Student Leader",
    "Chess Player"
  ];

  if (typingElement) {
    if (prefersReducedMotion) {
      // Show first title statically for accessibility & comfort
      typingElement.textContent = typedTitles[0];
    } else {
      let titleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typeSpeed = 85;
      const deleteSpeed = 45;
      const pauseEnd = 1600;
      const pauseStart = 400;

      function typeLoop() {
        const currentTitle = typedTitles[titleIndex];

        if (isDeleting) {
          typingElement.textContent = currentTitle.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typingElement.textContent = currentTitle.substring(0, charIndex + 1);
          charIndex++;
        }

        let nextDelay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentTitle.length) {
          // Pause at end of word
          isDeleting = true;
          nextDelay = pauseEnd;
        } else if (isDeleting && charIndex === 0) {
          // Move to next word
          isDeleting = false;
          titleIndex = (titleIndex + 1) % typedTitles.length;
          nextDelay = pauseStart;
        }

        // Only run if tab is visible
        if (document.visibilityState !== 'hidden') {
          setTimeout(typeLoop, nextDelay);
        } else {
          // Resume once visible
          const onVisible = () => {
            if (document.visibilityState === 'visible') {
              document.removeEventListener('visibilitychange', onVisible);
              setTimeout(typeLoop, nextDelay);
            }
          };
          document.addEventListener('visibilitychange', onVisible);
        }
      }

      // Start loop
      setTimeout(typeLoop, 500);
    }
  }

  /* --------------------------------------------------------------------------
     5. DYNAMIC RESUME BUTTON IN HERO & CONTACT
     -------------------------------------------------------------------------- */
  const resumeUrl = data.personal && data.personal.resumeUrl ? data.personal.resumeUrl.trim() : "";
  const heroResumeContainer = document.getElementById('hero-resume-container');
  const contactResumeContainer = document.getElementById('contact-resume-container');

  if (resumeUrl) {
    const resumeBtnHtml = `
      <a href="${resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <svg class="btn-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Resume
      </a>
    `;
    if (heroResumeContainer) heroResumeContainer.innerHTML = resumeBtnHtml;
    if (contactResumeContainer) contactResumeContainer.innerHTML = resumeBtnHtml;
  }

  /* --------------------------------------------------------------------------
     6. IMAGE ERROR FALLBACKS (Hero, About, Poster)
     -------------------------------------------------------------------------- */
  const heroImg = document.getElementById('hero-photo-img');
  if (heroImg) {
    heroImg.addEventListener('error', () => {
      heroImg.classList.add('fallback-active');
    });
  }

  const aboutImg = document.getElementById('about-photo-img');
  if (aboutImg) {
    aboutImg.addEventListener('error', () => {
      aboutImg.classList.add('fallback-active');
    });
  }

  const posterCard = document.getElementById('poster-card-wrap');
  const posterImg = document.getElementById('poster-photo-img');
  if (posterImg && posterCard) {
    posterImg.addEventListener('error', () => {
      // Gracefully hide poster card if missing/broken
      posterCard.style.display = 'none';
      const meetGrid = document.querySelector('.meet-me-grid');
      if (meetGrid) {
        meetGrid.style.gridTemplateColumns = '1fr';
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. PROJECTS FILTERING & MODAL
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // Project Modal
  const modalOverlay = document.getElementById('project-modal');
  const modalContainer = modalOverlay ? modalOverlay.querySelector('.modal-container') : null;
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const detailButtons = document.querySelectorAll('.open-modal-btn');
  let lastFocusedElement = null;

  function openProjectModal(projectId) {
    const project = data.projects ? data.projects.find(p => p.id === projectId) : null;
    if (!project || !modalOverlay) return;

    // Populate modal contents
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-sticker').textContent = project.sticker;
    document.getElementById('modal-team').textContent = project.teamSize;
    document.getElementById('modal-summary').textContent = project.summary;
    document.getElementById('modal-my-role').textContent = project.myRole;

    // Detailed contributions list
    const contribList = document.getElementById('modal-contributions');
    contribList.innerHTML = '';
    project.detailedContributions.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      contribList.appendChild(li);
    });

    // Tech stack
    const techTags = document.getElementById('modal-tech');
    techTags.innerHTML = '';
    project.techStack.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = t;
      techTags.appendChild(span);
    });

    // Honest status
    document.getElementById('modal-honest-status').textContent = project.honestStatus;

    // Action links
    const modalLinksWrap = document.getElementById('modal-links');
    modalLinksWrap.innerHTML = '';

    if (project.repoUrl && !project.isPrivate) {
      const repoLink = document.createElement('a');
      repoLink.href = project.repoUrl;
      repoLink.target = '_blank';
      repoLink.rel = 'noopener noreferrer';
      repoLink.className = 'btn btn-primary';
      repoLink.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        GitHub Repository
      `;
      modalLinksWrap.appendChild(repoLink);
    }

    if (project.liveUrl) {
      const liveLink = document.createElement('a');
      liveLink.href = project.liveUrl;
      liveLink.target = '_blank';
      liveLink.rel = 'noopener noreferrer';
      liveLink.className = 'btn btn-secondary';
      liveLink.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Live Demo
      `;
      modalLinksWrap.appendChild(liveLink);
    }

    if (project.isPrivate) {
      const privateNotice = document.createElement('span');
      privateNotice.className = 'chip';
      privateNotice.textContent = '🔒 Repository is private (Internal Hackathon)';
      modalLinksWrap.appendChild(privateNotice);
    }

    // Open modal
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent scroll

    // Focus close button for accessibility
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // restore scroll

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      lastFocusedElement = e.currentTarget;
      const projectId = btn.getAttribute('data-project-id');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  // Escape key & Tab trapping inside modal
  document.addEventListener('keydown', (e) => {
    if (!modalOverlay || !modalOverlay.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeProjectModal();
    }

    if (e.key === 'Tab') {
      const focusableElements = modalContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstEl = focusableElements[0];
      const lastEl = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    }
  });

  /* --------------------------------------------------------------------------
     8. CONTACT FORM VALIDATION & SUBMISSION
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const formSubmitBtn = document.getElementById('form-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Clear existing errors
      clearFormErrors();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');
      const honeypot = document.getElementById('contact-honeypot');

      // Bot protection: if honeypot filled, ignore silently
      if (honeypot && honeypot.value.trim() !== '') {
        showFormSuccess();
        contactForm.reset();
        return;
      }

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setFieldError(nameInput, 'Please share your name (at least 2 characters).');
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        setFieldError(emailInput, 'Please provide a valid email address so I can reply.');
        isValid = false;
      }

      // Validate subject
      if (!subjectInput.value.trim()) {
        setFieldError(subjectInput, 'Please add a brief subject.');
        isValid = false;
      }

      // Validate message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        setFieldError(messageInput, 'Please write a message with at least 10 characters.');
        isValid = false;
      }

      if (!isValid) return;

      // Loading State
      const originalBtnText = formSubmitBtn.innerHTML;
      formSubmitBtn.disabled = true;
      formSubmitBtn.innerHTML = `
        <svg class="btn-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        Sending softly...
      `;

      try {
        const formData = new FormData(contactForm);
        const actionUrl = contactForm.action;

        // Check if user still has placeholder endpoint
        if (actionUrl.includes('[ADD FORMSPREE URL]')) {
          // Graceful fallback for placeholder demo
          setTimeout(() => {
            showFormSuccess();
            contactForm.reset();
            formSubmitBtn.disabled = false;
            formSubmitBtn.innerHTML = originalBtnText;
          }, 800);
          return;
        }

        const response = await fetch(actionUrl, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          showFormSuccess();
          contactForm.reset();
        } else {
          showFormError();
        }
      } catch (err) {
        showFormError();
      } finally {
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = originalBtnText;
      }
    });
  }

  function setFieldError(inputEl, message) {
    const group = inputEl.closest('.form-group');
    if (group) {
      group.classList.add('has-error');
      const errEl = group.querySelector('.form-error-msg');
      if (errEl) errEl.textContent = message;
      inputEl.setAttribute('aria-invalid', 'true');
    }
  }

  function clearFormErrors() {
    document.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('has-error');
      const input = group.querySelector('input, textarea');
      if (input) input.removeAttribute('aria-invalid');
    });
    if (formStatus) {
      formStatus.className = 'form-status';
      formStatus.style.display = 'none';
    }
  }

  function showFormSuccess() {
    if (!formStatus) return;
    formStatus.className = 'form-status success';
    formStatus.innerHTML = `
      <strong>🌸 Thank you!</strong> Your message has been received with warmth. I'll get back to you soon!
    `;
    formStatus.style.display = 'block';
  }

  function showFormError() {
    if (!formStatus) return;
    formStatus.className = 'form-status error';
    formStatus.innerHTML = `
      <strong>✨ Notice:</strong> Could not submit through the online form right now. Please email me directly at 
      <a href="mailto:ayushisawant19@gmail.com" style="text-decoration: underline; font-weight: 600;">ayushisawant19@gmail.com</a>.
    `;
    formStatus.style.display = 'block';
  }

  /* --------------------------------------------------------------------------
     9. SPARKLE CURSOR TRAIL
     -------------------------------------------------------------------------- */
  const sparkleContainer = document.getElementById('sparkle-cursor-container');
  const sparkleToggleBtn = document.getElementById('sparkle-toggle');
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  let sparklesEnabled = localStorage.getItem('ayushi_sparkles_enabled') !== 'false';

  // Update button text / state
  function updateSparkleBtn() {
    if (sparkleToggleBtn) {
      sparkleToggleBtn.setAttribute('aria-pressed', sparklesEnabled);
      sparkleToggleBtn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 2 C12 7.5 7.5 12 2 12 C7.5 12 12 16.5 12 22 C12 16.5 16.5 12 22 12 C16.5 12 12 7.5 12 2 Z" fill="#F28DB5"></path>
        </svg>
        Sparkles: ${sparklesEnabled ? 'ON' : 'OFF'}
      `;
    }
  }

  if (sparkleToggleBtn) {
    updateSparkleBtn();
    sparkleToggleBtn.addEventListener('click', () => {
      sparklesEnabled = !sparklesEnabled;
      localStorage.setItem('ayushi_sparkles_enabled', sparklesEnabled);
      updateSparkleBtn();
      if (!sparklesEnabled && sparkleContainer) {
        sparkleContainer.innerHTML = '';
      }
    });
  }

  // Enhanced Magical Heart & Sparkle Particle Engine
  if (!isTouchDevice && !prefersReducedMotion && sparkleContainer) {
    const particleColors = ['#FF70A6', '#F28DB5', '#B79CE8', '#FFB89A', '#F5C26B', '#FF9ECA', '#FFD6E7'];
    const particleShapes = ['heart', 'sparkle', 'blossom', 'heart', 'sparkle']; // weighted toward hearts & sparkles
    const activeParticles = [];
    let lastSpawnTime = 0;
    const spawnThrottleMs = 32; // silky smooth spawn rate on move
    const maxParticles = 35; // optimal balance of richness and performance

    // Shape SVGs with glossy inner highlights and twinkles
    function getParticleSvg(shape, color, size) {
      if (shape === 'heart') {
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" aria-hidden="true" style="overflow: visible;">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            <!-- Glossy candy shine accent -->
            <ellipse cx="8.5" cy="7.2" rx="2" ry="1.2" transform="rotate(-30 8.5 7.2)" fill="#FFFFFF" opacity="0.65"/>
          </svg>
        `;
      } else if (shape === 'sparkle') {
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" aria-hidden="true" style="overflow: visible;">
            <path d="M12 1 C12 7.5 7.5 12 1 12 C7.5 12 12 16.5 12 23 C12 16.5 16.5 12 23 12 C16.5 12 12 7.5 12 1 Z"/>
            <!-- Twinkling diamond core -->
            <circle cx="12" cy="12" r="2.2" fill="#FFFFFF"/>
          </svg>
        `;
      } else {
        // Cherry blossom floret
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" aria-hidden="true" style="overflow: visible;">
            <circle cx="12" cy="6.5" r="3.2"/>
            <circle cx="17.2" cy="10.2" r="3.2"/>
            <circle cx="15.2" cy="16.5" r="3.2"/>
            <circle cx="8.8" cy="16.5" r="3.2"/>
            <circle cx="6.8" cy="10.2" r="3.2"/>
            <circle cx="12" cy="12" r="2.2" fill="#FFF7ED"/>
          </svg>
        `;
      }
    }

    // Spawn a particle with custom initial momentum
    function spawnParticle(x, y, customVx = null, customVy = null, customShape = null) {
      if (!sparklesEnabled || document.visibilityState === 'hidden') return;

      // Clean oldest if capacity reached
      if (activeParticles.length >= maxParticles) {
        const oldest = activeParticles.shift();
        if (oldest.el.parentNode === sparkleContainer) {
          sparkleContainer.removeChild(oldest.el);
        }
      }

      const shape = customShape || particleShapes[Math.floor(Math.random() * particleShapes.length)];
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      // Exact 26px size as requested for optimal crispness and visibility
      const size = 26;

      const el = document.createElement('div');
      el.className = 'cursor-particle';
      el.style.color = color;
      el.innerHTML = getParticleSvg(shape, color, size);
      sparkleContainer.appendChild(el);

      const vx = customVx !== null ? customVx : (Math.random() - 0.5) * 1.8;
      // Gentle initial upward float like fairy dust before descending
      const vy = customVy !== null ? customVy : -(Math.random() * 1.5 + 0.8);
      const maxAge = Math.floor(Math.random() * 20) + 40; // 40-60 frames (~700ms - 1000ms)

      activeParticles.push({
        el,
        x,
        y,
        vx,
        vy,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 5,
        swaySpeed: Math.random() * 0.08 + 0.04,
        swayAmplitude: Math.random() * 0.8 + 0.4,
        age: 0,
        maxAge
      });
    }

    // Animation Physics Loop via requestAnimationFrame
    function animateParticles() {
      if (sparklesEnabled && document.visibilityState !== 'hidden') {
        for (let i = activeParticles.length - 1; i >= 0; i--) {
          const p = activeParticles[i];
          p.age++;
          const t = p.age / p.maxAge;

          if (t >= 1) {
            if (p.el.parentNode === sparkleContainer) {
              sparkleContainer.removeChild(p.el);
            }
            activeParticles.splice(i, 1);
            continue;
          }

          // Physics updates
          p.vy += 0.048; // soft natural gravity
          p.vx *= 0.985; // air drag
          p.x += p.vx + Math.sin(p.age * p.swaySpeed) * p.swayAmplitude;
          p.y += p.vy;
          p.rot += p.vRot;

          // Scale: fast initial bloom, gentle shrink
          let scale = 1;
          if (t < 0.2) {
            scale = 0.4 + (t / 0.2) * 0.75; // bloom from 0.4 to 1.15
          } else {
            scale = 1.15 - ((t - 0.2) / 0.8) * 0.85; // ease to 0.3
          }

          // Opacity: stay radiant, then gracefully fade out
          const opacity = t < 0.5 ? 1 : 1 - Math.pow((t - 0.5) / 0.5, 1.8);

          p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) rotate(${p.rot}deg) scale(${scale})`;
          p.el.style.opacity = opacity;
        }
      }
      requestAnimationFrame(animateParticles);
    }

    requestAnimationFrame(animateParticles);

    // Mouse Move Trail
    let lastMouseX = 0;
    let lastMouseY = 0;

    window.addEventListener('mousemove', (e) => {
      const now = performance.now();
      if (now - lastSpawnTime < spawnThrottleMs) return;
      lastSpawnTime = now;

      const deltaX = e.clientX - lastMouseX;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      // Slight momentum drift following cursor direction
      const followVx = deltaX * 0.08 + (Math.random() - 0.5) * 1.2;
      spawnParticle(e.clientX, e.clientY, followVx);
    });

    // Magical Click Mini-Burst: Celebrate user clicks with a soft radial shower of hearts and sparkles!
    window.addEventListener('pointerdown', (e) => {
      if (!sparklesEnabled) return;
      const count = 7; // 7 radial fairy sparkles & hearts
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 2.6 + 1.8;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed - 1.2;
        const shape = i % 2 === 0 ? 'heart' : 'sparkle';
        spawnParticle(e.clientX, e.clientY, vx, vy, shape);
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. SCROLL REVEAL ANIMATIONS
     -------------------------------------------------------------------------- */
  const revealItems = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    // Reveal all immediately if no observer or reduced motion
    revealItems.forEach(item => item.classList.add('revealed'));
  }

  /* --------------------------------------------------------------------------
     11. BACK TO TOP SMOOTH SCROLL
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     12. TAB HIDDEN VISIBILITY STATE MANAGEMENT
     -------------------------------------------------------------------------- */
  document.addEventListener('visibilitychange', () => {
    const animatedDecos = document.querySelectorAll('.floating-drift, .floating-drift-delayed, .floating-pulse');
    if (document.visibilityState === 'hidden') {
      animatedDecos.forEach(el => el.style.animationPlayState = 'paused');
    } else {
      animatedDecos.forEach(el => el.style.animationPlayState = 'running');
    }
  });
});
