export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Portofolio Saya. Dibuat dengan React.js.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '2rem',
    background: '#120b08',
    marginTop: '4rem',
    color: '#71717a',
    borderTop: '1px solid rgba(133, 77, 14, 0.2)'
  }
};