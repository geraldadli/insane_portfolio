import { projectUniverse } from "../data/projectUniverse";
import ScrollReveal from "./motion/ScrollReveal";
import Icon from "./ui/Icon";
import CardReveal from "./motion/CardReveal";
import ViewportVideo from "./ui/ViewportVideo";

function UniverseCard({ project, index, total }) {
  return (
    <CardReveal
      as="article"
      index={index}
      className={`universe-card project-entry ${project.video || project.image ? "project-with-media" : ""}`}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="universe-card-meta">
          <span className="project-icon" aria-hidden="true">
            <Icon name={project.icon} />
          </span>
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
      </div>
      {project.video && (
        <figure className="universe-preview">
          <ViewportVideo
            src={project.video}
            poster={project.poster}
            width="1280"
            height="720"
            aria-label={`${project.name} video preview`}
          >
            <a href={project.video}>Download the {project.name} video</a>
          </ViewportVideo>
          <figcaption>{project.name} — project preview.</figcaption>
        </figure>
      )}
      {project.image && (
        <figure className="universe-preview">
          <a href={project.image.src} target="_blank" rel="noreferrer"
            aria-label={`View ${project.name} screenshot (opens in a new tab)`}>
            <img
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              loading="lazy"
              decoding="async"
            />
          </a>
          <figcaption>{project.image.caption}</figcaption>
        </figure>
      )}
      <div className="project-entry-heading">
        <h4 id={`${project.id}-title`}>{project.name}</h4>
        <p className="universe-tagline">{project.tagline}</p>
      </div>
      <div className="project-entry-copy">
        <ol className="universe-flow" aria-label={`${project.name} workflow`}>
          {project.flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="universe-description">{project.description}</p>
      </div>
      {project.foundation && (
        <div className="project-entry-status">
          <dl className="universe-status">
            <div>
              <dt>Current work</dt>
              <dd>{project.foundation}</dd>
            </div>
            <div>
              <dt>Future goal</dt>
              <dd>{project.outlook}</dd>
            </div>
          </dl>
        </div>
      )}
      {project.href && (
        <div className="project-entry-action">
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
        </div>
      )}
    </CardReveal>
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
        <ScrollReveal className="section-heading">
          <div>
            <p className="eyebrow">( SELECTED WORK )</p>
            <h2 id="work-title">
              Projects<span className="accent">.</span>
            </h2>
          </div>
          <p>Festival projects, <span>course work</span>, and personal ideas.</p>
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
              <ScrollReveal className="universe-group-heading">
                <div>
                  <p className="eyebrow">
                    {group.chapter} / {group.theme}
                  </p>
                  <h3 id={`${group.id}-title`}>{group.name}</h3>
                </div>
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
            {group.projects.filter((project) => project.award).map((project) => (
              <CardReveal key={`${project.id}-award`} className="universe-card award-feature">
                <figure>
                  <a
                    href={project.award.photo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} award photo (opens in a new tab)`}
                  >
                    <img
                      src={project.award.photo}
                      alt={project.award.alt}
                      width="1280"
                      height="960"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <figcaption>
                    <p className="eyebrow">{project.name} / Award</p>
                    <h4>{project.award.title}</h4>
                    <p className="universe-description">{project.award.event}</p>
                    <a className="text-link universe-link" href={`#${project.id}`}>
                      Explore {project.name} <Icon name="diagonal" />
                    </a>
                  </figcaption>
                </figure>
              </CardReveal>
            ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
