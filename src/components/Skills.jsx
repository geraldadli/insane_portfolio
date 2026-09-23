import ScrollReveal from "./motion/ScrollReveal";

// Data science workflow supplied by Gerald, with libraries from his CV.
const groups = [
  {
    number: "01",
    title: "Python & notebooks",
    description:
      "I use Python in Jupyter notebooks to explore data and test ideas.",
    tools: ["Python", "Jupyter Notebook"],
  },
  {
    number: "02",
    title: "Machine learning",
    description: "Tools for training and testing models.",
    tools: [
      "PyTorch",
      "TensorFlow / Keras",
      "scikit-learn",
      "timm",
      "Ultralytics YOLO",
      "SHAP",
    ],
  },
  {
    number: "03",
    title: "Data & visualization",
    description: "Tools for analyzing data and making charts.",
    tools: ["pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    number: "04",
    title: "Cloud notebooks",
    description:
      "I usually run my notebooks and experiments on Kaggle or Google Colab.",
    tools: ["Kaggle", "Google Colab"],
  },
  {
    number: "05",
    title: "Web development",
    description: "I use React to build the frontend of full-stack websites.",
    tools: ["React", "Full-stack development"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <ScrollReveal className="section-heading">
          <div>
            <p className="eyebrow">MY SKILLS</p>
            <h2 id="skills-title">
              Skills &amp; Tools<span className="accent">.</span>
            </h2>
          </div>
          <p>Technical skills and how I work with others.</p>
        </ScrollReveal>
        <section
          className="skills-subsection"
          aria-labelledby="hard-skills-title"
        >
          <ScrollReveal>
            <h3 id="hard-skills-title" className="skills-subheading">
              Hard Skills
            </h3>
          </ScrollReveal>
          <div className="skills-category-grid">
            {groups.map((group) => (
              <ScrollReveal key={group.number}>
                <article
                  className="skill-category"
                  aria-labelledby={`skill-group-${group.number}`}
                >
                  <span className="eyebrow">{group.number} / TOOLS</span>
                  <h4 id={`skill-group-${group.number}`}>{group.title}</h4>
                  <p>{group.description}</p>
                  <ul className="skill-tags">
                    {group.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="skills-focus">
            <p className="eyebrow">FOCUS AREAS</p>
            <p>
              Computer vision · Deep reinforcement learning · Medical imaging ·
              Time-series forecasting · Model evaluation &amp; interpretability
            </p>
          </ScrollReveal>
        </section>
        <section
          className="skills-subsection"
          aria-labelledby="soft-skills-title"
        >
          <ScrollReveal>
            <h3 id="soft-skills-title" className="skills-subheading">
              Soft Skills
            </h3>
          </ScrollReveal>
          <ScrollReveal>
            <article
              className="skill-category"
              aria-labelledby="leadership-communication-title"
            >
              <p className="eyebrow">WORKING WITH OTHERS</p>
              <h4 id="leadership-communication-title">
                Leadership &amp; Communication
              </h4>
              <p>Helping teams stay organized and sharing ideas clearly.</p>
            </article>
          </ScrollReveal>
        </section>
      </div>
    </section>
  );
}
