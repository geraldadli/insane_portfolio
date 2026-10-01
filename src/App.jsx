import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import useMediaQuery from "./hooks/useMediaQuery";
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
  const nativeScroll = useMediaQuery("(prefers-reduced-motion: reduce), (pointer: coarse)");
  useEffect(() => {
    if (nativeScroll) return;
    const scroll = new Lenis({ autoRaf: true, lerp: 0.075 });
    // Cancel wheel momentum before the browser follows an in-page link.
    const followAnchor = (event) => {
      if (!event.target.closest('a[href^="#"]')) return;
      scroll.stop();
      scroll.start();
    };
    document.addEventListener("click", followAnchor, true);
    return () => {
      document.removeEventListener("click", followAnchor, true);
      scroll.destroy();
    };
  }, [nativeScroll]);

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
