import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { IconClose, IconMenu, IconStar } from './Icons';
import useGithubRepos from '../hooks/useGithubRepos';
import { profile, sections } from '../data/siteData';
import styles from '../components/navbar.module.css';

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { repos } = useGithubRepos(profile.github);
  const stars = repos.reduce((sum, r) => sum + (r.stars || 0), 0);

  // Garis bawah navbar muncul setelah halaman digulir
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: tandai link section yang sedang terlihat
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    const top = () => window.scrollY < 200 && setActive('');
    window.addEventListener('scroll', top, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', top);
    };
  }, []);

  // Menu mobile: tutup dengan Esc atau saat layar dilebarkan
  useEffect(() => {
    if (!menuOpen) return;
    // Kunci scroll halaman selama menu HP terbuka
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const desktop = window.matchMedia('(min-width: 881px)');
    const onResize = (e) => e.matches && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
      <div className={`container-wide ${styles.bar}`}>
        <a href="#home" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <span className={styles.glyph} aria-hidden="true">
            {profile.glyph}
          </span>
          {profile.name}
        </a>

        <nav
          id="main-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Main"
        >
          <ul className={styles.navList}>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`${styles.navLink} ${active === s.id ? styles.active : ''}`}
                  aria-current={active === s.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className={styles.navNum}>{s.num}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Hanya tampil di menu HP: tombol Contact desktop disembunyikan di layar kecil */}
          <div className={styles.menuFoot}>
            <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
            <span className={styles.menuEmail}>{profile.email}</span>
          </div>
        </nav>

        <div className={styles.right}>
          <a
            href={profile.githubUrl}
            className={styles.chip}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub ${profile.github}${stars ? `, ${stars} stars` : ''}`}
          >
            <IconStar size={12} className={styles.star} />
            {stars || '—'}
          </a>
          <ThemeToggle />
          <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
            Contact
          </a>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
