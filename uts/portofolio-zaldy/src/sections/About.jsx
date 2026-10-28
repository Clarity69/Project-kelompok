import { FaLocationDot } from 'react-icons/fa6';
import styles from '../components/about.module.css';

const stats = [
  { value: '3', label: 'PROJECTS COMPLETED' },
  { value: '3', label: 'YEARS OF STUDY' },
  { value: '11', label: 'Technologies Previously Studied' },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.grid}`}>
        {/* Kiri: cerita */}
        <div className={styles.left}>
          <div className={styles.story}>
            <span className={styles.tag}>ABOUT ME</span>
            <h2 className={styles.heading}>I AM A Digital Product Designer</h2>
            <div className={styles.paras}>
              <p>
                "I'm Zaldy, a Computer Engineering student with a strong passion for UI/UX design and front-end development. Still actively learning and experimenting with machine learning to build more helpful and visually engaging digital applications."
              </p>
              <p>
                &quot;I like practicing my design and coding skills on small projects, 
                while continuously learning new tools and AI technology along the way.&quot;
              </p>
            </div>
            <div className={styles.locationRow}>
              <span className={styles.place}>
                <FaLocationDot size={12} color="var(--red)" /> Bontang city, Indonesia
              </span>
              <span className={styles.est}>EST. 2026</span>
            </div>
          </div>

        </div>

        {/* Kanan: pendidikan + statistik */}
        <div className={styles.right}>
          <span className={styles.eduTag}>EDUCATION</span>

          <article className={`${styles.edu} ${styles.eduTall}`}>
            <div>
              <div className={styles.eduTop}>
                <div className={styles.eduId}>
                  <span className={styles.eduIcon} style={{ background: '#fef9c3' }}>🎓</span>
                  <div className={styles.eduNames}>
                    <h3 className={styles.school}>Sekolah tinggi teknologi bontang</h3>
                    <span className={styles.major} style={{ color: 'var(--red)' }}>Informatics major</span>
                  </div>
                </div>
                <span className={styles.years} style={{ background: 'var(--yellow)' }}>2024 - NOW</span>
              </div>
              <p className={styles.eduText}>
                Computer Engineering Undergraduate currently in 5th semester, actively expanding hands-on skills in
                software development, UI/UX design, and machine learning.
              </p>
            </div>
            <p className={styles.gpa}>GPA: 3.5 / 4.00</p>
          </article>

          <article className={styles.edu}>
            <div className={styles.eduTop}>
              <div className={styles.eduId}>
                <span className={styles.eduIcon} style={{ background: '#dbeafe' }}>🏫</span>
                <div className={styles.eduNames}>
                  <h3 className={styles.school}>SMA Hidayatullah</h3>
                  <span className={styles.major} style={{ color: '#1d4ed8' }}>RELIGIOUS</span>
                </div>
              </div>
              <span className={`${styles.years} ${styles.yearsGray}`}>2017 -<br />2020</span>
            </div>
            <p className={styles.eduText}>
              Completed senior high school education while developing a high interest in computational technology and
              digital design.
            </p>
          </article>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}