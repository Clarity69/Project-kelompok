import useTheme from '../context/useTheme';
import { IconMoon, IconSun } from './Icons';
import styles from '../components/themetoggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Bone (light) theme' : 'Switch to Ink (dark) theme'}
      title={isDark ? 'Bone' : 'Ink'}
    >
      {isDark ? <IconSun size={15} /> : <IconMoon size={15} />}
    </button>
  );
}
