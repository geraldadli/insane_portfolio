import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Statement />
        <Projects />
        <Research />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
