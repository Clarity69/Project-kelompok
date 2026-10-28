import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    dark: isDarkMode,
    bg: isDarkMode 
      ? 'linear-gradient(135deg, #0d2818 0%, #1d120c 50%, #2c1810 100%)' 
      : 'linear-gradient(135deg, #f0fdf4 0%, #fef3c7 50%, #fdf4f0 100%)',
    textColor: isDarkMode ? '#f1f5f9' : '#000000',
    textStroke: isDarkMode ? 'none' : '0.4px #000000',
    subText: isDarkMode ? '#94a3b8' : '#000000',
    subTextStroke: isDarkMode ? 'none' : '0.4px #000000',
    cardBg: isDarkMode 
      ? 'linear-gradient(145deg, rgba(20, 83, 45, 0.4) 0%, rgba(67, 40, 24, 0.5) 100%)' 
      : 'rgba(255, 255, 255, 0.9)',
    navBg: isDarkMode ? 'rgba(29, 18, 12, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    borderColor: isDarkMode ? 'rgba(74, 222, 128, 0.25)' : 'rgba(34, 197, 94, 0.4)'
  };

  return (
    /* key={isDarkMode} memastikan animasi berjalan setiap kali tombol tema ditekan */
    <div key={isDarkMode} className="theme-transition" style={{ background: theme.bg, color: theme.textColor, minHeight: '100vh' }}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} theme={theme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;