import Icon from "./ui/Icon";
import ScrollReveal from "./motion/ScrollReveal";
export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-inner">
        <ScrollReveal>
          <p className="eyebrow">THE NEXT CHAPTER</p>
        </ScrollReveal>
        <ScrollReveal distance={50}>
          <h2 id="contact-title">
            What could we
            <br />
            build together?
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="contact-story-copy">
            A question worth exploring.
            <br />A system worth building. Let’s start there.
          </p>
        </ScrollReveal>
        <ScrollReveal distance={20}>
          <a
            className="button button-primary"
            href="mailto:geraldadli4@gmail.com"
          >
            Let’s talk <Icon name="diagonal" />
          </a>
          <a className="contact-email" href="mailto:geraldadli4@gmail.com">
            geraldadli4@gmail.com
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
