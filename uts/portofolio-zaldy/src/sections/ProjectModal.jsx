import { useCallback, useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaXmark } from 'react-icons/fa6';
import styles from '../components/projectmodal.module.css';

// Cek gambar mana yang benar-benar ada, supaya slot kosong tidak ikut tampil
function useAvailableImages(list) {
  const key = list.join('|');
  const [result, setResult] = useState({ key: '', images: null });

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      list.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
          })
      )
    ).then((found) => {
      if (!cancelled) setResult({ key, images: found.filter(Boolean) });
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return result.key === key ? result.images : null; // null = masih memuat
}

export default function ProjectModal({ project, onClose }) {
  const images = useAvailableImages(project.images);
  const [index, setIndex] = useState(0);
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  const total = images ? images.length : 0;
  const multi = total > 1;

  const go = useCallback(
    (dir) => {
      if (total > 1) setIndex((i) => (i + dir + total) % total);
    },
    [total]
  );

  // Kunci scroll halaman, fokus ke tombol tutup, kembalikan fokus saat ditutup
  useEffect(() => {
    const previous = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      previous?.focus?.();
    };
  }, []);

  // Keyboard: Esc tutup, panah kiri/kanan ganti gambar, Tab berputar di dalam jendela
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') return onClose();
      if (e.key === 'ArrowLeft') return go(-1);
      if (e.key === 'ArrowRight') return go(1);
      if (e.key === 'Tab' && panelRef.current) {
        const items = panelRef.current.querySelectorAll('button:not([disabled])');
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [go, onClose]);

  return (
    <div className={styles.backdrop} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.titleLines[0]} — project preview`}
      >
        <div className={styles.header}>
          <div className={styles.headLeft}>
            <span className={styles.counter} aria-live="polite">
              <b>{images ? Math.min(index + 1, Math.max(total, 1)) : '–'}</b> / {images ? Math.max(total, 1) : '–'}
            </span>
            <i className={styles.live} aria-hidden="true" />
            <span className={styles.title}>{project.titleLines[0]}</span>
          </div>
          <button ref={closeRef} type="button" className={styles.close} aria-label="Close" onClick={onClose}>
            <FaXmark size={20} />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.frame}>
            {images === null && <p className={styles.note}>Loading…</p>}
            {images && total === 0 && <p className={styles.note}>Image coming soon</p>}
            {images && total > 0 && (
              <img
                key={images[index]}
                src={images[index]}
                alt={`${project.titleLines[0]} — image ${index + 1} of ${total}`}
                className={styles.image}
              />
            )}
          </div>
        </div>

        {multi && (
          <div className={styles.nav}>
            <button type="button" className={`${styles.btn} ${styles.prev}`} onClick={() => go(-1)}>
              <FaArrowLeft size={11} /> PREV
            </button>
            <div className={styles.dots} role="tablist" aria-label="Choose image">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Image ${i + 1}`}
                  className={`${styles.dot} ${i === index ? styles.dotOn : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button type="button" className={`${styles.btn} ${styles.next}`} onClick={() => go(1)}>
              NEXT <FaArrowRight size={11} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
