import { useState } from 'react';
import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaPython, FaReact } from 'react-icons/fa6';
import { SiJavascript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { skillFilters, skillsData } from '../data/skillsData';
import styles from '../components/skills.module.css';

// Logo Microsoft 4 warna (kotak 2x2)
const MicrosoftLogo = () => (
  <span className={styles.ms} aria-hidden="true">
    <i style={{ background: '#f25022' }} /><i style={{ background: '#7fba00' }} />
    <i style={{ background: '#00a4ef' }} /><i style={{ background: '#ffb900' }} />
  </span>
);

// Canva & Affinity tidak tersedia di react-icons → dibuat sebagai logo teks sederhana
const CanvaLogo = () => <span className={styles.canva} aria-hidden="true">C</span>;
const AffinityLogo = () => <span className={styles.affinity} aria-hidden="true">a</span>;

const icons = {
  react: <FaReact size={24} color="#00b8d4" />,
  js: <SiJavascript size={21} color="#111" />,
  html: <FaHtml5 size={21} color="#e44d26" />,
  css: <FaCss3Alt size={21} color="#1572b6" />,
  figma: <FaFigma size={22} color="#f24e1e" />,
  python: <FaPython size={22} color="#3776ab" />,
  canva: <CanvaLogo />,
  microsoft: <MicrosoftLogo />,
  git: <FaGitAlt size={22} color="#f05032" />,
  affinity: <AffinityLogo />,
  vscode: <VscVscode size={24} color="#fff" />,
};

export default function Skills() {
  const [filter, setFilter] = useState('ALL');
  const list = filter === 'ALL' ? skillsData : skillsData.filter((s) => s.category === filter);

  return (
    <section className={styles.skills} id="skills">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <h2 className={styles.title}>MY SKILLS</h2>
          <div className={styles.filters} role="group" aria-label="Filter skills">
            {skillFilters.map((f) => (
              <button
                key={f}
                className={`${styles.filter} ${filter === f ? styles.filterActive : ''}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {list.map((s) => (
            <article key={s.name} className={styles.card}>
              <span className={styles.iconBox} style={{ background: s.iconBg }}>{icons[s.icon]}</span>
              <div className={styles.meta}>
                <h3 className={styles.name}>{s.name}</h3>
                <span className={styles.tag} style={{ background: s.tagBg }}>{s.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
