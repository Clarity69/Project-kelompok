import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { siteData } from '../data/siteData';
import styles from '../components/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <h4 className={styles.title}>READY TO BUILD?</h4>
          <p className={styles.sub}>
            I create digital experiences. • Let&apos;s turn ideas into functional, beautiful realities.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.icons}>
            <a href={siteData.socials.github} aria-label="GitHub"><FaGithub size={15} /></a>
            <a href={siteData.socials.linkedin} aria-label="LinkedIn"><FaLinkedin size={14} /></a>
            <a href={siteData.socials.instagram} aria-label="Instagram"><FaInstagram size={14} /></a>
          </div>
          <p className={styles.copy}>© 2026 ZALDY FADHLULORHMAN</p>
          <p className={styles.place}>BONTANG, INDONESIA 🇮🇩</p>
        </div>
      </div>

      <a href="#top" className={styles.top} aria-label="Back to top">
        <FaArrowUp size={10} />
        <span>TOP</span>
      </a>
    </footer>
  );
}
