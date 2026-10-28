import { useEffect, useState } from 'react';
import { FaBolt } from 'react-icons/fa6';
import { navLinks, siteData } from '../data/siteData';
import styles from '../components/navbar.module.css';

// Tema tersimpan di localStorage; kalau diblokir browser, tetap jalan tanpa penyimpanan
const readTheme = () => {
  try {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

export default function Navbar() {
  const [active, setActive] = useState('about'); // desain: "About" aktif
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(readTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* abaikan */
    }
  }, [theme]);

  // Tandai link sesuai section yang sedang terlihat
  useEffect(() => {
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!('IntersectionObserver' in window) || !els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}>{siteData.initials}</span>
          <span className={styles.logoText}>
            <span className={styles.brand}>{siteData.brand}</span>
            <span className={styles.role}>{siteData.role}</span>
          </span>
        </a>

        <nav
          className={`${styles.links} ${open ? styles.linksOpen : ''}`}
          aria-label="Main navigation"
        >
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`${styles.link} ${active === l.id ? styles.linkActive : ''}`}
              onClick={() => { setActive(l.id); setOpen(false); }}
            >
              {l.label}
            </a>
          ))}
          <a href={siteData.hireLink} className={`${styles.cta} ${styles.ctaInMenu}`} onClick={() => setOpen(false)}>
            LET&apos;S TALK <FaBolt size={12} />
          </a>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.theme} ${isDark ? styles.themeOn : ''}`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            title={isDark ? 'Light mode' : 'Dark mode'}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
          >
            <FaBolt size={20} />
          </button>
          <a href={siteData.hireLink} className={styles.cta}>
            LET&apos;S TALK <FaBolt size={12} />
          </a>
        </div>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
