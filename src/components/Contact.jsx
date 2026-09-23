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
          <p className="eyebrow">CONTACT</p>
        </ScrollReveal>
        <ScrollReveal distance={50}>
          <h2 id="contact-title">
            Let’s work
            <br />
            together.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="contact-story-copy">
            Have a project or research idea? Email me or send a WhatsApp
            message.
          </p>
        </ScrollReveal>
        <ScrollReveal distance={20} className="contact-actions">
          <div>
            <a
              className="button button-primary"
              href="mailto:geraldadli4@gmail.com"
            >
              Email me <Icon name="diagonal" />
            </a>
            <a className="contact-email" href="mailto:geraldadli4@gmail.com">
              geraldadli4@gmail.com
            </a>
          </div>
          <div>
            <a
              className="button button-primary"
              href="https://wa.me/6282268838232"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp me <Icon name="diagonal" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="contact-email"
              href="https://wa.me/6282268838232"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp +62 822 6883 8232 (opens in a new tab)"
            >
              +62 822 6883 8232
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
