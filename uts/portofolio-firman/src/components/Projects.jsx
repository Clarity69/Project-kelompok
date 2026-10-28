export default function Projects({ theme }) {
  const projectList = [
    {
      id: 1,
      title: 'Portofolio',
      desc: 'Website portofolio saya sendiri',
      tech: ['React', 'CSS'],
      image: '/porto.png'
    },
    {
      id: 2,
      title: 'Sistem Informasi Mahasiswa',
      desc: 'Aplikasi pengelolaan data mahasiswa berbasis web menggunakan Laravel.',
      tech: ['Laravel', 'MySQL'],
      image: '/SIM.png'
    },
    {
      id: 3,
      title: 'Aplikasi D-RENT',
      desc: 'Perancangan UI/UX aplikasi penyewaan mobil berbasis mobile dengan navigasi yang intuitif, cepat, dan elegan.',
      tech: ['Figma'],
      image: '/figma.png'
    }
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={{ ...styles.heading, WebkitTextStroke: theme.textStroke }}>Latest Projects</h2>
      <div style={styles.grid}>
        {projectList.map((project) => (
          <div key={project.id} style={{ ...styles.card, background: theme.cardBg, borderColor: theme.borderColor }}>
            <div style={styles.imageContainer}>
              <img src={project.image} alt={project.title} style={styles.projectImage} />
            </div>
            <div style={styles.contentContainer}>
              <h3 style={{ ...styles.cardTitle, color: theme.textColor, WebkitTextStroke: theme.textStroke }}>{project.title}</h3>
              <p style={{ ...styles.desc, color: theme.subText, WebkitTextStroke: theme.subTextStroke }}>{project.desc}</p>
              <div style={styles.tags}>
                {project.tech.map((t, idx) => (
                  <span key={idx} style={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' },
  heading: { fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center', color: '#22c55e' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
  card: { borderRadius: '14px', border: '1px solid', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  imageContainer: { width: '100%', height: '180px', overflow: 'hidden', borderBottom: '1px solid rgba(34, 197, 94, 0.2)' },
  projectImage: { width: '100%', height: '100%', objectFit: 'cover' },
  contentContainer: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 },
  cardTitle: { fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' },
  desc: { margin: '0.5rem 0 1rem 0', fontSize: '0.9rem', lineHeight: '1.5', flex: 1, fontWeight: '500' },
  tags: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' },
  tag: { backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#16a34a', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }
};