import { IconArrowUp } from './Icons';
import { profile } from '../data/siteData';
import styles from '../components/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container-wide ${styles.bar}`}>
        <a href="#home" className={styles.brand}>
          <span className={styles.glyph} aria-hidden="true">
            {profile.glyph}
          </span>
          {profile.name}
        </a>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {profile.name} · Built with React + Vite
        </p>
        <a href="#home" className={styles.top}>
          Back to top <IconArrowUp size={12} />
        </a>
      </div>
    </footer>
  );
}
