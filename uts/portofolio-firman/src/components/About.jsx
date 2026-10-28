export default function About({ theme }) {
  return (
    <section id="about" style={styles.section}>
      <h2 style={{ ...styles.sectionTitle, WebkitTextStroke: theme.textStroke }}>About Me</h2>
      <div style={{ ...styles.cardAbout, background: theme.cardBg, borderColor: theme.borderColor }}>
        <p style={{ ...styles.desc, color: theme.subText, WebkitTextStroke: theme.subTextStroke }}>
          Halo, nama saya Firman. Saya adalah seorang pengembang web dan mahasiswa Informatika di STITEK Bontang yang memiliki minat besar dalam membangun pengalaman digital yang tidak hanya fungsional, tetapi juga estetis. Saya berkembang melalui kecintaan terhadap dunia pemrograman—sebuah perpaduan antara logika yang presisi dan kreativitas tanpa batas.
        </p>
        <div style={styles.infoGrid}>
          <div style={{ ...styles.infoItem, color: theme.textColor, WebkitTextStroke: theme.textStroke }}>
            📍 <strong>My Location:</strong> Bontang, Kalimantan Timur
          </div>
          <div style={{ ...styles.infoItem, color: theme.textColor, WebkitTextStroke: theme.textStroke }}>
            📞 <strong>My Phone:</strong> +62 812-9229-9176
          </div>
        </div>
      </div>

      <div id="services" style={{ marginTop: '4rem' }}>
        <h2 style={{ ...styles.sectionTitle, WebkitTextStroke: theme.textStroke }}>My Services</h2>
        <div style={styles.serviceGrid}>
          <div style={{ ...styles.serviceCard, background: theme.cardBg, borderColor: theme.borderColor }}>
            <h3 style={{ color: theme.textColor, WebkitTextStroke: theme.textStroke }}>💻 Web Development</h3>
            <p style={{ ...styles.serviceDesc, color: theme.subText, WebkitTextStroke: theme.subTextStroke }}>Membuat website responsif, cepat, dan modern menggunakan React, Laravel, dan teknologi web terkini.</p>
          </div>
          <div style={{ ...styles.serviceCard, background: theme.cardBg, borderColor: theme.borderColor }}>
            <h3 style={{ color: theme.textColor, WebkitTextStroke: theme.textStroke }}>🎨 UI/UX Design</h3>
            <p style={{ ...styles.serviceDesc, color: theme.subText, WebkitTextStroke: theme.subTextStroke }}>Merancang antarmuka pengguna yang menarik dan ramah pengguna (user-friendly) berbasis Figma.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', maxWidth: '1000px', margin: '0 auto' },
  sectionTitle: { fontSize: '2rem', marginBottom: '1.5rem', color: '#22c55e', textAlign: 'center' },
  cardAbout: { padding: '2.5rem', borderRadius: '16px', border: '1px solid' },
  desc: { lineHeight: '1.8', marginBottom: '1.5rem', fontWeight: '500' },
  infoGrid: { display: 'flex', flexDirection: 'column', gap: '0.8rem' },
  infoItem: { background: 'rgba(0,0,0,0.1)', padding: '0.8rem 1rem', borderRadius: '8px', borderLeft: '4px solid #22c55e', fontWeight: '500' },
  serviceGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' },
  serviceCard: { padding: '2rem', borderRadius: '12px', border: '1px solid' },
  serviceDesc: { fontSize: '0.95rem', marginTop: '0.8rem', fontWeight: '500' }
};