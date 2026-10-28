import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiLaravel, SiMysql, SiFigma } from 'react-icons/si';

export default function Skills({ theme }) {
  const skillList = [
    { name: 'HTML', icon: <FaHtml5 color="#e34f26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572b6" /> },
    { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
    { name: 'React.js', icon: <FaReact color="#61dafb" /> },
    { name: 'PHP', icon: <FaPhp color="#777bb3" /> },
    { name: 'Laravel', icon: <SiLaravel color="#ff2d20" /> },
    { name: 'Python', icon: <FaPython color="#3776ab" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479a1" /> },
    { name: 'Git & VS Code', icon: <FaGitAlt color="#f05032" /> },
    { name: 'Figma', icon: <SiFigma color="#f24e1e" /> },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={{ ...styles.heading, WebkitTextStroke: theme.textStroke }}>My Skills</h2>
      <div style={styles.grid}>
        {skillList.map((skill, idx) => (
          <div key={idx} style={{ ...styles.skillCard, background: theme.cardBg, borderColor: theme.borderColor }}>
            <span style={styles.iconStyle}>{skill.icon}</span>
            <span style={{ ...styles.skillName, color: theme.textColor, WebkitTextStroke: theme.textStroke }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', maxWidth: '1000px', margin: '0 auto' },
  heading: { fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center', color: '#22c55e' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' },
  skillCard: { 
    padding: '1.2rem 1.5rem', 
    borderRadius: '12px', 
    border: '1px solid', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '1rem', 
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease'
  },
  iconStyle: { fontSize: '1.8rem', display: 'flex', alignItems: 'center' },
  skillName: { fontWeight: '600', fontSize: '1rem' }
};