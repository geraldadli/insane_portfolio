import { useState } from "react";
import ScrollReveal from "./motion/ScrollReveal";
import Icon from "./ui/Icon";
import "../styles/github.css";

const profile = "https://github.com/geraldadli";

export default function GitHubActivity() {
  const [status, setStatus] = useState("loading");

  return (
    <section
      id="github"
      className="github-section"
      aria-labelledby="github-title"
    >
      <div className="container">
        <ScrollReveal className="section-heading">
          <div>
            <p className="eyebrow">MY CODING ACTIVITY</p>
            <h2 id="github-title">
              GitHub activity<span className="accent">.</span>
            </h2>
          </div>
          <p>My contributions over the past year.</p>
        </ScrollReveal>
        <ScrollReveal>
          <figure className="github-card">
            <figcaption className="github-card-heading">
              <span>@geraldadli</span>
              <span>Contribution calendar</span>
            </figcaption>
            <div className="github-chart-frame">
              {status !== "loaded" && (
                <p className="github-chart-status" role="status">
                  {status === "error"
                    ? "The calendar is unavailable. View my activity on GitHub below."
                    : "Loading GitHub activity…"}
                </p>
              )}
              <div
                className="github-chart-scroll"
                role="region"
                aria-label="GitHub contribution calendar, scroll horizontally to see the full year"
                tabIndex={0}
              >
                <img
                  className="github-chart"
                  src="https://ghchart.rshah.org/geraldadli"
                  width="663"
                  height="104"
                  loading="lazy"
                  decoding="async"
                  alt="Gerald Adli’s GitHub contributions over the past year. Color intensity shows daily contribution activity. Visit the GitHub profile for daily details."
                  onLoad={() => setStatus("loaded")}
                  onError={() => setStatus("error")}
                  style={{
                    opacity: status === "loaded" ? 1 : 0,
                  }}
                />
              </div>
            </div>
            <div className="github-card-footer">
              <p>Commits, pull requests, and other contributions.</p>
              <a
                className="text-link"
                href={profile}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub <Icon name="diagonal" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p className="github-scroll-hint">
              Swipe or scroll to see the full year.
            </p>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
