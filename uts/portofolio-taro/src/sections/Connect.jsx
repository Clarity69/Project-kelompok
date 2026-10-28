import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import {
  IconArrowUpRight,
  IconCheck,
  IconCopy,
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconMail,
} from './Icons';
import { profile, sections } from '../data/siteData';
import styles from '../components/connect.module.css';

const meta = sections.find((s) => s.id === 'contact');

// Buka jendela tulis email langsung di Gmail (tab baru), penerima & subjek sudah terisi
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent('Hi Taro')}`;

// Kanal sosial: tampil sebagai baris di kolom kanan panel
const socials = [
  {
    icon: IconGithub,
    title: 'GitHub',
    handle: `@${profile.github}`,
    text: 'Source code and experiments',
    href: profile.githubUrl,
  },
  {
    icon: IconLinkedin,
    title: 'LinkedIn',
    handle: 'Ahmad Taroqi',
    text: 'Collaborations and internships',
    href: profile.linkedinUrl,
  },
  {
    icon: IconInstagram,
    title: 'Instagram',
    handle: `@${profile.instagram}`,
    text: 'Daily life and desk setups',
    href: `https://www.instagram.com/${profile.instagram}/`,
  },
];

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const emailRef = useRef(null);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Salin alamat email; kalau clipboard ditolak, blok teksnya supaya bisa disalin manual
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(emailRef.current);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  return (
    <section className={styles.connect} id="contact">
      <div className="container-narrow">
        <SectionHeader num={meta.num} label={meta.label} kanji={meta.kanji} />

        {/* Satu-satunya panel "bone" di halaman */}
        <div className={styles.panel}>
          <div className={styles.copy}>
            <h2 className={`display ${styles.title}`}>Let's build something.</h2>
            <p className={styles.lead}>
              Interested in my work? I'm open to collaborations, class projects and internships.
              Email is the fastest way to reach me.
            </p>

            {/* Email: alamat terlihat penuh + tombol kirim & salin */}
            <div className={styles.email}>
              <p className={styles.emailLabel}>Email</p>
              <a
                ref={emailRef}
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.emailAddress}
              >
                {profile.email}
              </a>
              <div className={styles.emailActions}>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSolid}
                >
                  <IconMail size={14} /> Send via Gmail
                </a>
                <button type="button" className={styles.btnLine} onClick={copyEmail}>
                  {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                  {copied ? 'Copied' : 'Copy address'}
                </button>
                <span className={styles.srOnly} aria-live="polite">
                  {copied ? 'Email address copied' : ''}
                </span>
              </div>
            </div>

            <p className={styles.note}>Usually replies within a day or two.</p>
          </div>

          <div className={styles.side}>
            <p className={styles.sideLabel}>Elsewhere</p>
            <ul className={styles.socials}>
              {socials.map(({ icon: Icon, ...s }) => (
                <li key={s.title}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.social}
                  >
                    <Icon size={18} className={styles.socialIcon} />
                    <span className={styles.socialBody}>
                      <span className={styles.socialTitle}>
                        {s.title}
                        <span className={styles.socialHandle}>{s.handle}</span>
                      </span>
                      <span className={styles.socialText}>{s.text}</span>
                    </span>
                    <IconArrowUpRight size={14} className={styles.socialArrow} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
