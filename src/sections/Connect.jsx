import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaPaperPlane, FaBolt } from 'react-icons/fa6';
import { siteData } from '../data/siteData';
import styles from '../components/connect.module.css';

const socials = [
  { key: 'github', label: 'GitHub', Icon: FaGithub, size: 19 },
  { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin, size: 18 },
  { key: 'instagram', label: 'Instagram', Icon: FaInstagram, size: 18 },
];

// Link Gmail (compose) dengan penerima, subjek, dan isi pesan yang sudah terisi
const gmailLink =
  'https://mail.google.com/mail/?view=cm&fs=1' +
  `&to=${encodeURIComponent(siteData.email)}` +
  `&su=${encodeURIComponent(siteData.emailSubject)}` +
  `&body=${encodeURIComponent(siteData.emailBody)}`;

// Pesan dari form dikirim ke Formspree → diteruskan ke email Anda
const FORM_ENDPOINT = 'https://formspree.io/f/xgaaawlb';

export default function Connect() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status !== 'sending' && status !== 'idle') setStatus('idle');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'New message from your portfolio' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setForm({ name: '', email: '', message: '' });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={styles.wrap} id="contact">
      <div className="container">
        <div className={styles.box}>
          <span className={styles.badge}>CONTACT</span>

          <div className={styles.grid}>
            <div className={styles.left}>
              <div className={styles.intro}>
                <h2 className={styles.title}>
                  LET&apos;S BUILD<br /><span className={styles.red}>SOMETHING TOGETHER</span>
                </h2>
                <p className={styles.lead}>
                  Have a project in mind, an opportunity to discuss, or just want to connect? Send me a message or
                  find me on social media!
                </p>
                <a href={gmailLink} target="_blank" rel="noopener noreferrer" className={styles.callout}>
                  <span className={styles.calloutText}>
                    <FaBolt size={13} /> HIRE ME TO UNLOCK MY POTENTIAL
                  </span>
                  <span aria-hidden="true">➔</span>
                </a>
              </div>

              <div className={styles.socials}>
                {socials.map(({ key, label, Icon, size }) => (
                  <a key={key} href={siteData.socials[key]} className={styles.social} aria-label={label}>
                    <Icon size={size} />
                  </a>
                ))}
              </div>
            </div>

            <form className={styles.form} onSubmit={onSubmit}>
              <label className={styles.field}>
                <span className={styles.label}>YOUR NAME</span>
                <input name="name" type="text" placeholder="e.g. John Doe" value={form.name} onChange={onChange} required />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>YOUR EMAIL</span>
                <input name="email" type="email" placeholder="e.g. john@example.com" value={form.email} onChange={onChange} required />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>YOUR MESSAGE</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="What would you like to build or discuss?"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </label>
              <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'} <FaPaperPlane size={14} />
              </button>

              <p
                className={`${styles.status} ${status === 'success' ? styles.ok : ''} ${status === 'error' ? styles.fail : ''}`}
                role="status"
                aria-live="polite"
              >
                {status === 'success' && 'Message sent! Thank you, I will get back to you soon.'}
                {status === 'error' && 'Something went wrong. Please try again, or email me directly.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}