import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

      {/* Centered capability switcher */}
      <div className="shadow-elev relative mx-auto aspect-[16/7] max-w-5xl overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--info) 18%, transparent) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-[0.10]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-card to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
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
                  className={`text-center text-3xl font-semibold tracking-tight md:text-5xl ${
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

      {/* CTA row */}
      <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="/app"
          className="inline-flex items-center gap-2 rounded-md bg-[color:var(--info)] px-5 py-2.5 text-[13.5px] font-medium text-white shadow-elev"
        >
          Launch the console <ArrowRight className="size-4" />
        </a>
        <a
          href="#platform"
          className="rounded-md border border-border bg-card px-5 py-2.5 text-[13.5px] text-secondary hover:text-foreground"
        >
          Explore the platform
        </a>
      </div>
    </section>
  );
}
