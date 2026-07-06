import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Cpu,
  Radar,
  AlertTriangle,
  Lock,
  Network,
  Terminal,
  Cloud,
  Server,
  Eye,
  Bot,
  Siren,
  Database,
  FileSearch,
  Brain,
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

// Positioned floating icons around the central object
const FLOATING_ICONS = [
  { Icon: Shield, x: "8%", y: "12%", delay: 0 },
  { Icon: Cpu, x: "82%", y: "8%", delay: 0.4 },
  { Icon: Radar, x: "4%", y: "44%", delay: 0.8 },
  { Icon: AlertTriangle, x: "88%", y: "40%", delay: 1.2 },
  { Icon: Lock, x: "14%", y: "78%", delay: 1.6 },
  { Icon: Network, x: "78%", y: "74%", delay: 2.0 },
  { Icon: Terminal, x: "40%", y: "4%", delay: 0.2 },
  { Icon: Cloud, x: "60%", y: "92%", delay: 0.6 },
  { Icon: Server, x: "92%", y: "58%", delay: 1.0 },
  { Icon: Eye, x: "2%", y: "62%", delay: 1.4 },
  { Icon: Bot, x: "28%", y: "90%", delay: 1.8 },
  { Icon: Siren, x: "70%", y: "22%", delay: 2.2 },
  { Icon: Database, x: "22%", y: "28%", delay: 0.9 },
  { Icon: FileSearch, x: "74%", y: "56%", delay: 1.3 },
  { Icon: Brain, x: "48%", y: "84%", delay: 1.7 },
];

export function InteractiveCTA() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  // 5 visible words: -2, -1, 0 (active), +1, +2
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
        {/* LEFT — AI core stage */}
        <div className="shadow-elev relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl">
          {/* Grid + glow layers */}
          <div className="absolute inset-0 bg-grid opacity-[0.18]" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, color-mix(in oklab, var(--info) 28%, transparent) 0%, transparent 55%)",
            }}
          />
          {/* Glass shimmer sweep */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-y-8 -left-1/2 w-1/2 rotate-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            }}
            animate={{ x: ["0%", "320%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating icons */}
          {FLOATING_ICONS.map(({ Icon, x, y, delay }, i) => (
            <motion.div
              key={i}
              className="absolute grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-border bg-background/70 text-[color:var(--info)] backdrop-blur-md"
              style={{ left: x, top: y }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: [0.55, 1, 0.55],
                scale: [1, 1.06, 1],
                y: ["-2px", "2px", "-2px"],
              }}
              transition={{
                duration: 4.5,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="size-4" />
            </motion.div>
          ))}

          {/* Central AI core */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              {/* Outer orbit ring */}
              <motion.div
                className="absolute inset-0 -m-16 rounded-full border border-[color:var(--info)]/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--info)] shadow-[0_0_12px_2px_color-mix(in_oklab,var(--info)_70%,transparent)]" />
                <span className="absolute left-0 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--info)]/80" />
              </motion.div>
              {/* Mid orbit ring */}
              <motion.div
                className="absolute inset-0 -m-9 rounded-full border border-[color:var(--info)]/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" />
              </motion.div>

              {/* Pulse halo */}
              <motion.div
                className="absolute inset-0 -m-10 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--info) 45%, transparent) 0%, transparent 70%)",
                }}
                animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.08, 0.95] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Core */}
              <motion.div
                className="relative grid size-28 place-items-center rounded-2xl border border-[color:var(--info)]/50 bg-background/80 backdrop-blur-xl md:size-32"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  boxShadow:
                    "0 0 60px 0 color-mix(in oklab, var(--info) 40%, transparent), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                >
                  <Brain className="size-11 text-[color:var(--info)] md:size-12" />
                </motion.div>
                <span className="absolute -bottom-1 left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[color:var(--info)] to-transparent" />
              </motion.div>

              {/* Label chip */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card/80 px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.18em] text-secondary backdrop-blur">
                SOCBOX · AI Core
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — rotating word stack */}
        <div className="shadow-elev relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, color-mix(in oklab, var(--info) 16%, transparent) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-grid opacity-[0.10]" />
          {/* Top & bottom fade masks */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-card to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />

          {/* Arrow indicator */}
          <div className="absolute left-8 top-1/2 flex -translate-y-1/2 items-center gap-3 md:left-12">
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="grid size-8 place-items-center rounded-full border border-border bg-background/70 backdrop-blur"
            >
              <ArrowRight className="size-4 text-white" />
            </motion.div>
          </div>

          {/* Word column */}
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
