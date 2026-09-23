import ScrollReveal from "./motion/ScrollReveal";

// Tools and focus areas from Gerald's CV; no invented proficiency scores.
const groups = [
  {
    number: "01",
    title: "Languages",
    description: "The foundations for working with data and building software.",
    tools: ["Python", "SQL", "JavaScript", "Java", "C++", "C", "HTML / CSS"],
  },
  {
    number: "02",
    title: "Machine learning",
    description: "From training a model to understanding its predictions.",
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
    description:
      "Explore the data. Test the idea. Make the result understandable.",
    tools: ["pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    number: "04",
    title: "Development & platforms",
    description: "Turn experiments into usable, reproducible systems.",
    tools: ["Git", "React", "Streamlit", "Azure ML", "Google Analytics"],
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
            <p className="eyebrow">THE TOOLKIT BEHIND THE WORK</p>
            <h2 id="skills-title">
              Skills &amp; Tools<span className="accent">.</span>
            </h2>
          </div>
          <p>
            From the first experiment
            <br /> to a working system.
          </p>
        </ScrollReveal>
        <div className="skills-category-grid">
          {groups.map((group) => (
            <ScrollReveal key={group.number}>
              <article
                className="skill-category"
                aria-labelledby={`skill-group-${group.number}`}
              >
                <span className="eyebrow">{group.number} / THE TOOLKIT</span>
                <h3 id={`skill-group-${group.number}`}>{group.title}</h3>
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
          <p className="eyebrow">WHERE I APPLY THEM</p>
          <p>
            Computer vision · Deep reinforcement learning · Medical imaging ·
            Time-series forecasting · Model evaluation &amp; interpretability
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
