import { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Connect from './sections/Connect';
import Footer from './sections/Footer';

export default function App() {
  // Animasi muncul saat scroll — Hero dikecualikan supaya langsung terlihat
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const sections = document.querySelectorAll('main section:not(:first-of-type)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // cukup sekali per section
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
