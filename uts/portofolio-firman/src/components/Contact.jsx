export default function Contact({ theme }) {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.infoBox}>
          <h2 style={{ ...styles.title, WebkitTextStroke: theme.textStroke }}>Contact Me</h2>
          <p style={{ ...styles.desc, color: theme.subText, WebkitTextStroke: theme.subTextStroke }}>
            Let's build something great together. Have a project in mind or just want to chat? Drop me a message and I'll get back to you soon!
          </p>
          <div style={{ ...styles.contactItem, color: theme.textColor, WebkitTextStroke: theme.textStroke, borderColor: theme.borderColor }}>📱 My WhatsApp: +62 812-9229-9176</div>
          <div style={{ ...styles.contactItem, color: theme.textColor, WebkitTextStroke: theme.textStroke, borderColor: theme.borderColor }}>📍 My Address: Bontang, Kalimantan Timur</div>
        </div>

        <div style={{ ...styles.formBox, background: theme.cardBg, borderColor: theme.borderColor }}>
          <h3 style={{ ...styles.formTitle, color: theme.textColor, WebkitTextStroke: theme.textStroke }}>Send Email</h3>
          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" style={{ ...styles.input, color: theme.textColor, borderColor: theme.borderColor }} />
            <input type="email" placeholder="Your Email" style={{ ...styles.input, color: theme.textColor, borderColor: theme.borderColor }} />
            <textarea placeholder="Your Message" rows="4" style={{ ...styles.input, color: theme.textColor, borderColor: theme.borderColor }}></textarea>
            <button type="submit" style={styles.submitBtn}>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', maxWidth: '1000px', margin: '0 auto' },
  container: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' },
  infoBox: { display: 'flex', flexDirection: 'column', gap: '1.2rem' },
  title: { fontSize: '2rem', color: '#22c55e' },
  desc: { lineHeight: '1.7', fontWeight: '500' },
  contactItem: { background: 'rgba(34, 197, 94, 0.1)', padding: '0.9rem', borderRadius: '8px', border: '1px solid', fontWeight: '500' },
  formBox: { padding: '2rem', borderRadius: '14px', border: '1px solid' },
  formTitle: { fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.8rem', borderRadius: '6px', border: '1px solid', background: 'transparent', outline: 'none', fontFamily: 'inherit', fontWeight: '500' },
  submitBtn: { padding: '0.8rem', background: 'linear-gradient(135deg, #22c55e 0%, #854d0e 100%)', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: 'pointer' }
};