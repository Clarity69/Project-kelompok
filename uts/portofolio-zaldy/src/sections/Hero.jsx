import { FaArrowRight, FaBolt, FaHeart, FaMusic, FaCamera } from 'react-icons/fa6';
import SafeImage from '../components/SafeImage';
import { siteData } from '../data/siteData';
import styles from '../components/hero.module.css';

// bg = warna awal, hv/hvt = warna & teks saat di-hover, rot = kemiringan saat di-hover
const bioBadges = [
  { text: 'Computer Engineering student', bg: 'var(--gray-100)', hv: '#0b57c4', hvt: '#fff', rot: '-2deg' },
  { text: 'Front-End Developer', bg: 'rgba(44, 234, 163, 0.4)', hv: '#fde047', hvt: '#111', rot: '2deg' },
  { text: 'UI/UX Designer', bg: 'rgba(212, 179, 255, 0.4)', hv: '#16a34a', hvt: '#fff', rot: '-2deg' },
  { text: 'Machine Learning Enthusiast', bg: 'rgba(255, 230, 0, 0.5)', hv: '#b91c1c', hvt: '#fff', rot: '2.5deg' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        {/* Kiri: frame profil neo-brutalist */}
        <div className={styles.profile}>
          <div className={styles.frame}>
            <div className={styles.windowBar}>
              <div className={styles.dots} aria-hidden="true">
                <span style={{ background: '#ef4444' }} />
                <span style={{ background: '#facc15' }} />
                <span style={{ background: '#22c55e' }} />
              </div>
              <span className={styles.code} aria-hidden="true">&lt;/&gt;</span>
            </div>

            <div className={styles.photoWrap}>
              <div className={styles.photo}>
                {/* Taruh foto di public/images/profile.png */}
                <SafeImage src="/images/profile.jpg" alt="Zaldy Fadhlulrohman" className={styles.photoImg} />
              </div>
              <span className={styles.location}>BONTANG/INDONESIA</span>
              <span className={styles.cornerBadge} aria-hidden="true">
                <FaHeart size={14} /><FaMusic size={14} /><FaCamera size={14} /><FaBolt size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* Kanan: bio */}
        <div className={styles.bio}>
          <span className={styles.ready}>
            <i className={styles.readyDot} /> Ready for next project
          </span>

          <h1 className={styles.title}>
            ZALDY<br />FADHLULROHMAN
          </h1>

          <div className={styles.card}>
            <p className={styles.cardText}>
              A dedicated Computer Engineering student who designs intuitive user interfaces (UI/UX) and
              continuously deepens their knowledge in web development and digital technology.
            </p>
            <div className={styles.badges}>
              {bioBadges.map((b) => (
                <span key={b.text} className={styles.badge} style={{ '--bg': b.bg, '--hv': b.hv, '--hvt': b.hvt, '--rot': b.rot }}>{b.text}</span>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#projects" className={`${styles.btn} ${styles.btnRed}`}>
              VIEW PROJECTS <FaArrowRight size={12} />
            </a>
            <a href={siteData.hireLink} className={`${styles.btn} ${styles.btnYellow}`}>
              HIRE ME <FaBolt size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}