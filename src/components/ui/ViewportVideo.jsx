import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function ViewportVideo({ src, children, ...props }) {
  const ref = useRef(null);
  const nearby = useInView(ref, { margin: "200px 0px", once: true });
  const visible = useInView(ref, { amount: 0.5 });
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const video = ref.current;
    if (nearby && visible && !reduced) {
      // play() waits for buffered media; controls remain available if autoplay is blocked.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
    return () => video.pause();
  }, [nearby, visible, reduced]);

  return (
    <video {...props} ref={ref} src={nearby ? src : undefined}
      muted controls playsInline preload="auto">
      {children}
    </video>
  );
}
