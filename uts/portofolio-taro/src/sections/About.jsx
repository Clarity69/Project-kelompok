import SectionHeader from './SectionHeader';
import ImageFrame from './ImageFrame';
import DitherImage from './DitherImage';
import SpecList from './SpecList';
import { profile, sections } from '../data/siteData';
import portrait from '../assets/portrait.webp';
import styles from '../components/about.module.css';

const meta = sections.find((s) => s.id === 'about');

const quickFacts = [
  { label: 'Education', value: `Informatics · ${profile.school}` },
  { label: 'Primary', value: 'React, Laravel, JS/TS' },
  { label: 'Interests', value: 'Web dev, IoT, data' },
  { label: 'Desktop', value: 'Hyprland + Quickshell' },
];

const pillars = [
  {
    kanji: '学',
    title: 'Learn by doing.',
    text: 'I learn a tool by shipping something real with it — then breaking it, debugging it and writing it up.',
  },
  {
    kanji: '作',
    title: 'Build the whole thing.',
    text: 'From a Laravel back end to a React front end to the shell my desktop runs on, I like owning every layer.',
  },
  {
    kanji: '探',
    title: 'Stay curious.',
    text: 'Homelab containers, IoT sensors, data mining — I keep a side project going in whatever I don’t understand yet.',
  },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container-narrow">
        <SectionHeader num={meta.num} label={meta.label} kanji={meta.kanji} />

        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={`display ${styles.title}`}>Hey, I'm {profile.name}.</h2>
            <p className="lead">
              I'm an informatics student with a deep interest in software development and how
              systems work behind the scenes. I enjoy solving messy problems and turning them into
              small, reliable apps.
            </p>

            <p className={`voice ${styles.voice}`}>
              Curiosity first. <br />
              Clean code second.
            </p>

            <p className={styles.body}>
              Most of what's on this page started as coursework or a late-night itch — a notes app
              for a React course, a student information system with my class, a desktop shell for my
              own laptop. My philosophy is simple: build real projects, experiment, debug, and keep
              improving the code.
            </p>

            <SpecList items={quickFacts} className={styles.facts} />
          </div>

          <ImageFrame className={styles.figure} caption="fig. 01 — the face behind the commits">
            <DitherImage
              src={portrait}
              alt={`Close-up halftone portrait of ${profile.name}`}
              cell={5}
              zoom={1.9}
              focus={[0.5, 0.42]}
              levels={[0.06, 0.8]}
              gamma={1.05}
              fade={0}
            />
          </ImageFrame>
        </div>

        <ul className={styles.pillars}>
          {pillars.map((p) => (
            <li key={p.title} className={styles.pillar}>
              <span className={styles.pillarKanji} aria-hidden="true">
                {p.kanji}
              </span>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarText}>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
