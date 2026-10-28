import KanjiArt from './KanjiArt';
import SpecList from './SpecList';
import { IconArrowRight, IconGithub, IconStar } from './Icons';
import useGithubRepos from '../hooks/useGithubRepos';
import { profile } from '../data/siteData';
import { featuredProjects } from '../data/projectsData';
import { totalSkills } from '../data/skillsData';
import styles from '../components/hero.module.css';

const pad = (n) => String(n).padStart(2, '0');

function timeAgo(iso) {
  if (!iso) return null;
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return `${months} month${months > 1 ? 's' : ''} ago`;
}

export default function Hero() {
  const { repos, loading } = useGithubRepos(profile.github);
  const own = repos.filter((r) => !r.fork);
  const stars = own.reduce((sum, r) => sum + (r.stars || 0), 0);
  const lastPush = timeAgo(own[0]?.updatedAt);
  const live = (n) => (loading ? '··' : own.length ? pad(n) : '—');

  const specs = [
    { label: 'Role', value: profile.role },
    { label: 'School', value: profile.school },
    { label: 'Stack', value: 'React · Laravel · QML' },
    { label: 'Status', value: 'Open for collaborations' },
  ];

  const stats = [
    { value: pad(featuredProjects.length), label: 'Featured projects' },
    { value: live(own.length), label: 'Public repos' },
    { value: live(stars), label: 'GitHub stars' },
    { value: pad(totalSkills), label: 'Tools in stack' },
  ];

  return (
    <section className={styles.hero} id="home">
      {/* Seni dither: kanji 太郎 dalam halftone, keluar ke tepi kanan & di belakang navbar */}
      <div className={styles.art}>
        <span className={styles.reading} aria-hidden="true">
          TA — RŌ
        </span>
        <svg className={styles.circle} viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="49.6" />
        </svg>
        <KanjiArt
          glyphs={profile.kanji}
          alt={`Halftone kanji ${profile.kanji} (${profile.name})`}
          cell={6}
          fit="contain"
          focus={[0.45, 0.5]}
          levels={[0.04, 0.95]}
          gamma={1}
          fade={0.12}
          className={styles.dither}
        />
      </div>

      <div className={`container-wide ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            <span className={styles.dot} aria-hidden="true" />
            Portfolio · {new Date().getFullYear()} · Informatics
          </p>

          <h1 className={`display ${styles.name}`}>{profile.name}</h1>

          <p className={styles.tagline}>
            <span className={styles.kanji}>{profile.kanji}</span>
            <span className={styles.voice}>Build it at night. Ship it on Monday.</span>
          </p>

          <SpecList items={specs} className={styles.specs} />

          <ul className={styles.stats}>
            {stats.map((s) => (
              <li key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a href="#work" className="btn btn-primary">
              View work <IconArrowRight size={14} />
            </a>
            <a
              href={profile.githubUrl}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub size={14} /> GitHub
            </a>
          </div>

          <p className={styles.meta}>
            <IconStar size={12} className="accent" />
            {own.length
              ? `${stars} stars · ${own.length} repos${lastPush ? ` · last push ${lastPush}` : ''}`
              : `@${profile.github} on GitHub`}
          </p>
        </div>
      </div>
    </section>
  );
}
