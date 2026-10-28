import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import SafeImage from '../components/SafeImage';
import ProjectModal from './ProjectModal';
import { projectFilters, projectsData } from '../data/projectsData';
import styles from '../components/projects.module.css';

function Cover({ cover }) {
  return (
    <div className={styles.coverBox} style={{ background: cover.bg }}>
      <SafeImage src={cover.src} className={styles.cover} />
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('ALL');
  const [selected, setSelected] = useState(null); // project yang sedang dibuka
  const list = filter === 'ALL' ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section className={styles.projects} id="projects">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <h2 className={styles.title}>MY PROJECTS</h2>
          <div className={styles.filters} role="group" aria-label="Filter projects">
            {projectFilters.map((f) => (
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
          {list.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.header}>
                <Cover cover={p.cover} />
                {!p.cover.baked && (
                  <>
                    <span className={styles.cat} style={{ background: p.badgeBg, color: p.badgeColor }}>
                      {p.badgeLabel ?? p.category}
                    </span>
                    <span className={styles.year}>{p.year}</span>
                  </>
                )}
              </div>

              <div className={styles.body}>
                <h3 className={styles.name}>
                  {p.titleLines[0]}
                  <br />
                  {p.titleLines[1]}
                </h3>
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => <span key={t} className={styles.chip}>{t}</span>)}
                </div>
              </div>

              <div className={styles.footer}>
                <button
                  type="button"
                  className={styles.view}
                  aria-haspopup="dialog"
                  onClick={() => setSelected(p)}
                >
                  VIEW PROJECT <FaArrowRight size={9} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <ProjectModal key={selected.id} project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
