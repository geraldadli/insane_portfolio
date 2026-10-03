import CardReveal from "./motion/CardReveal";
import { projects, otherResearch } from "../data/projects";
import Icon from "./ui/Icon";
import ScrollReveal from "./motion/ScrollReveal";

export default function Research() {
  return (
    <section
      id="research"
      className="work-section"
      aria-labelledby="research-title"
    >
      <div className="container">
        <ScrollReveal className="section-heading">
          <div>
            <p className="eyebrow">MY RESEARCH</p>
            <h2 id="research-title">
              Research & papers<span className="accent">.</span>
            </h2>
          </div>
          <p>Studies in <span>applied machine learning</span>.</p>
        </ScrollReveal>
        <div className="research-card-grid">
          {[...projects, ...otherResearch].map((paper, index) => (
            <CardReveal key={paper.number} index={index % 2}>
              <article
                className="universe-card research-paper"
                id={`project-${paper.number}`}
                aria-labelledby={`paper-${paper.number}-title`}
              >
                <div className="universe-card-meta">
                  <span>{paper.category}</span>
                  <span>{paper.year}</span>
                </div>
                <h3 id={`paper-${paper.number}-title`}>{paper.name}</h3>
                <p className="universe-description">{paper.description}</p>
                <div className="research-actions">
                  <a
                    className="text-link universe-link"
                    href={paper.paperHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read paper <Icon name="diagonal" />
                    <span className="sr-only">
                      : {paper.name} (opens in a new tab)
                    </span>
                  </a>
                  <a
                    className="text-link universe-link"
                    href={paper.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {paper.githubLabel || "GitHub"} <Icon name="diagonal" />
                    <span className="sr-only">
                      : {paper.name} (opens in a new tab)
                    </span>
                  </a>
                </div>
              </article>
            </CardReveal>
          ))}
        </div>
        <ScrollReveal>
          <a
            className="all-research text-link"
            href="https://github.com/geraldadli/research-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            All research on GitHub <Icon name="diagonal" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
