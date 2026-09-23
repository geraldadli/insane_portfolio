import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import ScrollReveal from "./motion/ScrollReveal";

const lines = ["Find a problem.", "Build a solution.", "Test the result."];
export default function Statement() {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const wide = useMediaQuery(
    "(min-width: 900px) and (min-height: 660px) and (pointer: fine)",
  );
  if (reduced || !wide)
    return (
      <section className="statement statement-flow" aria-label="My approach">
        <div className="container">
          <p className="eyebrow">HOW I WORK</p>
          {lines.map((line) => (
            <ScrollReveal key={line}>
              <p className="statement-line">{line}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    );
  return <PinnedStatement />;
}
function PinnedStatement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <section
      className="statement statement-pinned"
      ref={ref}
      aria-label="My approach"
    >
      <div className="statement-pin container">
        <p className="eyebrow">HOW I WORK</p>
        <div>
          {lines.map((line, i) => (
            <StatementLine
              key={line}
              line={line}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
        <div className="statement-bottom">
          <span>Build, test, and improve.</span>
          <span aria-hidden="true">SCROLL FOR PROJECTS ↓</span>
        </div>
      </div>
    </section>
  );
}
function StatementLine({ line, index, progress }) {
  const opacity = useTransform(
    progress,
    [index * 0.27, index * 0.27 + 0.18],
    [0.45, 1],
  );
  const x = useTransform(
    progress,
    [index * 0.27, index * 0.27 + 0.18],
    [index * 12, 0],
  );
  return (
    <motion.p className="statement-line" style={{ opacity, x }}>
      {line}
    </motion.p>
  );
}
