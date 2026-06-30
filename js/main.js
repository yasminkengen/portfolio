/* ============================================================
   YASMIN KENGEN — PORTFOLIO JS
   i18n system: Portuguese · English · Spanish
   ============================================================ */

// ──────────────────────────────────────────────────────────────
//  I18N ENGINE
// ──────────────────────────────────────────────────────────────
const locales = { pt, en, es };
let currentLang = localStorage.getItem('yk-lang') || 'pt';

function t(lang) {
  return locales[lang] || locales['pt'];
}

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('yk-lang', lang);
  const d = t(lang);

  // Update lang attr
  document.documentElement.lang = lang;

  // Language buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // ── NAV ──────────────────────────────────────────────────
  const navKeys = ['home','about','services','tools','projects','tech','differentials','certifications','education','contact'];
  navKeys.forEach(key => {
    document.querySelectorAll(`[data-i18n="nav.${key}"]`).forEach(el => {
      el.textContent = d.nav[key];
    });
  });

  // ── HERO ─────────────────────────────────────────────────
  setInner('hero-title-txt', d.hero.title);
  setInner('hero-subtitle-txt', d.hero.subtitle);
  setInner('hero-tagline-txt', d.hero.tagline);
  setInner('hero-cta', d.hero.cta);
  setInner('hero-cta-main', d.hero.cta);
  setInner('hero-scroll-txt', d.hero.scroll);

  // ── ABOUT ────────────────────────────────────────────────
  setInner('about-label', d.about.label);
  setInner('about-text-content', d.about.text);
  setInner('about-stat-xp', d.about.xp);

  // ── SERVICES ─────────────────────────────────────────────
  setInner('services-label', d.services.label);
  renderList('svc-financial', d.services.financial.items);
  renderList('svc-administrative', d.services.administrative.items);
  renderList('svc-customer', d.services.customer.items);
  renderList('svc-executive', d.services.executive.items);
  setInner('svc-financial-title', d.services.financial.title);
  setInner('svc-administrative-title', d.services.administrative.title);
  setInner('svc-customer-title', d.services.customer.title);
  setInner('svc-executive-title', d.services.executive.title);

  // ── TOOLS ────────────────────────────────────────────────
  setInner('tools-label', d.tools.label);
  setInner('tools-dev-label-txt', d.tools.inDevelopment);

  // ── PROJECTS ─────────────────────────────────────────────
  setInner('projects-label', d.projects.label);
  for (let i = 1; i <= 5; i++) {
    const p = d.projects[`p${i}`];
    setInner(`proj-title-${i}`, p.title);
    renderTags(`proj-tags-${i}`, p.tags);
  }
  document.querySelectorAll('.proj-view-more').forEach(el => {
    el.textContent = d.projects.viewMore;
  });



  // ── TECH ─────────────────────────────────────────────────
  setInner('tech-label', d.tech.label);
  setInner('tech-intro', d.tech.intro);
  setInner('tech-dev-title', d.tech.dev.title);
  setInner('tech-bi-title', d.tech.bi.title);
  setInner('tech-int-title', d.tech.integrations.title);
  setInner('tech-auto-title', d.tech.automations.title);
  renderList('tech-dev-list', d.tech.dev.items);
  renderList('tech-bi-list', d.tech.bi.items);
  renderList('tech-int-list', d.tech.integrations.items);
  renderList('tech-auto-list', d.tech.automations.items);
  setInner('partner-title', d.tech.partner.title);
  setInner('partner-name-txt', d.tech.partner.name);
  setInner('partner-role-txt', d.tech.partner.role);
  renderPartnerSkills(d.tech.partner.specialties);
  setInner('partner-note-txt', d.tech.partner.note);

  // ── HOW HELP ─────────────────────────────────────────────
  setInner('howhelp-label', d.howHelp.label);
  setInner('howhelp-companies-title', d.howHelp.companies.title);
  setInner('howhelp-small-title', d.howHelp.small.title);
  setInner('howhelp-freelancers-title', d.howHelp.freelancers.title);
  renderList('howhelp-companies-list', d.howHelp.companies.items);
  renderList('howhelp-small-list', d.howHelp.small.items);
  renderList('howhelp-freelancers-list', d.howHelp.freelancers.items);





  // ── CONTACT ──────────────────────────────────────────────
  setInner('contact-label', d.contact.section);
  setInner('contact-headline', d.contact.headline);
  setInner('contact-text', d.contact.text);
  setInner('contact-email-btn', d.contact.email);
  setInner('contact-wa-btn', d.contact.whatsapp);
  setInner('contact-li-btn', d.contact.linkedin);
  setHref('contact-email-link', d.contact.emailHref);
  setHref('contact-wa-link', d.contact.whatsappHref);
  setHref('contact-li-link', d.contact.linkedinHref);

  // ── FOOTER ───────────────────────────────────────────────
  setInner('footer-made', d.footer.made);

  // Section titles
  ['about','services','tools','tech','contact'].forEach(key => {
    const keyMap = { tech: 'tech', howhelp: 'howHelp' };
    const dk = keyMap[key] || key;
    const el = document.getElementById(`section-title-${key}`);
    if (el) {
      const val = d[dk] && d[dk].section;
      if (val) el.textContent = val;
    }
  });

  setInner('section-title-howhelp', d.howHelp.section);
}

