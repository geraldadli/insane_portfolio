import { useId } from "react";

// Original vector schematics: sharp at any pixel density, no image download.
// These illustrations communicate the research domain, not an actual model run.
export default function ProjectVisual({ type }) {
  return (
    <div className={`project-visual visual-${type}`}>
      <div className="visual-top">
        <span>
          {type === "brain"
            ? "NEURAL ARCHITECTURE / 01"
            : "ACTIVE LOCALIZATION / 02"}
        </span>
        <span className="visual-status">RESEARCH</span>
      </div>
      {type === "brain" ? <BrainArt /> : <CropArt />}
      <div className="visual-bottom">
        <span>
          {type === "brain"
            ? "ViT-B/16 → BiGRU → 4 classes"
            : "Observe → Refine → Reward"}
        </span>
        <strong>Concept illustration</strong>
      </div>
    </div>
  );
}

function BrainArt() {
  const uid = useId().replace(/:/g, "");
  const contours = Array.from({ length: 24 }, (_, i) => {
    const points = Array.from({ length: 121 }, (_, j) => {
      const t = (j / 120) * Math.PI * 2;
      const radius = 1 - i * 0.028;
      const ripple =
        Math.sin(t * 13 + i * 0.6) * (3 + i * 0.08) +
        Math.cos(t * 7 - i * 0.4) * 3;
      const x =
        245 + Math.cos(t) * (105 * radius + ripple) * (1 - 0.14 * Math.sin(t));
      const y = 153 + Math.sin(t) * (128 * radius + ripple);
      return `${j ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
    return (
      <path
        key={i}
        d={`${points}Z`}
        fill="none"
        stroke={`url(#${uid}-line)`}
        strokeWidth={i % 3 === 0 ? 1.4 : 0.65}
        opacity={0.85 - i * 0.015}
      />
    );
  });
  return (
    <svg
      className="visual-art"
      viewBox="0 0 490 310"
      role="img"
      aria-label="Abstract contour illustration of a brain, with a highlighted region and neural architecture labels"
    >
      <defs>
        <radialGradient id={`${uid}-glow`}>
          <stop stopColor="#799179" stopOpacity=".22" />
          <stop offset="1" stopColor="#111811" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-line`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#6d836d" />
          <stop offset=".45" stopColor="#e1e6d4" />
          <stop offset="1" stopColor="#667e64" />
        </linearGradient>
      </defs>
      <ellipse cx="245" cy="155" rx="193" ry="160" fill={`url(#${uid}-glow)`} />
      <g stroke="#b3c1a8" opacity=".12" strokeWidth=".5">
        <path d="M30 155h430M245 12v285" />
        <circle cx="245" cy="153" r="143" fill="none" />
        <path d="M48 38h12m-6-6v12M430 270h12m-6-6v12" />
      </g>
      {contours}
      <path
        d="M244 32c-12 29 12 44 0 63s8 35-1 59 12 35 0 55 9 32 0 62"
        fill="none"
        stroke="#111811"
        strokeWidth="7"
      />
      <path
        d="M244 33c-12 29 12 44 0 63s8 35-1 59 12 35 0 55 9 32 0 62"
        fill="none"
        stroke="#9fae90"
        strokeWidth=".7"
        opacity=".55"
      />
      <g className="feature-mark" stroke="#c3d1a5" fill="none">
        <rect
          x="278"
          y="94"
          width="45"
          height="48"
          rx="4"
          strokeDasharray="3 4"
          opacity=".7"
        />
        <circle cx="300" cy="117" r="8" fill="#c3d1a5" fillOpacity=".12" />
        <path d="M324 94l31-28h43" strokeWidth=".7" />
      </g>
      <g
        className="feature-mark"
        fontFamily="monospace"
        fontSize="8"
        fill="#aebca3"
      >
        <text x="358" y="59">
          FEATURES
        </text>
        <text x="42" y="260">
          AXIAL / CONCEPT
        </text>
        <text x="370" y="260">
          4 CLASSES
        </text>
      </g>
    </svg>
  );
}

function CropArt() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      className="visual-art"
      viewBox="0 0 490 310"
      role="img"
      aria-label="Illustration of crop rows with detection boxes showing how an agent refines localization"
    >
      <defs>
        <radialGradient id={`${uid}-leaf`}>
          <stop stopColor="#83976a" />
          <stop offset=".5" stopColor="#526b40" />
          <stop offset="1" stopColor="#293c25" />
        </radialGradient>
        <pattern
          id={`${uid}-grid`}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 0H0v24"
            fill="none"
            stroke="#b8c9a1"
            strokeOpacity=".06"
          />
        </pattern>
      </defs>
      <rect width="490" height="310" fill={`url(#${uid}-grid)`} />
      <g transform="translate(245 155) rotate(-16) translate(-245 -155)">
        {[0, 1, 2, 3, 4].map((row) => (
          <g key={row}>
            <path
              d={`M35 ${48 + row * 56}h420`}
              stroke="#78865c"
              strokeWidth="24"
              opacity=".055"
            />
            {[0, 1, 2, 3, 4, 5, 6].map((col) => (
              <g
                key={col}
                transform={`translate(${63 + col * 61} ${43 + row * 56}) rotate(${row * 23 + col * 31})`}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7].map((leaf) => (
                  <ellipse
                    key={leaf}
                    cx="0"
                    cy="-8"
                    rx="6.5"
                    ry="13"
                    transform={`rotate(${leaf * 45})`}
                    fill={`url(#${uid}-leaf)`}
                    stroke="#abc087"
                    strokeOpacity=".15"
                    strokeWidth=".4"
                  />
                ))}
                <circle r="5" fill="#8a9d64" />
              </g>
            ))}
          </g>
        ))}
      </g>
      <g className="feature-mark">
        <rect
          x="193"
          y="98"
          width="89"
          height="91"
          rx="2"
          stroke="#ebd7a2"
          strokeOpacity=".5"
          strokeDasharray="5 4"
          fill="none"
        />
        <rect
          x="207"
          y="111"
          width="63"
          height="67"
          rx="2"
          stroke="#c7dd9e"
          strokeWidth="1.4"
          fill="#c7dd9e"
          fillOpacity=".04"
        />
        <path
          d="M208 121v-10h10m42 0h10v10m0 47v10h-10m-42 0h-10v-10"
          fill="none"
          stroke="#e0edb9"
          strokeWidth="2.5"
        />
        <path
          d="M271 111l33-33h58"
          stroke="#d6e7b3"
          strokeWidth=".7"
          fill="none"
        />
        <rect x="303" y="57" width="72" height="17" rx="3" fill="#d6e7b3" />
        <text x="312" y="69" fill="#23341d" fontFamily="monospace" fontSize="8">
          REFINED BOX
        </text>
        <g fontFamily="monospace" fontSize="8" fill="#d4dfc4">
          <text x="31" y="280">
            AGENT / DQN
          </text>
          <text x="351" y="280">
            IoU REWARD
          </text>
        </g>
      </g>
    </svg>
  );
}
