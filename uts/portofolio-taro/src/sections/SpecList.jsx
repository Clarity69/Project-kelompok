import styles from '../components/speclist.module.css';

// Daftar "LABEL ─────── value" seperti spesifikasi di hero.
export default function SpecList({ items, className = '' }) {
  return (
    <dl className={`${styles.list} ${className}`}>
      {items.map((item) => (
        <div key={item.label} className={styles.row}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
