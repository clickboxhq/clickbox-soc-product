import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Boxes,
  BrainCircuit,
  ClipboardList,
  Database,
  FileText,
  Fingerprint,
  KeyRound,
  Layers,
  LayoutDashboard,
  Lock,
  PlayCircle,
  Radar,
  ScrollText,
  Sparkles,
  Workflow,
} from "lucide-react";

import clickboxLogo from "@/assets/clickbox-logo.asset.json";
import productDemo from "@/assets/product-demo.mp4.asset.json";
import { CapabilityStack } from "@/components/soc/capability-stack";
import { IntegrationsGrid } from "@/components/soc/integrations-grid";
import { BeforeAfter } from "@/components/soc/before-after";
import { Narrative } from "@/components/soc/marketing/narrative";
import {
  Bloom,
  GridField,
  Reveal,
  SectionHead,
  displayFont,
  monoFont,
} from "@/components/soc/marketing/atmos";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      {
        title:
          "ClickBox — AI-native Security Operations. One console. Every signal.",
      },
      {
        name: "description",
        content:
          "ClickBox correlates alerts across identity, endpoint, email, and cloud — and tells your analysts what actually happened. Book a demo.",
      },
      {
        property: "og:title",
        content: "ClickBox — AI-native Security Operations",
      },
      {
        property: "og:description",
        content:
          "One console. Every signal. Answered in minutes, not shifts. The AI-native SOC platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ------------------------------- NAV ------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(6,9,13,0.72)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <a href="/" className="flex items-center gap-2.5">
          <img
            src={clickboxLogo.url}
            alt="ClickBox"
            className="size-7 rounded object-contain"
          />
          <span
            className="text-[15px] font-semibold tracking-[-0.02em]"
            style={displayFont}
          >
            ClickBox
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["Platform", "#platform"],
            ["How it works", "#how"],
            ["Solutions", "#solutions"],
            ["Developers", "#developers"],
            ["Pricing", "#pricing"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="rounded-md px-3 py-1.5 text-[13px] text-white/60 transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <Link
            to="/app"
            className="hidden rounded-md px-3 py-1.5 text-[13px] text-white/60 transition-colors hover:text-white sm:inline-flex"
          >
            Open console
          </Link>
          <a href="#book" className="btn-primary text-[13px]">
            Book a demo <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------- HERO ------------------------------- */

/** Faint constellation of security entities drifting behind the headline. */
function HeroArtwork() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <GridField size={56} opacity={0.055} />
      <div
        className="absolute inset-x-0 top-0 h-[820px]"
        style={{
          background:
            "radial-gradient(1100px 460px at 50% -8%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 62%)",
        }}
      />
      <svg
        viewBox="0 0 1440 760"
        className="absolute inset-x-0 top-0 h-[760px] w-full opacity-[0.5]"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="hero-arc" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <radialGradient id="hero-mask" cx="50%" cy="18%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="55%" stopColor="#fff" stopOpacity="1" />
          </radialGradient>
          <mask id="hero-m">
            <rect width="1440" height="760" fill="url(#hero-mask)" />
          </mask>
        </defs>
        <g mask="url(#hero-m)" fill="none" stroke="url(#hero-arc)">
          {[300, 420, 540, 660, 780].map((r, i) => (
            <ellipse
              key={r}
              cx="720"
              cy="120"
              rx={r}
              ry={r * 0.42}
              strokeWidth={i % 2 ? 0.6 : 1}
              strokeDasharray={i % 2 ? "2 10" : undefined}
            />
          ))}
          {Array.from({ length: 15 }, (_, i) => {
            const x = 60 + i * 95;
            return (
              <line
                key={i}
                x1={x}
                y1="0"
                x2={720}
                y2="620"
                strokeWidth="0.5"
                opacity="0.5"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

/** Product demo, framed as a premium showcase with scroll-linked lift. */
function DemoShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const v = 1 - Math.min(1, Math.max(0, r.top / window.innerHeight));
        setP(v);
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  const eased = Math.min(1, p * 1.25);

  return (
    <div id="demo" ref={ref} className="relative mx-auto mt-20 max-w-6xl">
      <Bloom
        className="-inset-x-16 -inset-y-16 rounded-[3rem]"
        intensity={0.18}
      />
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10"
        style={{
          background: "rgba(10,13,17,0.9)",
          backdropFilter: "blur(20px)",
          transform: `perspective(2000px) rotateX(${(1 - eased) * 5}deg) translateY(${(1 - eased) * 26}px) scale(${0.965 + eased * 0.035})`,
          opacity: 0.55 + eased * 0.45,
          transition: "transform 120ms linear, opacity 240ms linear",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.06) inset, 0 60px 140px -40px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        <div className="flex items-center gap-2 border-b border-white/8 bg-black/50 px-3.5 py-2.5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/12" />
            <span className="size-2.5 rounded-full bg-white/12" />
            <span className="size-2.5 rounded-full bg-white/12" />
          </div>
          <div
            className="mx-auto flex items-center gap-2 rounded-md border border-white/8 bg-black/60 px-3 py-1 text-[10.5px] text-white/55"
            style={monoFont}
          >
            <Lock className="size-2.5" />
            clickbox.io / console
          </div>
          <div
            className="hidden items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:flex"
            style={monoFont}
          >
            <span
              className="size-1.5 rounded-full"
              style={{ background: "var(--primary)" }}
            />
            live
          </div>
        </div>
        <div className="relative aspect-video w-full bg-black">
          <video
            className="absolute inset-0 h-full w-full object-contain"
            src={productDemo.url}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controls={false}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), transparent 18%)",
            }}
          />
        </div>
      </div>
      {/* the frame dissolves into the page below it */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-24 h-24"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,.85), #000)",
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pt-40">
      <HeroArtwork />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[11.5px] text-white/70 backdrop-blur">
              <span
                className="size-1.5 rounded-full"
                style={{
                  background: "var(--primary)",
                  boxShadow:
                    "0 0 10px 2px color-mix(in oklab, var(--primary) 60%, transparent)",
                }}
              />
              AI-native Security Operations
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="mt-7 text-[42px] font-semibold leading-[1.0] tracking-[-0.035em] text-white md:text-[72px]"
              style={displayFont}
            >
              One console.
              <br />
              Every signal.
              <span className="block text-white/40">
                Answered in minutes.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.65] text-white/55 [text-wrap:pretty]">
              ClickBox correlates alerts across identity, endpoint, email, and
              cloud — then tells your analysts what actually happened, and what
              to do about it.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#book" className="btn-primary w-full sm:w-auto">
                Book a demo <ArrowRight className="size-4" />
              </a>
              <a href="#demo" className="btn-ghost w-full sm:w-auto">
                <PlayCircle className="size-4" /> Watch the product tour
              </a>
            </div>
          </Reveal>
        </div>

        <DemoShowcase />
      </div>
    </section>
  );
}

/* -------------------------- PIPELINE STRIP -------------------------- */

const STEPS = [
  { n: "01", icon: Database, title: "Collect telemetry", body: "Signal from SIEM, EDR, identity, email, cloud." },
  { n: "02", icon: Layers, title: "Normalize events", body: "One schema across every connected source." },
  { n: "03", icon: BrainCircuit, title: "AI investigation", body: "Correlate alerts, eliminate false positives." },
  { n: "04", icon: Radar, title: "Threat correlation", body: "Map to MITRE ATT&CK, score real risk." },
  { n: "05", icon: ScrollText, title: "Evidence", body: "Auto-built timeline and artifacts." },
  { n: "06", icon: Workflow, title: "Response", body: "Recommend and trigger containment." },
];

function Pipeline() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Pipeline"
        title="From raw event to closed case."
        sub="Six stages, fully instrumented. Every hand-off is inspectable, so nothing about the verdict is a matter of trust."
      />
      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[22px] hidden h-px lg:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,.18) 10%, rgba(255,255,255,.18) 90%, transparent)",
          }}
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="relative">
                <div className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-[#0B0F14]">
                  <s.icon className="size-[18px] text-white/80" />
                </div>
                <div
                  className="mt-4 text-[10.5px] tracking-[0.2em] text-white/35"
                  style={monoFont}
                >
                  {s.n}
                </div>
                <div
                  className="mt-1.5 text-[14px] font-semibold text-white"
                  style={displayFont}
                >
                  {s.title}
                </div>
                <div className="mt-1.5 text-[13px] leading-[1.6] text-white/50">
                  {s.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- MODULES GRID -------------------------- */

const MODULES = [
  { icon: LayoutDashboard, name: "SOC Console", body: "The unified analyst workspace." },
  { icon: BrainCircuit, name: "AI Investigator", body: "Auto-reasons across alerts to build the story." },
  { icon: Radar, name: "Threat Intelligence", body: "Curated intel wired to your live alerts." },
  { icon: ClipboardList, name: "Case Management", body: "Incidents, ownership, SLAs, notes, handoff." },
  { icon: Workflow, name: "Playbooks", body: "Codified response, one-click or automated." },
  { icon: ScrollText, name: "Evidence Timeline", body: "Chain-of-custody artifacts, auto-assembled." },
  { icon: BarChart3, name: "Analytics", body: "MTTD, MTTR, coverage, mastery — measured." },
  { icon: FileText, name: "Reports", body: "Executive briefs and compliance-ready output." },
  { icon: Lock, name: "RBAC & Audit Logs", body: "Least-privilege access, tamper-evident logging." },
];

function Modules() {
  return (
    <section id="platform" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Platform"
        title="Everything a SOC needs. Nothing it doesn't."
      />
      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m, i) => (
          <div
            key={m.name}
            className="group relative bg-[#07090C] p-6 transition-colors duration-300 hover:bg-[#0C1016]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(320px 160px at 20% 0%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="flex size-10 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] text-white/85 transition-colors group-hover:border-white/20">
                <m.icon className="size-[18px]" />
              </div>
              <h3
                className="mt-5 text-[15px] font-semibold text-white"
                style={displayFont}
              >
                {m.name}
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-white/50">
                {m.body}
              </p>
              <span
                className="mt-4 block text-[10px] tracking-[0.22em] text-white/20"
                style={monoFont}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------- REAL PRODUCT SCREENSHOTS --------------------- */

function Screenshots() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="The product"
        title="See it, don't just read about it."
        sub="These are live surfaces from the ClickBox console, running in this page."
      />
      <div className="mt-12 space-y-6">
        <ShotFrame
          caption="Alert Center — every signal, one triage surface."
          embedSrc="/app/alerts"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ShotFrame
            caption="Incident Queue — cases, ownership, SLAs."
            embedSrc="/app/incidents"
            tall
          />
          <ShotFrame
            caption="Identity Center — risk across every user."
            embedSrc="/app/identity"
            tall
          />
        </div>
      </div>
    </section>
  );
}

function ShotFrame({
  caption,
  embedSrc,
  tall,
}: {
  caption: string;
  embedSrc: string;
  tall?: boolean;
}) {
  return (
    <Reveal>
      <figure>
        <div
          className="overflow-hidden rounded-xl border border-white/8 bg-[#07090C]"
          style={{ boxShadow: "0 50px 110px -40px rgba(0,0,0,0.9)" }}
        >
          <div
            className={`relative w-full ${tall ? "aspect-[4/3]" : "aspect-[16/9]"}`}
          >
            <iframe
              src={embedSrc}
              title={caption}
              loading="lazy"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0, background: "#07090C" }}
            />
          </div>
        </div>
        <figcaption
          className="mt-3 text-[11.5px] text-white/40"
          style={monoFont}
        >
          {caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}

/* ---------------------- AI INVESTIGATOR WORKFLOW ---------------------- */

const AI_STEPS = [
  { t: "Reads 18,000 raw events", meta: "ingest" },
  { t: "Clusters related alerts", meta: "correlate" },
  { t: "Eliminates false positives", meta: "score" },
  { t: "Builds the incident timeline", meta: "assemble" },
  { t: "Recommends a response", meta: "act" },
];

function AIWorkflow() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="AI Investigator"
        title="What the AI actually does."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <Reveal className="rounded-2xl border border-white/8 bg-[#080B0F] p-7">
          <ol className="relative space-y-6 pl-8">
            <div
              aria-hidden
              className="absolute bottom-2 left-[7px] top-2 w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(255,255,255,.25), transparent)",
              }}
            />
            {AI_STEPS.map((s, i) => (
              <li key={s.t} className="relative">
                <span
                  className="absolute -left-[26px] top-1.5 flex size-[15px] items-center justify-center rounded-full border border-white/25 bg-[#05070A]"
                >
                  <span
                    className="size-1.5 rounded-full"
                    style={{ background: "var(--primary)" }}
                  />
                </span>
                <div
                  className="text-[10.5px] tracking-[0.2em] text-white/35"
                  style={monoFont}
                >
                  {String(i + 1).padStart(2, "0")} · {s.meta}
                </div>
                <div
                  className="mt-1 text-[15px] font-medium text-white"
                  style={displayFont}
                >
                  {s.t}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal
          delay={100}
          className="overflow-hidden rounded-2xl border border-white/8 bg-[#080B0F]"
        >
          <div className="flex items-center gap-2 border-b border-white/8 bg-black/40 px-4 py-3">
            <Sparkles
              className="size-3.5"
              style={{ color: "var(--primary)" }}
            />
            <span className="text-[12px] font-medium text-white/85">
              ClickBox Copilot
            </span>
            <span
              className="ml-auto text-[10.5px] text-white/35"
              style={monoFont}
            >
              incident · INC-42188
            </span>
          </div>
          <div className="space-y-4 p-5 text-[13px] leading-[1.65]">
            <div className="rounded-lg bg-white/[0.03] px-3.5 py-2.5 text-white/80">
              <span
                className="mr-2 text-[10px] uppercase tracking-[0.2em] text-white/35"
                style={monoFont}
              >
                analyst
              </span>
              What happened with SRV-DB-07?
            </div>
            <div
              className="rounded-lg border px-3.5 py-3 text-white/85"
              style={{
                borderColor:
                  "color-mix(in oklab, var(--primary) 40%, transparent)",
                background:
                  "color-mix(in oklab, var(--primary) 8%, transparent)",
              }}
            >
              <span
                className="mr-2 text-[10px] uppercase tracking-[0.2em]"
                style={{
                  ...monoFont,
                  color: "color-mix(in oklab, var(--primary) 92%, white)",
                }}
              >
                copilot
              </span>
              SRV-DB-07 saw a successful SSH login from an unrecognized ASN at
              02:14 UTC, followed by 3 privileged queries against{" "}
              <span style={monoFont} className="text-white">
                customers.pii
              </span>
              . I've correlated this with an OAuth consent phish on{" "}
              <span style={monoFont} className="text-white">
                sarah.chen@contoso.com
              </span>{" "}
              from 4 hours earlier. Mapped to{" "}
              <span style={monoFont} className="text-white">
                T1078 · T1213
              </span>
              . Recommended action: revoke the token and quarantine the host.
            </div>
            <div className="flex flex-wrap gap-2">
              {["Draft executive brief", "Open incident", "Explain T1078"].map(
                (c) => (
                  <button
                    key={c}
                    className="rounded-md border border-white/8 bg-white/[0.02] px-2.5 py-1 text-[11.5px] text-white/65 transition-colors hover:border-white/25 hover:text-white"
                  >
                    {c}
                  </button>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------- TRUST & SECURITY ------------------------- */

const TRUST = [
  { icon: KeyRound, t: "Role-based access control", b: "Least-privilege by default; scoped roles for analyst, lead, admin, auditor." },
  { icon: ScrollText, t: "Full audit logging", b: "Tamper-evident logs for every read, write, and action across the console." },
  { icon: Fingerprint, t: "SSO & SAML", b: "Bring your identity provider — Okta, Entra ID, Google, custom SAML." },
  { icon: Boxes, t: "Data residency options", b: "Pick your region for storage and processing to match your policy." },
];

function Trust() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Trust"
        title="Built for how security teams actually operate."
        sub="Formal certification programs are underway. In the meantime, here's what's already true about how ClickBox is architected."
      />
      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
        {TRUST.map((c, i) => (
          <Reveal key={c.t} delay={i * 60}>
            <div className="flex h-full gap-4 rounded-xl border border-white/8 bg-[#080B0F] p-5 transition-colors hover:border-white/18">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] text-white/85">
                <c.icon className="size-[18px]" />
              </div>
              <div className="min-w-0">
                <div
                  className="text-[14.5px] font-semibold text-white"
                  style={displayFont}
                >
                  {c.t}
                </div>
                <div className="mt-1 text-[13px] leading-[1.6] text-white/50">
                  {c.b}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- DEVELOPERS --------------------------- */

const CODE_SAMPLES: Record<string, string> = {
  REST: `curl https://api.clickbox.io/v1/investigations \\
  -H "Authorization: Bearer $CLICKBOX_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "entity": "sarah.chen@contoso.com",
    "window": "24h"
  }'`,
  Python: `from clickbox import ClickBox

cb = ClickBox(api_key=os.environ["CLICKBOX_KEY"])

case = cb.investigations.create(
    entity="sarah.chen@contoso.com",
    window="24h",
)

print(case.summary)   # AI-generated incident narrative
print(case.timeline)  # ordered evidence artifacts`,
  Node: `import { ClickBox } from "@clickbox/sdk";

const cb = new ClickBox({ apiKey: process.env.CLICKBOX_KEY });

const case_ = await cb.investigations.create({
  entity: "sarah.chen@contoso.com",
  window: "24h",
});

console.log(case_.summary);   // AI-generated incident narrative
console.log(case_.timeline);  // ordered evidence artifacts`,
};

function Developers() {
  const [tab, setTab] = useState<keyof typeof CODE_SAMPLES>("REST");
  return (
    <section id="developers" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Developers"
        title="Built API-first."
        sub="Every action in the console is an API call. Wire ClickBox into your SOAR, ticketing, or custom internal tools."
      />

      <Reveal className="mt-10 overflow-hidden rounded-xl border border-white/8 bg-[#05070A]">
        <div className="flex items-center gap-1 border-b border-white/8 px-2 py-1.5">
          {(Object.keys(CODE_SAMPLES) as (keyof typeof CODE_SAMPLES)[]).map(
            (k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className="rounded-md px-3 py-1 text-[12px] font-medium transition-colors"
                style={{
                  color: tab === k ? "#fff" : "rgba(255,255,255,0.5)",
                  background:
                    tab === k ? "rgba(255,255,255,0.08)" : "transparent",
                }}
              >
                {k}
              </button>
            ),
          )}
          <a
            href="#"
            className="ml-auto flex items-center gap-1.5 rounded-md px-3 py-1 text-[12px] text-white/55 transition-colors hover:text-white"
          >
            <BookOpen className="size-3.5" /> Read the docs
          </a>
        </div>
        <pre
          className="overflow-x-auto p-5 text-[12.5px] leading-[1.7] text-white/80"
          style={monoFont}
        >
          <code>{CODE_SAMPLES[tab]}</code>
        </pre>
      </Reveal>
    </section>
  );
}

/* ----------------------------- PRICING ----------------------------- */

const TIERS = [
  {
    name: "Professional",
    body: "For growing security teams that need one console across their stack.",
    features: [
      "Up to 25 analysts",
      "All core modules",
      "AI Investigator",
      "Standard integrations",
      "Business-hours support",
    ],
  },
  {
    name: "Enterprise",
    featured: true,
    body: "For SOC teams with strict compliance, custom scale, and 24×7 needs.",
    features: [
      "Unlimited analysts",
      "SSO/SAML + full RBAC",
      "Custom integrations & playbooks",
      "Data residency options",
      "Dedicated 24×7 support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Pricing"
        title="Priced to the environment, not the seat."
        sub="Every SOC deployment is different. Both plans are custom-quoted to your data volume, integrations, and support tier."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {TIERS.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <div
              className="relative h-full overflow-hidden rounded-2xl border p-8"
              style={{
                borderColor: t.featured
                  ? "color-mix(in oklab, var(--primary) 45%, transparent)"
                  : "rgba(255,255,255,0.08)",
                background: t.featured
                  ? "linear-gradient(180deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 55%), #080B0F"
                  : "#080B0F",
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="text-[14px] font-semibold text-white"
                  style={displayFont}
                >
                  {t.name}
                </div>
                {t.featured && (
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em]"
                    style={{
                      background:
                        "color-mix(in oklab, var(--primary) 18%, transparent)",
                      color: "color-mix(in oklab, var(--primary) 92%, white)",
                    }}
                  >
                    Most teams
                  </span>
                )}
              </div>
              <div
                className="mt-3 text-[24px] font-semibold text-white"
                style={displayFont}
              >
                Contact sales
              </div>
              <p className="mt-2 text-[13px] leading-[1.6] text-white/50">
                {t.body}
              </p>
              <ul className="mt-6 space-y-2.5 text-[13px]">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-white/75">
                    <span
                      className="mt-[7px] size-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--primary)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={
                  t.featured
                    ? "btn-primary mt-8 w-full justify-center"
                    : "btn-ghost mt-8 w-full justify-center"
                }
              >
                Book a demo <ArrowRight className="size-3.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */

const FOOTER_COLS = [
  { title: "Platform", links: ["Console", "AI Investigator", "Integrations", "Pricing"] },
  { title: "Solutions", links: ["Enterprise SOC", "MSSPs", "Financial services", "Public sector"] },
  { title: "Resources", links: ["Docs", "API", "Status", "Changelog"] },
  { title: "Company", links: ["About", "Security", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms"] },
];

function Footer() {
  return (
    <footer id="book" className="relative border-t border-white/8 bg-black">
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div
          className="relative overflow-hidden rounded-2xl border p-8 md:p-14"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            background: "#07090C",
          }}
        >
          <GridField size={40} opacity={0.06} />
          <Bloom className="-left-20 -top-24 h-72 w-[36rem]" intensity={0.16} />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3
                className="text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[38px]"
                style={displayFont}
              >
                Ready to see ClickBox on your telemetry?
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.65] text-white/55">
                A 30-minute walkthrough with an engineer, on your stack. No
                slide decks.
              </p>
            </div>
            <a
              href="mailto:hello@clickbox.io"
              className="btn-primary shrink-0"
            >
              Book a demo <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src={clickboxLogo.url}
                alt="ClickBox"
                className="size-6 rounded object-contain"
              />
              <span
                className="text-[14px] font-semibold tracking-[-0.02em] text-white"
                style={displayFont}
              >
                ClickBox
              </span>
            </div>
            <p className="mt-4 text-[12.5px] leading-[1.65] text-white/40">
              AI-native Security Operations for teams that need answers, not
              more alerts.
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div
                className="text-[10px] uppercase tracking-[0.22em] text-white/35"
                style={monoFont}
              >
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] text-white/65 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-6 text-[11.5px] text-white/35">
          <div>© 2026 ClickBox</div>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-white">Twitter</a>
            <a href="#" className="transition-colors hover:text-white">LinkedIn</a>
            <a href="#" className="transition-colors hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ PAGE ------------------------------ */

function Landing() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#000000", color: "#E9EEF3" }}
    >
      <Nav />
      <Hero />
      <ProductDemos />
      <Narrative />
      <CapabilityStack />
      <Pipeline />
      <Modules />
      <IntegrationsGrid />
      <Customers />
      <Trust />
      <Developers />
      <Pricing />
      <Footer />
    </div>
  );
}
