import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientBanner from "./components/ClientBanner";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/portfolioData";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#070C1E]">
      <Navbar
        logo={portfolioData.logo}
        navLinks={portfolioData.navLinks}
        ctaButton={portfolioData.ctaButton}
      />
      <Hero data={portfolioData.hero} />
      <ClientBanner clients={portfolioData.clients} />
      <About data={portfolioData.about} />
      <Projects data={portfolioData.projects} />
      <Services data={portfolioData.services} />
      <Contact data={portfolioData.contact} />
      <Footer logo={portfolioData.logo} />
    </div>
  );
}

export default App;
