import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import useReveal from './hooks/useReveal';
import data from './data/portfolio';

export default function App() {
    useReveal();

    return (
        <>
            <Navbar name={data.profile.nickname} />
            <main>
                <Hero profile={data.profile} socials={data.socials} />
                <Stats stats={data.profile.stats} />
                <About profile={data.profile} />
                <Experience experiences={data.experiences} />
                <Projects projects={data.projects} />
                <Skills skills={data.skills} />
                <Education education={data.education} certificates={data.certificates} />
                <Contact profile={data.profile} socials={data.socials} />
            </main>
            <Footer profile={data.profile} />
            <BackToTop />
        </>
    );
}