// ──────────────────────────────────────────────────────────────
//  RENDER HELPERS
// ──────────────────────────────────────────────────────────────
function setInner(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}

function setHref(id, href) {
  const el = document.getElementById(id);
  if (el && href) el.href = href;
}

function renderList(id, items) {
  const el = document.getElementById(id);
  if (!el || !items) return;
  el.innerHTML = items.map(item => `
    <li>${item}</li>
  `).join('');
}

function renderTags(id, tags) {
  const el = document.getElementById(id);
  if (!el || !tags) return;
  el.innerHTML = tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
}

function renderDifferentials(items) {
  const el = document.getElementById('diff-grid');
  if (!el || !items) return;
  const icons = [
    'fa-solid fa-bullseye',
    'fa-solid fa-magnifying-glass',
    'fa-solid fa-comment-dots',
    'fa-solid fa-scale-balanced',
    'fa-solid fa-lock',
    'fa-solid fa-book-open',
    'fa-solid fa-laptop-code',
    'fa-solid fa-rocket',
    'fa-solid fa-money-bill-trend-up',
    'fa-solid fa-handshake'
  ];
  el.innerHTML = items.map((item, i) => `
    <div class="diff-card fade-up delay-${(i % 5) + 1}">
      <div class="diff-icon"><i class="${icons[i] || 'fa-solid fa-check'}"></i></div>
      <div class="diff-text">${item}</div>
    </div>
  `).join('');
  // Re-observe new elements
  document.querySelectorAll('.diff-card').forEach(el => observer.observe(el));
}

function renderPartnerSkills(skills) {
  const el = document.getElementById('partner-skills-list');
  if (!el || !skills) return;
  el.innerHTML = skills.map(s => `<span class="partner-skill">${s}</span>`).join('');
}

let activeCertFilter = 'all';

function renderCertFilters(categories, lang) {
  const el = document.getElementById('cert-filters');
  if (!el) return;
  const allLabel = lang === 'pt' ? 'Todos' : lang === 'en' ? 'All' : 'Todos';
  el.innerHTML = `<button class="cert-filter-btn ${activeCertFilter === 'all' ? 'active' : ''}" data-filter="all">${allLabel}</button>` +
    categories.map(cat => `
      <button class="cert-filter-btn ${activeCertFilter === cat ? 'active' : ''}" data-filter="${cat}">${cat}</button>
    `).join('');

  el.querySelectorAll('.cert-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCertFilter = btn.dataset.filter;
      el.querySelectorAll('.cert-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCerts(t(currentLang).certifications, currentLang);
    });
  });
}

function renderCerts(certData, lang) {
  const el = document.getElementById('cert-grid');
  if (!el) return;
  const items = certData.items || [];
  const filtered = activeCertFilter === 'all'
    ? items
    : items.filter(c => c.category === activeCertFilter);

  if (filtered.length === 0) {
    el.innerHTML = `
      <div class="cert-empty fade-up">
        <div class="cert-empty-icon">🏅</div>
        <div class="cert-empty-text">${certData.empty}</div>
        <div class="cert-empty-tip">${certData.addTip}</div>
      </div>`;
    return;
  }

  el.innerHTML = filtered.map(cert => `
    <div class="cert-card fade-up">
      <span class="cert-status ${cert.status === 'done' ? 'done' : 'in-progress'}">
        ${cert.status === 'done' ? certData.status.done : certData.status.inProgress}
      </span>
      <span class="cert-cat-badge">${cert.category}</span>
      <div class="cert-name">${cert.name}</div>
      <div class="cert-institution">${cert.institution}</div>
      <div class="cert-date">${cert.date}</div>
    </div>
  `).join('');

  el.querySelectorAll('.cert-card').forEach(el => observer.observe(el));
}

