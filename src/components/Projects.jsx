import { projectUniverse } from "../data/projectUniverse";
import ScrollReveal from "./motion/ScrollReveal";
import Icon from "./ui/Icon";

function UniverseCard({ project, index, total }) {
  return (
    <article
      className="universe-card"
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <ScrollReveal>
        <div className="universe-card-meta">
          <span className="universe-emoji" aria-hidden="true">
            {project.emoji}
          </span>
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
        <h4 id={`${project.id}-title`}>{project.name}</h4>
        <p className="universe-tagline">{project.tagline}</p>
      </ScrollReveal>
      <ScrollReveal>
        <ol className="universe-flow" aria-label={`${project.name} workflow`}>
          {project.flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="universe-description">{project.description}</p>
      </ScrollReveal>
      {project.foundation && (
        <ScrollReveal>
          <dl className="universe-status">
            <div>
              <dt>Current foundation</dt>
              <dd>{project.foundation}</dd>
            </div>
            <div>
              <dt>Future goal</dt>
              <dd>{project.outlook}</dd>
            </div>
          </dl>
        </ScrollReveal>
      )}
      {project.href && (
        <ScrollReveal>
          <a
            className="text-link universe-link"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            Open project <Icon name="diagonal" />
            <span className="sr-only">
              : {project.name} (opens in a new tab)
            </span>
          </a>
        </ScrollReveal>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="universe-section"
      aria-labelledby="work-title"
    >
      <div className="container">
        <ScrollReveal className="universe-heading">
          <p className="eyebrow">
            <span aria-hidden="true">🪐 </span>MY PROJECT UNIVERSE
          </p>
          <h2 id="work-title">
            Show<span className="accent">.</span> Learn
            <span className="accent">.</span>
            <br />
            Dream<span className="accent">.</span>
          </h2>
          <p>Working demos. Lessons in practice. Ideas taking shape.</p>
        </ScrollReveal>
        <nav className="universe-nav" aria-label="Project chapters">
          {projectUniverse.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              <span className="universe-nav-number">{group.chapter}</span>
              <span>{group.name}</span>
              <Icon name="down" />
            </a>
          ))}
        </nav>
        {projectUniverse.map((group) => (
          <section
            className="universe-group"
            id={group.id}
            key={group.id}
            aria-labelledby={`${group.id}-title`}
          >
            <div className="universe-intro">
              <ScrollReveal>
                <p className="eyebrow">
                  {group.chapter} / {group.theme}
                </p>
                <h3 id={`${group.id}-title`}>
                  <span aria-hidden="true">{group.emoji}</span>
                  {group.name}
                </h3>
                <p className="universe-group-headline">{group.headline}</p>
                <p className="universe-mission">
                  <span>THE MISSION</span>
                  {group.mission}
                </p>
                <span className="universe-count">
                  {group.projects.length} projects to explore
                </span>
              </ScrollReveal>
            </div>
            <div className="universe-cards">
              {group.projects.map((project, index) => (
                <UniverseCard
                  key={project.id}
                  project={project}
                  index={index}
                  total={group.projects.length}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
