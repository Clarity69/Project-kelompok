export default function Hero({ theme }) {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.textPart}>
          <span style={styles.welcomeBadge}>Welcome</span>
          <h1 style={{ ...styles.title, color: theme.textColor, WebkitTextStroke: theme.textStroke }}>
            Halo, Saya <span style={styles.gradientText}>Firman</span>
          </h1>
          <p style={{ ...styles.subtitle, color: theme.subText, WebkitTextStroke: theme.subTextStroke }}>
            Saya seorang pengembang web yang berfokus membangun website modern, interaktif, dan efisien dengan keahlian di bidang HTML, CSS, JavaScript, dan Laravel.
          </p>
          <div style={styles.statsContainer}>
            <div style={{ ...styles.statBox, background: theme.dark ? 'rgba(20, 83, 45, 0.25)' : 'rgba(34, 197, 94, 0.15)', borderColor: theme.borderColor }}>
              <h3 style={{ ...styles.statNum, WebkitTextStroke: theme.textStroke }}>5+</h3>
              <p style={{ ...styles.statText, color: theme.subText, WebkitTextStroke: theme.subTextStroke }}>Project Completed</p>
            </div>
            <div style={{ ...styles.statBox, background: theme.dark ? 'rgba(20, 83, 45, 0.25)' : 'rgba(34, 197, 94, 0.15)', borderColor: theme.borderColor }}>
              <h3 style={{ ...styles.statNum, WebkitTextStroke: theme.textStroke }}>1+</h3>
              <p style={{ ...styles.statText, color: theme.subText, WebkitTextStroke: theme.subTextStroke }}>Years Experience</p>
            </div>
          </div>
          <div style={styles.btnGroup}>
            <a href="#about" style={styles.primaryBtn}>Learn More →</a>
            <a href="#contact" style={{ ...styles.secondaryBtn, color: theme.textColor, borderColor: theme.borderColor, WebkitTextStroke: theme.textStroke }}>Hire Me</a>
          </div>
        </div>

        <div style={styles.imagePart}>
          <div style={styles.imageWrapper}>
            <img src="/profil.png" alt="Foto Profil Firman" style={styles.profileImg} />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: { padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' },
  container: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' },
  textPart: { flex: 1, minWidth: '300px' },
  imagePart: { display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '280px' },
  imageWrapper: { width: '280px', height: '280px', borderRadius: '50%', padding: '6px', background: 'linear-gradient(135deg, #4ade80 0%, #854d0e 100%)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' },
  profileImg: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' },
  welcomeBadge: { background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', border: '1px solid rgba(74, 222, 128, 0.3)', fontWeight: '600' },
  title: { fontSize: '3rem', margin: '1rem 0', fontWeight: 'bold' },
  gradientText: { background: 'linear-gradient(90deg, #22c55e 0%, #b45309 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  subtitle: { fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.7', fontWeight: '500' },
  statsContainer: { display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' },
  statBox: { padding: '1rem 1.5rem', borderRadius: '10px', border: '1px solid' },
  statNum: { color: '#22c55e', fontSize: '1.5rem', fontWeight: 'bold' },
  statText: { fontSize: '0.8rem', fontWeight: '600' },
  btnGroup: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  primaryBtn: { padding: '0.8rem 1.8rem', background: 'linear-gradient(135deg, #22c55e 0%, #854d0e 100%)', color: '#fff', fontWeight: 'bold', borderRadius: '8px', boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)' },
  secondaryBtn: { padding: '0.8rem 1.8rem', background: 'transparent', fontWeight: 'bold', borderRadius: '8px', border: '1px solid' }
};