function renderEducation(eduData, lang) {
  // Graduation
  const gradEl = document.getElementById('edu-graduation-list');
  if (gradEl && eduData.graduation.items.length) {
    const statusMap = { inProgress: eduData.graduation?.items?.[0] };
    const d = t(lang);
    gradEl.innerHTML = eduData.graduation.items.map(item => `
      <div class="edu-item fade-up">
        <div class="edu-dot"></div>
        <div class="edu-content">
          <div class="edu-degree">${item.degree}</div>
          <div class="edu-institution">${item.institution}</div>
          <div class="edu-period">${item.period}</div>
          <span class="edu-status-badge ${item.status === 'done' ? 'done' : 'in-progress'}">
            ${item.status === 'done' ? d.certifications.status.done : d.certifications.status.inProgress}
          </span>
        </div>
      </div>
    `).join('');
  }

  // Courses
  const coursesEl = document.getElementById('edu-courses-list');
  if (coursesEl) {
    if (!eduData.courses.items || eduData.courses.items.length === 0) {
      coursesEl.innerHTML = '';
    } else {
      const d = t(lang);
      coursesEl.innerHTML = eduData.courses.items.map(item => `
        <div class="edu-item fade-up">
          <div class="edu-dot"></div>
          <div class="edu-content">
            <div class="edu-degree">${item.name}</div>
            <div class="edu-institution">${item.institution}</div>
            <div class="edu-period">${item.period}</div>
          </div>
        </div>
      `).join('');
    }
  }

  // Languages
  const langEl = document.getElementById('edu-languages-list');
  if (langEl) {
    const flags = { Português: '🇧🇷', Portuguese: '🇧🇷', Portugués: '🇧🇷',
                    Inglês: '🇺🇸', English: '🇺🇸', Inglés: '🇺🇸',
                    Espanhol: '🇪🇸', Spanish: '🇪🇸', Español: '🇪🇸' };
    langEl.innerHTML = eduData.languages.items.map(lang => `
      <div class="lang-item">
        <span class="lang-name">
          <span class="lang-flag">${flags[lang.name] || '🌐'}</span>
          ${lang.name}
        </span>
        <span class="lang-level">${lang.level}</span>
      </div>
    `).join('');
  }

  // Block titles
  setInner('edu-graduation-title', eduData.graduation.title);
  setInner('edu-courses-title', eduData.courses.title);
  setInner('edu-languages-title', eduData.languages.title);
}

// ──────────────────────────────────────────────────────────────
//  NAVIGATION
// ──────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('nav-mobile');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveNav();
  }, { passive: true });

  // Hamburger
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;

  let current = '';
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollY) {
      current = sec.id;
    }
  });

  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ──────────────────────────────────────────────────────────────
//  SCROLL ANIMATIONS — INTERSECTION OBSERVER
// ──────────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function initAnimations() {
  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
    observer.observe(el);
  });
}

// ──────────────────────────────────────────────────────────────
//  LANGUAGE SWITCHER
// ──────────────────────────────────────────────────────────────
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslations(btn.dataset.lang);
    });
  });
}

// ──────────────────────────────────────────────────────────────
//  PROJECT CARD HOVER EFFECTS
// ──────────────────────────────────────────────────────────────
function initProjectCards() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const bars = card.querySelectorAll('.mock-bar');
      bars.forEach((bar, i) => {
        setTimeout(() => {
          bar.style.opacity = '1';
          bar.style.transform = 'scaleY(1.05)';
        }, i * 50);
      });
    });
    card.addEventListener('mouseleave', () => {
      const bars = card.querySelectorAll('.mock-bar');
      bars.forEach(bar => {
        bar.style.opacity = '';
        bar.style.transform = '';
      });
    });
  });
}

// ──────────────────────────────────────────────────────────────
//  COUNTER ANIMATION
// ──────────────────────────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let count = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + (el.dataset.suffix || '');
      if (count >= target) clearInterval(timer);
    }, 30);
  });
}

// Animate counters when about section is visible
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      aboutObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

// ──────────────────────────────────────────────────────────────
//  INIT
// ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Init core
  initNavbar();
  initLangSwitcher();

  // Apply initial language
  applyTranslations(currentLang);

  // Animations
  initAnimations();
  initProjectCards();

  // Observe about section for counters
  const aboutSection = document.getElementById('about');
  if (aboutSection) aboutObserver.observe(aboutSection);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});
