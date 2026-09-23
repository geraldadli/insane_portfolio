import Icon from "./ui/Icon";
import ScrollReveal from "./motion/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="hero container"
      aria-labelledby="about-title"
    >
      <p className="eyebrow hero-eyebrow">
        <span className="status-dot" />
        ABOUT ME
      </p>
      <h1 id="about-title">
        Hi, I’m
        <br />
        <span>Gerald Adli.</span>
      </h1>
      <ScrollReveal>
        <div className="hero-bottom">
          <div>
            <p className="hero-description">
              I’m a Computer Science student at BINUS University in Jakarta,
              graduating in 2028. I build apps and research machine learning.
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
              <a
                className="text-link"
                href="https://www.linkedin.com/in/gerald-adli"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Icon name="diagonal" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal distance={20}>
        <div className="credentials-strip">
          <span>4 papers · 1 as first author</span>
          <span>IBM Data Science certified</span>
          <span>Meta Data Analyst certified</span>
        </div>
      </ScrollReveal>
    </section>
  );
}
