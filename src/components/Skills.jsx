import { motion } from "framer-motion";
import CardReveal from "./motion/CardReveal";
import ScrollReveal from "./motion/ScrollReveal";
import Icon from "./ui/Icon";
import useMediaQuery from "../hooks/useMediaQuery";

// Demo percentages for the local design preview, pending Gerald's own ratings.
const groups = [
  {
    title: "Python & notebooks",
    description: "Exploring data and testing ideas.",
    tools: [
      { name: "Python", logo: "python", percent: 90, role: "Programming", description: "Data analysis, model training, and automation." },
      { name: "Jupyter Notebook", logo: "jupyter", percent: 90, role: "Notebooks", description: "Experiments, code, and results in one place." },
    ],
  },
  {
    title: "Machine learning",
    description: "Training, testing, and understanding models.",
    tools: [
      { name: "PyTorch", logo: "pytorch", percent: 85, role: "Deep learning", description: "Building and training neural networks." },
      { name: "TensorFlow / Keras", logo: "tensorflow", percent: 80, role: "Deep learning", description: "Developing and evaluating deep learning models." },
      { name: "scikit-learn", logo: "scikitlearn", percent: 85, role: "Machine learning", description: "Preprocessing data, building models, and checking results." },
    ],
    additional: ["timm", "Ultralytics YOLO", "SHAP"],
  },
  {
    title: "Data & visualization",
    description: "Turning raw data into useful results.",
    tools: [
      { name: "pandas", logo: "pandas", percent: 90, role: "Data analysis", description: "Cleaning, combining, and exploring datasets." },
      { name: "NumPy", logo: "numpy", percent: 85, role: "Numerical computing", description: "Working with arrays and numerical operations." },
    ],
    additional: ["Matplotlib", "Seaborn"],
  },
  {
    title: "Cloud notebooks",
    description: "Running experiments in the cloud.",
    tools: [
      { name: "Kaggle", logo: "kaggle", percent: 90, role: "Datasets & notebooks", description: "Exploring datasets and running model experiments." },
      { name: "Google Colab", logo: "googlecolab", percent: 90, role: "Cloud computing", description: "Training models with hosted notebooks and GPU access." },
    ],
  },
  {
    title: "Web development",
    description: "Building full-stack websites with a React frontend.",
    tools: [
      { name: "React", logo: "react", percent: 80, role: "Frontend development", description: "Building interactive interfaces for my web projects." },
    ],
  },
];

export default function Skills() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="container">
        <ScrollReveal className="section-heading">
          <div>
            <p className="eyebrow">MY TOOLKIT</p>
            <h2 id="skills-title">Skills &amp; Tools<span className="accent">.</span></h2>
          </div>
          <p>Tools for <span>data science &amp; web development</span>.</p>
        </ScrollReveal>
        <section className="skills-subsection" aria-labelledby="hard-skills-title">
          <div className="toolkit-subheading">
            <h3 id="hard-skills-title" className="skills-subheading">Hard Skills</h3>
            <p className="toolkit-rating-note" id="skill-rating-note">Demo percentages for this design preview.</p>
          </div>
          {groups.map((group, index) => (
            <div className="toolkit-group" key={group.title}>
              <ScrollReveal className="toolkit-category">
                <p className="eyebrow">0{index + 1} / TOOLKIT</p>
                <h4>{group.title}</h4>
                <p>{group.description}</p>
                {group.additional && <ul className="skill-tags">{group.additional.map(tool => <li key={tool}>{tool}</li>)}</ul>}
              </ScrollReveal>
              <div className="toolkit-list">
                {group.tools.map((tool, i) => (
                  <CardReveal as="article" className="toolkit-row" key={tool.name} index={i}>
                    <div className="toolkit-logo"><img src={`/icons/skills/${tool.logo}.svg`} alt="" width="48" height="48" loading="lazy" /></div>
                    <div className="toolkit-details">
                      <div className="toolkit-title"><h5>{tool.name}</h5><span className="toolkit-percent" aria-hidden="true">[ {tool.percent}% ]</span></div>
                      <p className="toolkit-role">{tool.role}</p>
                      <p className="toolkit-description">{tool.description}</p>
                      <motion.div initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ amount: 0.2, once: false }} className="toolkit-meter" role="meter" aria-label={`${tool.name} demo proficiency`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={tool.percent} aria-describedby="skill-rating-note">
                        <motion.span style={{ width: `${tool.percent}%` }} variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} transition={{ duration: reduced ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }} />
                      </motion.div>
                    </div>
                  </CardReveal>
                ))}
              </div>
            </div>
          ))}
          <ScrollReveal className="skills-focus">
            <p className="eyebrow">FOCUS AREAS</p>
            <p>Computer vision · Deep reinforcement learning · Medical imaging · Time-series forecasting · Model evaluation &amp; interpretability</p>
          </ScrollReveal>
        </section>
        <section className="skills-subsection toolkit-soft" aria-labelledby="soft-skills-title">
          <ScrollReveal><h3 id="soft-skills-title" className="skills-subheading">Soft Skills</h3></ScrollReveal>
          <CardReveal as="article" className="toolkit-row">
            <div className="toolkit-soft-icon"><Icon name="diagonal" /></div>
            <div className="toolkit-details">
              <h4>Leadership &amp; Communication</h4>
              <p className="toolkit-description">Helping teams stay organized and sharing ideas clearly.</p>
            </div>
          </CardReveal>
        </section>
      </div>
    </section>
  );
}
