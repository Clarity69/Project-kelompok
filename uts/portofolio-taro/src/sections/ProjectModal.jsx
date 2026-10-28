import { useEffect, useRef } from 'react';
import SpecList from './SpecList';
import { IconArrowLeft, IconArrowRight, IconArrowUpRight, IconClose, IconStar } from './Icons';
import styles from '../components/projectmodal.module.css';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Modal detail proyek (pakai <dialog> bawaan browser).
 * - project : object proyek yang dibuka (null = tertutup)
 * - onClose : tombol X, klik backdrop, atau Esc
 * - onStep  : (opsional) pindah ke proyek sebelum/sesudah, dir = -1 | 1
 * - position: (opsional) { index, total } untuk penanda "03 / 07"
 *
 * Field yang dipakai kalau ada: image, fileName, title, description, points,
 * tech, github, demo, stars.
 */
export default function ProjectModal({ project, onClose, onStep, position }) {
  const dialogRef = useRef(null);
  const returnFocus = useRef(null);

  // Buka / tutup <dialog> mengikuti state project
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      returnFocus.current = document.activeElement;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  // Saat dialog tertutup (Esc / X / backdrop): lepas kunci scroll, kembalikan fokus
  useEffect(() => {
    const dialog = dialogRef.current;
    const onDialogClose = () => {
      document.body.style.overflow = '';
      returnFocus.current?.focus?.({ preventScroll: true });
      onClose();
    };
    dialog.addEventListener('close', onDialogClose);
    return () => {
      dialog.removeEventListener('close', onDialogClose);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Panah kiri/kanan untuk pindah proyek
  const onKeyDown = (e) => {
    if (!onStep) return;
    if (e.key === 'ArrowRight') onStep(1);
    if (e.key === 'ArrowLeft') onStep(-1);
  };

  // Klik di luar panel (di backdrop) menutup modal
  const onBackdrop = (e) => {
    if (e.target === dialogRef.current) dialogRef.current.close();
  };

  const specs = project
    ? [
        project.fileName && {
          label: 'File',
          value: <code className={styles.code}>{project.fileName}</code>,
        },
        project.tech?.length && { label: 'Stack', value: project.tech.join(' · ') },
        project.stars != null && {
          label: 'Stars',
          value: (
            <span className={styles.stars}>
              <IconStar size={12} /> {project.stars}
            </span>
          ),
        },
      ].filter(Boolean)
    : [];

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClick={onBackdrop}
      onKeyDown={onKeyDown}
      aria-labelledby="project-modal-title"
    >
      {project && (
        <div className={styles.panel}>
          <header className={styles.bar}>
            <span className={styles.barLabel}>
              {position ? `Project ${pad(position.index + 1)} / ${pad(position.total)}` : 'Repository'}
            </span>
            <div className={styles.barActions}>
              {onStep && (
                <>
                  <button type="button" onClick={() => onStep(-1)} aria-label="Previous project">
                    <IconArrowLeft size={14} />
                  </button>
                  <button type="button" onClick={() => onStep(1)} aria-label="Next project">
                    <IconArrowRight size={14} />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => dialogRef.current.close()}
                aria-label="Close"
                className={styles.close}
              >
                <IconClose size={14} />
              </button>
            </div>
          </header>

          {project.image && (
            <div className={styles.media}>
              <img key={project.image} src={project.image} alt={`Screenshot of ${project.title}`} />
            </div>
          )}

          <div className={styles.body}>
            <div className={styles.main}>
              <h2 id="project-modal-title" className={`display ${styles.title}`}>
                {project.title}
              </h2>
              <p className={styles.desc}>{project.description || 'No description yet.'}</p>
              {project.points?.length > 0 && (
                <ul className={styles.points}>
                  {project.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>

            <aside className={styles.side}>
              {specs.length > 0 && <SpecList items={specs} className={styles.specs} />}
              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View source <IconArrowUpRight size={13} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Live demo <IconArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      )}
    </dialog>
  );
}
