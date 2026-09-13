import Icon from "./ui/Icon";
import ScrollReveal from "./motion/ScrollReveal";

const toolkit = [
  {
    number: "01",
    title: "Frame the problem.",
    body: "Computer vision, deep reinforcement learning, medical imaging, and time-series forecasting.",
  },
  {
    number: "02",
    title: "Build the system.",
    body: "Python, PyTorch, TensorFlow, scikit-learn, SQL, Streamlit, and React.",
  },
  {
    number: "03",
    title: "Understand the result.",
    body: "Model evaluation and interpretability, with SHAP attributions and visual exploration.",
  },
];
export default function About() {
  return (
    <section
      id="about"
      className="about-story container"
      aria-labelledby="about-title"
    >
      <div className="about-story-intro">
        <ScrollReveal>
          <p className="eyebrow">BEHIND THE RESEARCH</p>
          <h2 id="about-title">
            Curiosity is the
            <br />
            common thread.
          </h2>
        </ScrollReveal>
        <div>
          <ScrollReveal>
            <p>
              I’m an applied machine learning practitioner and Computer Science
              student at <strong>BINUS University, Jakarta</strong>, expected to
              graduate in 2028.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              I follow interesting problems across medical imaging, precision
              agriculture, wireless networks, and affective computing. Each
              domain offers a different way to ask a better question.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="about-facts">
              <div>
                <strong>04</strong>
                <span>Peer-reviewed publications</span>
              </div>
              <div>
                <strong>01</strong>
                <span>First-author publication</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="toolkit-story">
        {toolkit.map((item) => (
          <ScrollReveal key={item.number} className="toolkit-step">
            <span className="eyebrow">{item.number} / THE PRACTICE</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal className="community-story">
        <p className="eyebrow">LEARNING GOES BEYOND THE MODEL</p>
        <h3>Better, together.</h3>
        <p>
          IBM Data Science & Meta Data Analyst certified. BNEC IT Manager and
          Data Science Indonesia volunteer.
        </p>
        <a
          className="text-link"
          href="https://www.linkedin.com/in/gerald-adli"
          target="_blank"
          rel="noreferrer"
        >
          More about Gerald <Icon name="diagonal" />
        </a>
      </ScrollReveal>
    </section>
  );
}
