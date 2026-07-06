import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Lock,
  Server,
  Cloud,
  Terminal,
  Database,
  Radio,
  Network,
  Siren,
  Radar,
  Bot,
  Activity,
  KeyRound,
  ScanLine,
  FileSearch,
} from "lucide-react";

const WORDS = [
  "MONITOR",
  "DETECT",
  "ANALYZE",
  "TRIAGE",
  "RESPOND",
  "AUTOMATE",
  "INTELLIGENCE",
  "THREATS",
  "SIGNALS",
  "ALERTS",
  "INCIDENTS",
  "DEFEND",
  "OBSERVE",
  "CORRELATE",
  "INVESTIGATE",
  "PROTECT",
  "SECURE",
  "AI",
  "SOCBOX",
];

// Premium floating pictogram tiles orbiting the sphere
type Tile = {
  Icon: typeof Shield;
  label: string;
  x: string;
  y: string;
  delay: number;
  size?: "sm" | "md" | "lg";
};

const TILES: Tile[] = [
  { Icon: Shield,     label: "Shield",       x: "6%",  y: "10%", delay: 0.0, size: "md" },
  { Icon: Lock,       label: "Vault",        x: "88%", y: "8%",  delay: 0.6, size: "sm" },
  { Icon: Server,     label: "Fleet",        x: "3%",  y: "44%", delay: 1.1, size: "sm" },
  { Icon: Cloud,      label: "Cloud",        x: "92%", y: "36%", delay: 0.3, size: "md" },
  { Icon: Terminal,   label: "Shell",        x: "10%", y: "80%", delay: 1.4, size: "sm" },
  { Icon: Database,   label: "Logs",         x: "86%", y: "78%", delay: 0.9, size: "md" },
  { Icon: Radio,      label: "Signal",       x: "34%", y: "4%",  delay: 0.2, size: "sm" },
  { Icon: Network,    label: "Mesh",         x: "66%", y: "94%", delay: 1.7, size: "sm" },
  { Icon: Siren,      label: "Incident",     x: "74%", y: "20%", delay: 0.7, size: "sm" },
  { Icon: Radar,      label: "Recon",        x: "20%", y: "26%", delay: 1.2, size: "sm" },
  { Icon: Bot,        label: "Copilot",      x: "26%", y: "92%", delay: 0.5, size: "sm" },
  { Icon: Activity,   label: "Telemetry",    x: "80%", y: "58%", delay: 1.9, size: "sm" },
  { Icon: KeyRound,   label: "Identity",     x: "16%", y: "62%", delay: 2.1, size: "sm" },
  { Icon: ScanLine,   label: "Scan",         x: "70%", y: "48%", delay: 0.4, size: "sm" },
  { Icon: FileSearch, label: "Intel",        x: "44%", y: "88%", delay: 1.5, size: "sm" },
];

// Deterministic pseudo-neural network nodes inside the sphere
const NODES: Array<{ x: number; y: number }> = [
  { x: 50, y: 22 },
  { x: 24, y: 38 },
  { x: 76, y: 38 },
  { x: 18, y: 62 },
  { x: 82, y: 62 },
  { x: 34, y: 78 },
  { x: 66, y: 78 },
  { x: 50, y: 50 },
  { x: 38, y: 30 },
  { x: 62, y: 30 },
];

const EDGES: Array<[number, number]> = [
  [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6],
  [0, 8], [0, 9], [1, 3], [2, 4], [3, 5], [4, 6], [5, 6],
  [8, 1], [9, 2], [8, 3], [9, 4],
];

function tileSize(size: Tile["size"]) {
  if (size === "lg") return "size-12";
  if (size === "sm") return "size-9";
  return "size-10";
}

