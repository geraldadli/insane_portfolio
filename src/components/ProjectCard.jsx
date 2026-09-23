import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import ScrollReveal from "./motion/ScrollReveal";
import ProjectVisual from "./ProjectVisual";
import Icon from "./ui/Icon";

export default function ProjectCard({ project }) {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const wide = useMediaQuery(
    "(min-width: 900px) and (min-height: 660px) and (pointer: fine)",
  );
  return (
    <article
      className="project-story"
      id={`project-${project.number}`}
      aria-labelledby={`${project.id}-title`}
    >
      <ScrollReveal className="story-heading">
        <p className="eyebrow">
          {project.number} / {project.category} / {project.year}
        </p>
        <h3 id={`${project.id}-title`}>
          {project.title.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <div className="story-heading-bottom">
          <p>{project.name}</p>
          <a href={`#${project.id}-end`} className="story-skip">
            Skip to project links <Icon name="down" />
          </a>
        </div>
      </ScrollReveal>
      {wide && !reduced ? (
        <PinnedStory project={project} />
      ) : (
        <FlowStory project={project} />
      )}
      <div id={`${project.id}-end`} className="story-end">
        <ScrollReveal>
          <div className="project-bottom">
            <ul className="tags" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a
              className="project-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              Explore the research <Icon name="diagonal" />
              <span className="sr-only">
                : {project.name} (opens in a new tab)
              </span>
            </a>
          </div>
          <details className="project-details">
            <summary>
              <span>
                Research notes{" "}
                <span className="detail-role">/ {project.role}</span>
              </span>
              <Icon name="plus" />
            </summary>
            <p>{project.details}</p>
          </details>
        </ScrollReveal>
      </div>
    </article>
  );
}

function PinnedStory({ project }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const boundaries = useRef([0, 1 / 3, 2 / 3]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8, 1],
    [0.93, 1.08, 1, 1],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-3deg", "0deg", "2deg"],
  );
  // Only chapter boundaries trigger React renders. The artwork scrubs via MotionValues.
  const sync = (value) => {
    let next = 0;
    boundaries.current.forEach((start, index) => {
      if (value >= start) next = index;
    });
    if (activeRef.current !== next) {
      activeRef.current = next;
      setActive(next);
    }
  };
  useMotionValueEvent(scrollYProgress, "change", sync);
  useEffect(() => {
    // Measure chapter boundaries again when text wraps or the viewport changes.
    // Scroll itself only reads cached numbers, not DOM geometry every frame.
    const sections = [...ref.current.querySelectorAll(".story-chapter")];
    const measure = () => {
      const heights = sections.map((section) => section.offsetHeight);
      const total = heights.reduce((sum, height) => sum + height, 0);
      if (!total) return;
      let offset = 0;
      boundaries.current = heights.map((height) => {
        const start = offset / total;
        offset += height;
        return start;
      });
      sync(scrollYProgress.get());
    };
    measure();
    const observer = new ResizeObserver(measure);
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [scrollYProgress]);
  return (
    <div className="story-layout" ref={ref}>
      <div className="story-pin">
        <div className={`story-artwork phase-${active}`}>
          <motion.div
            className="story-artwork-inner"
            style={{ "--art-scale": scale, "--art-rotation": rotate }}
          >
            <ProjectVisual type={project.visual} />
          </motion.div>
          <div className="story-evidence" aria-hidden="true">
            <span>THE REPORTED RESULT</span>
            <strong>{project.metric}</strong>
            <p>{project.metricLabel}</p>
            <small>{project.context}</small>
          </div>
          <div className="story-visual-caption" aria-hidden="true">
            <span>
              0{active + 1} / {project.chapters[active].label}
            </span>
            <span>{project.chapters[active].visualLabel}</span>
          </div>
          <div className="story-progress" aria-hidden="true">
            <motion.div style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
        <nav className="chapter-nav" aria-label={`${project.name} chapters`}>
          {project.chapters.map((chapter, index) => (
            <a
              key={chapter.label}
              href={`#${project.id}-chapter-${index}`}
              aria-current={active === index ? "step" : undefined}
            >
              <span>0{index + 1}</span>
              {chapter.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="story-chapters">
        {project.chapters.map((chapter, index) => (
          <Chapter
            key={chapter.label}
            project={project}
            chapter={chapter}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function FlowStory({ project }) {
  return (
    <div className="story-flow">
      <ScrollReveal>
        <div className="story-artwork phase-2">
          <ProjectVisual type={project.visual} />
        </div>
      </ScrollReveal>
      <div className="story-chapters">
        {project.chapters.map((chapter, index) => (
          <Chapter
            key={chapter.label}
            project={project}
            chapter={chapter}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function Chapter({ project, chapter, index }) {
  return (
    <section
      className="story-chapter"
      id={`${project.id}-chapter-${index}`}
      aria-labelledby={`${project.id}-chapter-title-${index}`}
    >
      <ScrollReveal distance={48}>
        <p className="eyebrow">
          <span className="chapter-dot" />0{index + 1} / {chapter.label}
        </p>
        <h4 id={`${project.id}-chapter-title-${index}`}>{chapter.title}</h4>
        <p className="chapter-copy">{chapter.body}</p>
        {index === 1 && (
          <div className="model-pipeline" aria-label="Model pipeline">
            {project.pipeline.map((step, i) => (
              <span key={step}>
                {i > 0 && <Icon />}
                <strong>{step}</strong>
              </span>
            ))}
          </div>
        )}
        {index === 2 && (
          <div className="chapter-result">
            <strong>{project.metric}</strong>
            <span>{project.metricLabel}</span>
            <small>{project.context}</small>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
