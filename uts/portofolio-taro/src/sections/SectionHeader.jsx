import styles from '../components/sectionheader.module.css';

// "01  WORK ───────────────── 作"
export default function SectionHeader({ num, label, kanji }) {
  return (
    <div className={styles.header}>
      <span className={styles.num}>{num}</span>
      <span className={styles.label}>{label}</span>
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.kanji} aria-hidden="true">
        {kanji}
      </span>
    </div>
  );
}
