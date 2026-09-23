export default function Icon({ name = "arrow", ...props }) {
  const paths = {
    arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
    diagonal: <path d="M6 18 18 6M6 6h12v12" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    moon: <path d="M20.5 13.5A9 9 0 0 1 10.5 3.4 9 9 0 1 0 20.5 13.5Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    city: (
      <path d="M3 21V9h7v12M10 21V3h11v18M1 21h22M6 12v1m0 3v1M14 7h3m-3 4h3m-3 4h3m-3 6v-3h3v3" />
    ),
    trend: <path d="M3 3v18h18M6 15l5-5 4 3 6-8m-5 0h5v5" />,
    scan: (
      <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M9 7l6 10m-2-10L9 17M6 12h12" />
    ),
    pulse: <path d="M2 12h5l3-7 4 14 3-7h5" />,
    waveform: <path d="M3 10v4m4-8v12m5-15v18m5-15v12m4-8v4" />,
    hoop: (
      <>
        <path d="M4 9V3h16v6M9 9V6h6v3M6 12l3 9h6l3-9M9 13l6 6m0-6-6 6" />
        <ellipse cx="12" cy="11" rx="8" ry="2" />
      </>
    ),
    compare: (
      <path d="M9 4H3v16h6m6-16h6v16h-6M12 2v20M5 16l3-4 2 2m4 2 3-5 2 3" />
    ),
    investigate: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="m15 15 6 6M6 10h2l2-3 2 6 2-3" />
      </>
    ),
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
