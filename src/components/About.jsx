import { motion } from "framer-motion";
import Icon from "./ui/Icon";
import ViewportVideo from "./ui/ViewportVideo";
import ScrollReveal from "./motion/ScrollReveal";
import useMediaQuery from "../hooks/useMediaQuery";

export default function About() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  return (
    <section id="about" className="hero container" aria-labelledby="about-title">
      <div className="hero-kicker">
        <p className="eyebrow"><span className="status-dot" /> DATA SCIENCE / APPLIED AI</p>
        <p className="eyebrow">JAKARTA, INDONESIA <span className="accent">↗</span></p>
      </div>
      <div className="about-intro-grid">
        <div className="hero-copy">
          <h1 id="about-title" aria-label="Gerald Adli">
            {["GERALD", "ADLI."].map((word, index) => (
              <span className="hero-word" key={word} aria-hidden="true">
                <motion.span
                  initial={reduced ? false : { y: "110%", rotate: 3 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >{word}</motion.span>
              </span>
            ))}
          </h1>
          <ScrollReveal distance={20}>
            <p className="hero-description">
              I’m a Computer Science student at BINUS University, graduating in 2028.
              I build apps and research machine learning.
            </p>
            <div className="hero-links">
              <a className="button button-primary" href="#work">Explore my work <Icon name="down" /></a>
              <a className="text-link" href="https://github.com/geraldadli" target="_blank" rel="noreferrer">GitHub <Icon name="diagonal" /></a>
              <a className="text-link" href="https://www.linkedin.com/in/gerald-adli" target="_blank" rel="noreferrer">LinkedIn <Icon name="diagonal" /></a>
            </div>
          </ScrollReveal>
        </div>
        <div className="hero-film">
          <div className="hero-film-heading"><span className="eyebrow">( ABOUT ME )</span><span className="hero-orbit" aria-hidden="true"><Icon name="diagonal" /></span></div>
          <figure className="about-trailer">
            <ViewportVideo src="/videos/portfolio-trailer.mp4" poster="/videos/portfolio-trailer-poster.jpg" width="1920" height="1080" aria-label="Gerald Adli portfolio trailer">
              <a href="/videos/portfolio-trailer.mp4">Download the portfolio trailer</a>
            </ViewportVideo>
            <figcaption><span>THE INTRODUCTION</span><span>00:30 / UNMUTE FOR SOUND</span></figcaption>
          </figure>
        </div>
      </div>
      <div className="credentials-strip">
        <span><strong>04</strong> Research papers</span>
        <span><strong>01</strong> First-author paper</span>
        <span><strong>IBM</strong> Data Science certified</span>
        <span><strong>META</strong> Data Analyst certified</span>
      </div>
    </section>
  );
}
