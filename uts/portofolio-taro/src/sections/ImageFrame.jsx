import styles from '../components/imageframe.module.css';

// Bingkai garis tipis dengan siku "L" kecil di keempat sudut.
export default function ImageFrame({ children, caption, className = '' }) {
  return (
    <figure className={`${styles.frame} ${className}`}>
      <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
      <div className={styles.inner}>{children}</div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
