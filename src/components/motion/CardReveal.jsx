import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

const visible = { opacity: 1, y: 0, scale: 1 };

// Transform-only movement preserves the grid; leaving the viewport resets the reveal.
export default function CardReveal({ children, as = "div", index = 0, ...props }) {
  const ref = useRef(null);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const compact = useMediaQuery("(pointer: coarse), (max-width: 999px)");
  const inView = useInView(ref, { margin: "0px 0px -40px 0px" });
  const [focused, setFocused] = useState(false);
  const Component = as === "article" ? motion.article : motion.div;
  const hidden = { opacity: 0, y: compact ? 14 : 32, scale: compact ? 1 : 0.975 };

  return (
    <Component
      {...props}
      ref={ref}
      initial={reduced ? false : hidden}
      animate={reduced || inView || focused ? visible : hidden}
      transition={{
        duration: reduced || focused || !inView ? 0 : compact ? 0.45 : 0.75,
        delay: reduced || focused || compact || !inView ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      style={{ minWidth: 0, transformOrigin: "center bottom" }}
    >
      {children}
    </Component>
  );
}
