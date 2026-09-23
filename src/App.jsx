import Navbar from "./components/Navbar";
import Statement from "./components/Statement";
import Projects from "./components/Projects";
import GitHubActivity from "./components/GitHubActivity";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
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
        <div id="home">
          <About />
        </div>
        <Statement />
        <Projects />
        <GitHubActivity />
        <Research />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
