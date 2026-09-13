import { projects, otherResearch } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Icon from "./ui/Icon";
import ScrollReveal from "./motion/ScrollReveal";

export default function Projects() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="container">
        <ScrollReveal className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK / 2025 — 2026</p>
            <h2 id="work-title">
              Research, made real<span className="accent">.</span>
            </h2>
          </div>
          <p>
            Follow the question.
            <br />
            Explore the approach. See the evidence.
          </p>
        </ScrollReveal>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <ScrollReveal className="more-work-heading">
          <span className="eyebrow">THE CURIOSITY CONTINUES</span>
          <span className="muted">
            Different domains. The same drive to understand.
          </span>
        </ScrollReveal>
        <div className="research-stories">
          {otherResearch.map((item) => (
            <article className="research-story" key={item.number}>
              <ScrollReveal className="research-story-art">
                <span className="research-number" aria-hidden="true">
                  {item.number}
                </span>
                <div
                  className={`signal-art signal-${item.number}`}
                  aria-hidden="true"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <i key={i} style={{ "--i": i }} />
                  ))}
                </div>
              </ScrollReveal>
              <div>
                <ScrollReveal>
                  <p className="eyebrow">
                    {item.category} / {item.year}
                  </p>
                  <h3>{item.title}</h3>
                </ScrollReveal>
                <ScrollReveal>
                  <p className="research-story-name">{item.name}</p>
                  <p className="research-story-copy">{item.description}</p>
                </ScrollReveal>
                <ScrollReveal>
                  <a
                    className="text-link"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore this research <Icon name="diagonal" />
                    <span className="sr-only">: {item.name}</span>
                  </a>
                </ScrollReveal>
              </div>
            </article>
          ))}
        </div>
        <ScrollReveal>
          <a
            className="all-research text-link"
            href="https://github.com/geraldadli/research-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            All research, code & evaluation figures <Icon name="diagonal" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
