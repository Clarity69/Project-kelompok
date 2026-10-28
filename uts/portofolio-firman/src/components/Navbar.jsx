export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Firman<span style={styles.dot}>.</span></h2>
      <ul style={styles.menu}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICE</a></li>
        <li><a href="#projects">PROJECT</a></li>
        <li><a href="#skills">SKILL</a></li>
        <li><a href="#contact">CONTACT</a></li>
        {/* Tombol Ganti Tema */}
        <li>
          <button onClick={toggleTheme} style={styles.themeBtn}>
            {isDarkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 3rem',
    background: 'rgba(29, 18, 12, 0.9)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid rgba(74, 222, 128, 0.2)'
  },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', color: '#f1f5f9', letterSpacing: '1px' },
  dot: { color: '#4ade80' },
  menu: { display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '0.9rem', fontWeight: '500', color: '#cbd5e1', alignItems: 'center' },
  themeBtn: {
    background: 'linear-gradient(135deg, #22c55e 0%, #854d0e 100%)',
    color: '#fff',
    border: 'none',
    padding: '0.4rem 0.9rem',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.85rem'
  }
};