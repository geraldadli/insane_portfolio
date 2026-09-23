import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "./ui/Icon";
import ScrollReveal from "./motion/ScrollReveal";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Hero() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const compact = useMediaQuery("(pointer: coarse), (max-width: 767px)");
  if (reduced || compact)
    return (
      <section
        id="home"
        className="hero container"
        aria-labelledby="hero-title"
      >
        <HeroContent />
      </section>
    );
  return <MovingHero />;
}
function MovingHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  return (
    <section
      id="home"
      ref={ref}
      className="hero container"
      aria-labelledby="hero-title"
    >
      <motion.div style={{ y, scale }}>
        <HeroContent />
      </motion.div>
    </section>
  );
}
function HeroContent() {
  return (
    <>
      <div className="eyebrow hero-eyebrow">
        <span className="status-dot" /> APPLIED MACHINE LEARNING & DATA SCIENCE
      </div>
      <h1 id="hero-title">
        Building projects.
        <br />
        <span>Learning as I go.</span>
      </h1>
      <ScrollReveal>
        <div className="hero-bottom">
          <div>
            <p className="hero-description">
              I’m Gerald, a Computer Science student.
              <br className="desktop-break" /> I build apps and study machine
              learning.
            </p>
            <div className="hero-links">
              <a className="button button-primary" href="#work">
                View my projects <Icon name="down" />
              </a>
              <a
                className="text-link"
                href="https://github.com/geraldadli"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Icon name="diagonal" />
              </a>
            </div>
          </div>
          <div className="hero-note">
            <span className="tiny-cross">+</span>
            <p>
              Code.
              <br />
              Test. Learn.
            </p>
            <span className="note-line" />
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal distance={20}>
        <div className="credentials-strip">
          <span>Computer Science · BINUS University</span>
          <span>4 peer-reviewed publications</span>
          <span>IBM & Meta certified</span>
        </div>
      </ScrollReveal>
    </>
  );
}
