import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

// Content stays in document order. Motion never changes reserved layout dimensions.
export default function ScrollReveal({
  children,
  className = "",
  distance = 36,
}) {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const touch = useMediaQuery("(pointer: coarse), (max-width: 767px)");
  if (reduced)
    return <div className={`scroll-reveal ${className}`}>{children}</div>;
  if (touch)
    return (
      <motion.div
        className={`scroll-reveal ${className}`}
        initial={{ opacity: 0.65, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  return (
    <ScrubReveal className={className} distance={distance}>
      {children}
    </ScrubReveal>
  );
}
function ScrubReveal({ children, className, distance }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.96", "start 0.62"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ y, opacity }}
    >
      {children}
    </motion.div>
  );
}
