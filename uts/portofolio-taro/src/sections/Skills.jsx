import SectionHeader from './SectionHeader';
import ImageFrame from './ImageFrame';
import { skillGroups, totalSkills } from '../data/skillsData';
import { profile, sections } from '../data/siteData';
import styles from '../components/skills.module.css';

const meta = sections.find((s) => s.id === 'stack');
const pad = (n) => String(n).padStart(2, '0');

// Pola papan catur 8x10 untuk poster (1 = kotak terisi)
const PATTERN = Array.from({ length: 80 }, (_, i) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (x + y) % 2 === 0 && (x * 7 + y * 3) % 5 !== 0;
});

export default function Skills() {
  return (
    <section className={styles.stack} id="stack">
      <div className="container-narrow">
        <SectionHeader num={meta.num} label={meta.label} kanji={meta.kanji} />

        <div className={styles.grid}>
          {/* Poster */}
          <ImageFrame className={styles.posterFrame}>
            <div className={styles.poster} aria-hidden="true">
              <div className={styles.posterTop}>
                <span>{meta.num} // {profile.name.toUpperCase()}-STACK</span>
                <span>{new Date().getFullYear()}</span>
              </div>
              <div className={styles.posterBody}>
                <span className={styles.posterSide}>Everything I build with · {pad(totalSkills)} tools</span>
                <div className={styles.checker}>
                  {PATTERN.map((on, i) => (
                    <span key={i} className={on ? styles.on : ''} />
                  ))}
                </div>
                <span className={styles.posterKanji}>
                  <span>基</span>
                  <span>盤</span>
                </span>
              </div>
              <div className={styles.barcode}>
                {Array.from({ length: 34 }, (_, i) => (
                  <span key={i} style={{ width: `${[1, 2, 1, 3, 1, 1, 2][i % 7]}px` }} />
                ))}
                <span className={styles.posterGlyph}>{profile.glyph}</span>
              </div>
            </div>
          </ImageFrame>

          {/* Daftar */}
          <div>
            <h2 className={`display ${styles.title}`}>Everything I build with.</h2>
            <p className={styles.sub}>
              The languages, tools and corners of Linux I reach for, grouped — plus what I'm
              learning next.
            </p>

            <ul className={styles.groups}>
              {skillGroups.map((g) => (
                <li key={g.id} className={styles.group}>
                  <div className={styles.groupHead}>
                    <span className={styles.groupKanji} aria-hidden="true">
                      {g.kanji}
                    </span>
                    <h3 className={styles.groupTitle}>{g.title}</h3>
                    <span className={styles.groupCount}>{g.items.length}</span>
                  </div>
                  <p className={styles.items}>{g.items.join(', ')}</p>
                </li>
              ))}
            </ul>

            <div className={styles.totals}>
              <span>
                <b>{pad(totalSkills)}</b> tools, grouped
              </span>
              <span>
                <b>{pad(skillGroups.length)}</b> groups
              </span>
              <span>
                <b>{pad(skillGroups.find((g) => g.id === 'exploring').items.length)}</b> in progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
