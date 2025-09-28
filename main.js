// --- Year in footer ---
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('y');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// --- Theme toggle with localStorage ---
const root = document.documentElement;
const THEME_KEY = 'pref-theme';

// apply saved theme on load
(function applySavedTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light') {
    root.classList.add('light');
  }
})();

// toggle handler
function toggleTheme(){
  root.classList.toggle('light');
  localStorage.setItem(THEME_KEY, root.classList.contains('light') ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', toggleTheme);
});

// --- Smooth scroll for internal links ---
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const offset = header ? header.offsetHeight : 0;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });
});