export function InteractiveCTA() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  const visible = [-2, -1, 0, 1, 2].map((offset) => {
    const i = (index + offset + WORDS.length * 10) % WORDS.length;
    return { offset, word: WORDS[i] };
  });

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
      {/* Ambient background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[640px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--info) 22%, transparent) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Headline block */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11.5px] text-secondary backdrop-blur">
          <span className="size-1.5 rounded-full bg-[color:var(--info)] shadow-[0_0_10px_2px_color-mix(in_oklab,var(--info)_60%,transparent)]" />
          The AI-native SOC platform
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
          Every threat. One intelligent platform.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-secondary">
          SOCBOX combines AI-powered monitoring, threat detection, incident response,
          and security automation into one unified Security Operations Platform.
        </p>
      </div>

      {/* Two-column stage */}
      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        {/* LEFT — Neural sphere stage */}
        <div className="shadow-elev relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl">
          {/* Layered background */}
          <div className="absolute inset-0 bg-grid opacity-[0.10]" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, color-mix(in oklab, var(--info) 22%, transparent) 0%, transparent 60%)",
            }}
          />
          {/* Glass shimmer sweep */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-y-8 -left-1/2 w-1/2 rotate-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
            }}
            animate={{ x: ["0%", "320%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Premium floating tiles */}
          {TILES.map(({ Icon, label, x, y, delay, size }, i) => (
            <motion.div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: x, top: y }}
              initial={{ opacity: 0, y: 6 }}
              animate={{
                opacity: [0.85, 1, 0.85],
                y: [-3, 3, -3],
              }}
              transition={{
                duration: 6 + (i % 3),
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className={`group grid ${tileSize(size)} place-items-center rounded-[10px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-white/90 backdrop-blur-xl`}
                style={{
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.08) inset, 0 8px 24px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02)",
                }}
                aria-label={label}
              >
                <Icon
                  strokeWidth={1.5}
                  className={size === "lg" ? "size-5" : size === "sm" ? "size-[15px]" : "size-4"}
                />
                {/* subtle inner highlight */}
                <span className="pointer-events-none absolute inset-x-1 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </div>
            </motion.div>
          ))}

          {/* Central floating neural glass sphere */}
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              className="relative"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Halo glow */}
              <motion.div
                aria-hidden
                className="absolute inset-0 -m-16 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--info) 45%, transparent) 0%, transparent 65%)",
                }}
                animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.95, 1.06, 0.95] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Soft orbit ring (single, minimal) */}
              <motion.div
                aria-hidden
                className="absolute inset-0 -m-10 rounded-full border border-white/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute left-1/2 top-0 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]" />
              </motion.div>

              {/* Glass sphere */}
              <div
                className="relative grid size-44 place-items-center rounded-full md:size-52"
                style={{
                  background:
                    "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 35%, rgba(10,14,20,0.55) 70%), radial-gradient(circle at 60% 80%, color-mix(in oklab, var(--info) 30%, transparent) 0%, transparent 55%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -20px 40px -20px rgba(0,0,0,0.7), 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 60px -10px color-mix(in oklab, var(--info) 45%, transparent)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Neural network */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <defs>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--info)" stopOpacity="1" />
                      <stop offset="100%" stopColor="var(--info)" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="edgeStroke" x1="0" x2="1">
                      <stop offset="0%" stopColor="var(--info)" stopOpacity="0.15" />
                      <stop offset="50%" stopColor="var(--info)" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="var(--info)" stopOpacity="0.15" />
                    </linearGradient>
                    <clipPath id="sphereClip">
                      <circle cx="50" cy="50" r="46" />
                    </clipPath>
                  </defs>

                  <g clipPath="url(#sphereClip)">
                    {/* Edges */}
                    {EDGES.map(([a, b], i) => {
                      const A = NODES[a];
                      const B = NODES[b];
                      return (
                        <motion.line
                          key={i}
                          x1={A.x}
                          y1={A.y}
                          x2={B.x}
                          y2={B.y}
                          stroke="url(#edgeStroke)"
                          strokeWidth={0.35}
                          initial={{ opacity: 0.25 }}
                          animate={{ opacity: [0.2, 0.9, 0.2] }}
                          transition={{
                            duration: 3 + (i % 4) * 0.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: (i % 6) * 0.2,
                          }}
                        />
                      );
                    })}

                    {/* Traveling pulse along a central edge */}
                    {[[7, 0], [7, 4], [7, 5], [0, 9]].map(([a, b], i) => {
                      const A = NODES[a];
                      const B = NODES[b];
                      return (
                        <motion.circle
                          key={`p-${i}`}
                          r={0.9}
                          fill="var(--info)"
                          initial={{ cx: A.x, cy: A.y, opacity: 0 }}
                          animate={{
                            cx: [A.x, B.x],
                            cy: [A.y, B.y],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.6,
                          }}
                          style={{
                            filter:
                              "drop-shadow(0 0 2px color-mix(in oklab, var(--info) 80%, transparent))",
                          }}
                        />
                      );
                    })}

                    {/* Nodes */}
                    {NODES.map((n, i) => (
                      <g key={i}>
                        <circle cx={n.x} cy={n.y} r={2.2} fill="url(#nodeGlow)" opacity={0.9} />
                        <motion.circle
                          cx={n.x}
                          cy={n.y}
                          r={0.9}
                          fill="#fff"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 2 + (i % 3) * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </g>
                    ))}
                  </g>

                  {/* Sphere rim highlight */}
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="0.4"
                  />
                </svg>

                {/* Specular highlight */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-[18%] top-[14%] size-16 rounded-full opacity-70 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.55), transparent 65%)",
                  }}
                />
              </div>

              {/* Label chip */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card/80 px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.18em] text-secondary backdrop-blur">
                SOCBOX · Neural Core
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — rotating word stack (unchanged) */}
        <div className="shadow-elev relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, color-mix(in oklab, var(--info) 16%, transparent) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-grid opacity-[0.10]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-card to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />

          <div className="absolute left-8 top-1/2 flex -translate-y-1/2 items-center gap-3 md:left-12">
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="grid size-8 place-items-center rounded-full border border-border bg-background/70 backdrop-blur"
            >
              <ArrowRight className="size-4 text-white" />
            </motion.div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative ml-16 flex h-full w-full max-w-xs flex-col items-start justify-center gap-3 pl-6 md:ml-24">
              {visible.map(({ offset, word }) => {
                const isActive = offset === 0;
                const dist = Math.abs(offset);
                const blur = isActive ? 0 : dist === 1 ? 4 : 8;
                const opacity = isActive ? 1 : dist === 1 ? 0.55 : 0.28;
                const scale = isActive ? 1 : dist === 1 ? 0.9 : 0.78;
                return (
                  <AnimatePresence key={`${offset}-${word}`} mode="popLayout">
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20, filter: `blur(${blur}px)` }}
                      animate={{
                        opacity,
                        y: 0,
                        filter: `blur(${blur}px)`,
                        scale,
                      }}
                      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className={`origin-left text-2xl font-semibold tracking-tight md:text-4xl ${
                        isActive
                          ? "text-white [text-shadow:0_0_28px_color-mix(in_oklab,var(--info)_55%,transparent)]"
                          : "text-white"
                      }`}
                    >
                      {word}
                    </motion.div>
                  </AnimatePresence>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA row */}
      <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="/app"
          className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--info)] px-5 py-3 text-[13.5px] font-medium text-white shadow-elev transition-transform hover:-translate-y-0.5"
        >
          Start free <ArrowRight className="size-4" />
        </a>
        <a
          href="#pricing"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-5 py-3 text-[13.5px] text-secondary backdrop-blur hover:text-foreground"
        >
          Book a demo
        </a>
      </div>
    </section>
  );
}
