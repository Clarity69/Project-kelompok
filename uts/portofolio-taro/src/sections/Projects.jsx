import { useCallback, useMemo, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import ImageFrame from './ImageFrame';
import SpecList from './SpecList';
import ProjectModal from './ProjectModal';
import { IconArrowLeft, IconArrowRight, IconArrowUpRight, IconExpand, IconStar } from './Icons';
import useGithubRepos from '../hooks/useGithubRepos';
import { featuredProjects, otherProjects, hiddenRepos, previewImages } from '../data/projectsData';
import { profile, sections } from '../data/siteData';
import styles from '../components/projects.module.css';

const meta = sections.find((s) => s.id === 'work');
const pad = (n) => String(n).padStart(2, '0');

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = featuredProjects[index];
  const total = featuredProjects.length;
  const { repos, loading, error } = useGithubRepos(profile.github);

  // Modal: { list: 'featured' | 'more', i } — null = tertutup
  const [open, setOpen] = useState(null);
  const closeModal = useCallback(() => setOpen(null), []);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  // Geser (swipe) kiri/kanan di HP untuk pindah proyek
  const touch = useRef(null);
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    // hanya geseran horizontal yang jelas, supaya scroll vertikal tidak terganggu
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
  };

  // Panah kiri/kanan saat fokus di showroom
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  // "More on GitHub": repo dari API selain yang sudah ditampilkan
  const more = useMemo(() => {
    const featured = new Set(
      featuredProjects.map((p) => p.github?.split('/').pop()?.toLowerCase())
    );
    const hidden = new Set(hiddenRepos.map((n) => n.toLowerCase()));
    const fromApi = repos
      .filter((r) => !r.fork && !featured.has(r.name.toLowerCase()) && !hidden.has(r.name.toLowerCase()))
      .slice(0, 8)
      .map((r) => ({
        name: r.name,
        description: r.description,
        tech: r.language ? [r.language] : [],
        url: r.url,
        stars: r.stars,
        image: previewImages[r.name.toLowerCase()],
      }));
    if (fromApi.length) return fromApi;
    return otherProjects.map((p) => ({
      name: p.title,
      description: p.description,
      tech: p.tech,
      url: p.github,
      stars: null,
      image: p.image,
    }));
  }, [repos]);

  // Bentuk data yang sama untuk modal, dari dua daftar berbeda
  const modalList = open?.list === 'more'
    ? more.map((r) => ({
        title: r.name,
        description: r.description,
        tech: r.tech,
        github: r.url,
        stars: r.stars,
        image: r.image,
      }))
    : featuredProjects;
  const modalProject = open ? modalList[open.i] : null;
  const stepModal = (dir) => {
    const n = modalList.length;
    const i = (open.i + dir + n) % n;
    if (open.list === 'featured') setIndex(i); // stage ikut pindah di belakang modal
    setOpen({ ...open, i });
  };

  const specs = [
    { label: 'File', value: <code className={styles.code}>{project.fileName}</code> },
    { label: 'Stack', value: project.tech.join(' · ') },
    {
      label: 'Links',
      value: (
        <span className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-underline">
              Source
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-underline">
              Live demo
            </a>
          )}
        </span>
      ),
    },
  ];

  return (
    <section className={styles.work} id="work">
      <div className="container-narrow">
        <SectionHeader num={meta.num} label={meta.label} kanji={meta.kanji} />

        <div className={styles.intro}>
          <h2 className={`display ${styles.title}`}>Selected work.</h2>
          <p className={styles.sub}>
            Things I've built for class, for my desktop and for fun. Pick one from the index, then
            open the details.
          </p>
        </div>

        {/* ---------- showroom ---------- */}
        <div
          className={styles.showroom}
          tabIndex={0}
          onKeyDown={onKeyDown}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
        >
          <div className={styles.stageRow}>
          <div className={styles.stageCol} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <ImageFrame className={styles.stage}>
            <button
              type="button"
              className={styles.stageOpen}
              onClick={() => setOpen({ list: 'featured', i: index })}
              aria-label={`Open details for ${project.title}`}
            >
              <img
                key={project.id}
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className={styles.stageImg}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <span className={styles.stageHint} aria-hidden="true">
                <IconExpand size={13} /> View details
              </span>
            </button>
            <div className={styles.stageBar}>
              <span className={styles.counter} aria-live="polite">
                {pad(index + 1)} / {pad(total)}
              </span>
              <div className={styles.arrows}>
                <button type="button" onClick={() => go(-1)} aria-label="Previous project">
                  <IconArrowLeft size={14} />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next project">
                  <IconArrowRight size={14} />
                </button>
              </div>
            </div>
          </ImageFrame>

          <ul className={styles.thumbs}>
            {featuredProjects.map((p, i) => (
              <li key={p.id}>
                <button
                  type="button"
                  className={`${styles.thumb} ${i === index ? styles.thumbActive : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${p.title}`}
                  aria-current={i === index ? 'true' : undefined}
                >
                  <span className={styles.thumbImg}>
                    <img src={p.image} alt="" loading="lazy" />
                  </span>
                  <span className={styles.thumbLabel}>
                    <span className={styles.thumbNum}>{pad(i + 1)}</span> {p.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          </div>

          {/* Indeks: semua proyek terbaca sekaligus, klik untuk membuka di stage */}
          <nav className={styles.index} aria-label="Project index">
            <p className={`eyebrow ${styles.indexHead}`}>
              <span>Index</span>
              <span>{pad(total)}</span>
            </p>
            <ol>
              {featuredProjects.map((p, i) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className={`${styles.indexRow} ${i === index ? styles.indexActive : ''}`}
                    onClick={() => setIndex(i)}
                    aria-current={i === index ? 'true' : undefined}
                  >
                    <span className={styles.indexNum}>{pad(i + 1)}</span>
                    <span className={styles.indexBody}>
                      <span className={styles.indexTitle}>{p.title}</span>
                      <span className={styles.indexTech}>{p.tech.slice(0, 2).join(' · ')}</span>
                    </span>
                    <IconArrowRight size={12} className={styles.indexArrow} />
                  </button>
                </li>
              ))}
            </ol>
          </nav>
          </div>

          {/* ---------- detail ---------- */}
          <div className={styles.detail}>
            <div>
              <p className="eyebrow">Project {pad(index + 1)}</p>
              <h3 className={`display ${styles.projectTitle}`}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
              <ul className={styles.points}>
                {project.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn btn-outline ${styles.detailBtn}`}
                onClick={() => setOpen({ list: 'featured', i: index })}
              >
                <IconExpand size={13} /> Open details
              </button>
            </div>
            <SpecList items={specs} className={styles.specs} />
          </div>
        </div>

        {/* ---------- more ---------- */}
        <div className={styles.more}>
          <div className={styles.moreHead}>
            <h3 className={styles.moreTitle}>More on GitHub.</h3>
            <span className="eyebrow">
              {loading ? 'Loading…' : error ? 'Offline list' : `${more.length} repos`}
            </span>
          </div>
          <ul className={styles.repoList}>
            {more.map((r, i) => (
              <li key={r.name} className={styles.repoItem}>
                <button
                  type="button"
                  className={styles.repo}
                  onClick={() => setOpen({ list: 'more', i })}
                  aria-label={`Open details for ${r.name}`}
                >
                  <span className={styles.repoName}>{r.name}</span>
                  <span className={styles.repoDesc}>{r.description || 'No description yet.'}</span>
                  <span className={styles.repoTech}>{r.tech.join(' · ')}</span>
                  <span className={styles.repoStars}>
                    {r.stars != null && (
                      <>
                        <IconStar size={11} /> {r.stars}
                      </>
                    )}
                  </span>
                  <IconExpand size={14} className={styles.repoArrow} />
                </button>
              </li>
            ))}
          </ul>
          <a
            href={`${profile.githubUrl}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline ${styles.allRepos}`}
          >
            All repositories <IconArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <ProjectModal
        project={modalProject}
        onClose={closeModal}
        onStep={modalList.length > 1 ? stepModal : undefined}
        position={open ? { index: open.i, total: modalList.length } : undefined}
      />
    </section>
  );
}
