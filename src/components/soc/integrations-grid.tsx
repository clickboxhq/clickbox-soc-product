import type { ReactNode } from "react";

/**
 * Inline wordmark logos rendered as SVG <text> so nothing depends on a remote
 * image host. Each mark is monochrome (currentColor) and sized to a common
 * height so the marquee row stays visually balanced.
 */

type Mark = { name: string; node: ReactNode; w: number };

const H = 28;

const wordmark = (
  text: string,
  {
    w,
    weight = 700,
    letterSpacing = 0,
    family = "Geist, Inter, system-ui, sans-serif",
    italic = false,
    fontSize = 22,
  }: {
    w: number;
    weight?: number;
    letterSpacing?: number;
    family?: string;
    italic?: boolean;
    fontSize?: number;
  },
): ReactNode => (
  <svg
    viewBox={`0 0 ${w} ${H}`}
    height={H}
    width={w}
    role="img"
    aria-label={text}
    style={{ color: "currentColor", display: "block" }}
  >
    <text
      x="0"
      y={H - 6}
      fill="currentColor"
      fontFamily={family}
      fontWeight={weight}
      fontSize={fontSize}
      fontStyle={italic ? "italic" : "normal"}
      letterSpacing={letterSpacing}
    >
      {text}
    </text>
  </svg>
);

const MARKS: Mark[] = [
  {
    name: "Microsoft",
    w: 130,
    node: (
      <svg viewBox="0 0 130 28" width={130} height={H} role="img" aria-label="Microsoft" style={{ display: "block" }}>
        <g>
          <rect x="0" y="2" width="11" height="11" fill="currentColor" />
          <rect x="13" y="2" width="11" height="11" fill="currentColor" />
          <rect x="0" y="15" width="11" height="11" fill="currentColor" />
          <rect x="13" y="15" width="11" height="11" fill="currentColor" />
        </g>
        <text x="30" y="21" fill="currentColor" fontFamily="Segoe UI, Geist, Inter, sans-serif" fontWeight={400} fontSize={18}>
          Microsoft
        </text>
      </svg>
    ),
  },
  {
    name: "Google Workspace",
    w: 168,
    node: wordmark("Google Workspace", { w: 168, weight: 500, family: "Product Sans, Geist, Inter, sans-serif", fontSize: 20 }),
  },
  {
    name: "AWS",
    w: 62,
    node: (
      <svg viewBox="0 0 62 28" width={62} height={H} role="img" aria-label="AWS" style={{ display: "block" }}>
        <text x="0" y="20" fill="currentColor" fontFamily="Geist, Inter, sans-serif" fontWeight={700} fontSize={22} letterSpacing={-0.5}>
          aws
        </text>
        <path d="M2 24 Q 20 30 60 24" stroke="currentColor" strokeWidth={1.6} fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Azure",
    w: 96,
    node: wordmark("Azure", { w: 96, weight: 600, fontSize: 22, letterSpacing: -0.4 }),
  },
  {
    name: "Okta",
    w: 76,
    node: (
      <svg viewBox="0 0 76 28" width={76} height={H} role="img" aria-label="Okta" style={{ display: "block" }}>
        <circle cx="12" cy="14" r="10" fill="none" stroke="currentColor" strokeWidth={3.5} />
        <text x="26" y="21" fill="currentColor" fontFamily="Geist, Inter, sans-serif" fontWeight={700} fontSize={20}>
          kta
        </text>
      </svg>
    ),
  },
  {
    name: "Slack",
    w: 92,
    node: wordmark("slack", { w: 92, weight: 800, fontSize: 24, letterSpacing: -0.8 }),
  },
  {
    name: "CrowdStrike",
    w: 148,
    node: wordmark("CROWDSTRIKE", { w: 148, weight: 700, fontSize: 17, letterSpacing: 1.2 }),
  },
  {
    name: "SentinelOne",
    w: 142,
    node: wordmark("SentinelOne", { w: 142, weight: 700, fontSize: 20, letterSpacing: -0.3 }),
  },
  {
    name: "Splunk",
    w: 104,
    node: wordmark("splunk>", { w: 104, weight: 800, fontSize: 22, letterSpacing: -0.6 }),
  },
  {
    name: "GitHub",
    w: 118,
    node: (
      <svg viewBox="0 0 118 28" width={118} height={H} role="img" aria-label="GitHub" style={{ display: "block" }}>
        <path
          fill="currentColor"
          d="M14 2a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.32.47-2.4 1.24-3.24-.12-.31-.54-1.54.12-3.22 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.68.25 2.91.12 3.22.77.84 1.24 1.92 1.24 3.24 0 4.62-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 14 2Z"
        />
        <text x="32" y="20" fill="currentColor" fontFamily="Geist, Inter, sans-serif" fontWeight={600} fontSize={19}>
          GitHub
        </text>
      </svg>
    ),
  },
];

function MarqueeRow() {
  return (
    <ul className="flex items-center gap-16 pr-16">
      {MARKS.map((m) => (
        <li
          key={m.name}
          className="shrink-0 text-white/55 transition-colors duration-200 hover:text-white"
          title={m.name}
        >
          {m.node}
        </li>
      ))}
    </ul>
  );
}

export function IntegrationsGrid() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#53B5E0" }}
        >
          Integrations
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={{ fontFamily: 'Geist, "Inter", system-ui, sans-serif' }}
        >
          Works with what you already have.
        </h2>
      </div>

      <div
        className="group/marquee relative mt-12 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-[marquee_45s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
          <MarqueeRow />
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </section>
  );
}
