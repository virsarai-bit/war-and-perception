/* ============================================================
   WAR & PERCEPTION — Site Scripts
   ============================================================ */

// ── Reading progress bar ──────────────────────────────────────
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}, { passive: true });

// ── Active nav link (IntersectionObserver) ────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active',
          link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-38% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ── Mobile menu ───────────────────────────────────────────────
const navToggle   = document.querySelector('.nav-toggle');
const mobileMenu  = document.getElementById('mobile-menu');
const mobileClose = document.querySelector('.mobile-close');
const mobileLinks = mobileMenu.querySelectorAll('a');

const openMenu = () => {
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
};
const closeMenu = () => {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

navToggle.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileLinks.forEach(l => l.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// ── Smooth scroll (offset for sticky nav) ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = document.getElementById('main-nav').offsetHeight;
    const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// ── YouTube video placeholders → live iframes ─────────────────
//
//  HOW TO ADD A REAL VIDEO:
//  1. Find the YouTube video URL, e.g.  https://www.youtube.com/watch?v=dQw4w9WgXcQ
//  2. Copy just the video ID:  dQw4w9WgXcQ
//  3. In index.html, find the matching <div class="video-ph" data-video-id="REPLACE_...">
//  4. Replace the placeholder value with your real video ID.
//  5. Save — done. Click the card thumbnail to play.
//
document.querySelectorAll('.video-ph').forEach(ph => {
  ph.addEventListener('click', () => {
    const id = ph.dataset.videoId;

    if (!id || id.startsWith('REPLACE_')) {
      // Friendly alert during editing / development
      const card  = ph.closest('.video-card');
      const title = card ? card.querySelector('.video-title')?.textContent : 'this video';
      alert(
        `No YouTube ID assigned yet for: "${title}"\n\n` +
        `To add one, open index.html, find the video-ph div for this card, ` +
        `and replace the data-video-id value with a real YouTube video ID.\n\n` +
        `Example:  data-video-id="dQw4w9WgXcQ"`
      );
      return;
    }

    const wrapper = ph.parentElement; // .video-ratio
    wrapper.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1"
        title="YouTube video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy">
      </iframe>`;
  });
});
