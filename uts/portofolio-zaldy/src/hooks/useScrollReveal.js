import { useEffect } from 'react';

// Animasi "muncul saat di-scroll": elemen naik + fade ketika masuk layar.
// - Dimatikan otomatis kalau pengguna memilih "reduce motion" atau browser tidak mendukung.
// - Setelah selesai animasi, atribut dilepas supaya efek hover kartu tidak terganggu.
const SHOW_MS = 900;

function expand(el, depth = 0) {
  const kids = Array.from(el.children);
  if (depth < 2 && kids.length > 1 && getComputedStyle(el).display === 'grid') {
    return kids.flatMap((k) => expand(k, depth + 1));
  }
  return [el];
}

export default function useScrollReveal() {
  useEffect(() => {
    try {
      if (
        typeof IntersectionObserver === 'undefined' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return undefined;
      }
    } catch {
      return undefined;
    }

    const root = document.documentElement;
    const timers = new Set();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          io.unobserve(el);
          el.classList.add('is-in');
          const t = setTimeout(() => {
            el.removeAttribute('data-reveal');
            el.classList.remove('is-in');
            el.style.removeProperty('--d');
            timers.delete(t);
          }, SHOW_MS);
          timers.add(t);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );

    const targets = [];
    document.querySelectorAll('main > section').forEach((section) => {
      const container = section.querySelector('.container') || section;
      expand(container).forEach((el) => {
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
        const i = siblings.indexOf(el);
        el.style.setProperty('--d', `${Math.min(i % 4, 3) * 90}ms`);
        el.setAttribute('data-reveal', '');
        targets.push(el);
      });
    });

    root.classList.add('reveal-on');
    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      root.classList.remove('reveal-on');
      targets.forEach((el) => {
        el.removeAttribute('data-reveal');
        el.classList.remove('is-in');
        el.style.removeProperty('--d');
      });
    };
  }, []);
}