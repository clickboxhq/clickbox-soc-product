import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useId, useState } from "react";
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
  MousePointer2,
  Radar,
  ScrollText,
  Workflow,
} from "lucide-react";

import { CapabilityStack } from "@/components/soc/capability-stack";
import { Narrative } from "@/components/soc/marketing/narrative";
import { CommandCenter, ProductDemos, ProofStrip } from "@/components/soc/marketing/demos";
import { GraphField, Schematic } from "@/components/soc/marketing/art";
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
          "ClickBox — SOCVerse. Learn SOC investigation by doing it.",
      },
      {
        name: "description",
        content:
          "SOCVerse simulates realistic SOC investigations across identity, endpoint, email, and cloud — and grades your investigation against a hidden ground truth. Not a SIEM. A cyber range for analysts.",
      },
      {
        property: "og:title",
        content: "ClickBox — SOCVerse: the SOC investigation simulator",
      },
      {
        property: "og:description",
        content:
          "Realistic alerts. Real investigations. Graded on your evidence, not just your answer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ------------------------------- BRAND MARK ------------------------------- */

/** The ClickBox mark — a cursor, filled and beveled like glass. */
function Mark({ className = "size-7" }: { className?: string }) {
  const gradientId = `mark-gradient-${useId()}`;
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[7px] bg-black ${className}`}
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#C7CDD4" />
          </linearGradient>
        </defs>
      </svg>
      <MousePointer2
        className="size-[62%] -translate-x-px translate-y-px"
        style={{
          fill: `url(#${gradientId})`,
          stroke: "rgba(255,255,255,0.9)",
          strokeWidth: 1.5,
          strokeLinejoin: "round",
        }}
      />
    </span>
  );
}

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
          <Mark />
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
            ["Who it's for", "#solutions"],
            ["For instructors", "#developers"],
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
          <a
            href="#book"
            className="hidden rounded-md px-3 py-1.5 text-[13px] text-white/60 transition-colors hover:text-white sm:inline-flex"
          >
            For institutions
          </a>
          <Link to="/app" className="btn-primary text-[13px]">
            Open the console <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------- HERO ------------------------------- */

/** Atmospheric security graph + schematic plate behind the headline. */
function HeroArtwork() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <Schematic opacity={0.35} />
      <div className="absolute inset-x-0 top-0 h-[900px]">
        <GraphField opacity={0.34} />
      </div>
      <div
        className="absolute inset-x-0 top-0 h-[820px]"
        style={{
          background:
            "radial-gradient(1100px 460px at 50% -10%, color-mix(in oklab, var(--primary) 15%, transparent), transparent 62%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background: "linear-gradient(180deg, transparent, #000)",
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-24 md:pb-20 md:pt-28">
      <HeroArtwork />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60 backdrop-blur"
              style={monoFont}
            >
              <span
                className="size-1.5 rounded-full"
                style={{
                  background: "var(--primary)",
                  boxShadow:
                    "0 0 10px 2px color-mix(in oklab, var(--primary) 60%, transparent)",
                }}
              />
              SOC Investigation Simulator
            </div>
          </Reveal>

          <Reveal delay={70}>
            <h1
              className="mt-5 text-[38px] font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-[54px]"
              style={displayFont}
            >
              Train Like You'll Work.
            </h1>
          </Reveal>

          <Reveal delay={130}>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-white/55 [text-wrap:pretty]">
              Realistic alerts, real investigations, a hidden ground truth —
              graded on your evidence, not just your answer.
            </p>
          </Reveal>

          <Reveal delay={190}>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/app" className="btn-primary w-full sm:w-auto">
                <Layers className="size-4" /> Start investigating — free
              </Link>
              <a href="#book" className="btn-ghost w-full sm:w-auto">
                For institutions & teams <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="mt-12 md:mt-14">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10"
              style={{
                background:
                  "radial-gradient(900px 320px at 50% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
              }}
            />
            <CommandCenter />
          </div>
        </Reveal>

        <Reveal delay={320}>
          <ProofStrip />
        </Reveal>
      </div>
    </section>
  );

}

/* -------------------------- PIPELINE STRIP -------------------------- */

const STEPS = [
  { n: "01", icon: Database, title: "Scenario generated", body: "Realistic, synthetic telemetry — never real customer data." },
  { n: "02", icon: Layers, title: "You investigate", body: "Work the alerts across identity, endpoint, email, and cloud." },
  { n: "03", icon: BrainCircuit, title: "Correlate & tag", body: "Pin evidence, tag MITRE ATT&CK techniques as you go." },
  { n: "04", icon: Radar, title: "Build the case", body: "Assemble the timeline and write your incident summary." },
  { n: "05", icon: ScrollText, title: "Submit your verdict", body: "True positive, false positive, or benign — your call." },
  { n: "06", icon: Workflow, title: "Get scored", body: "Graded against a hidden ground truth, evidence included." },
];

function Pipeline() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="How it works"
        title="From alert to graded investigation."
        sub="Six stages, every one of them yours to work through. Nothing is solved for you — that's the entire point."
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
  { icon: LayoutDashboard, name: "SOC Console", body: "The unified investigation workspace — Sentinel/Chronicle-familiar." },
  { icon: Radar, name: "Scenario Engine", body: "A realistic incident, generated fresh, every session." },
  { icon: Fingerprint, name: "Identity, Endpoint & Email Portals", body: "Entra-, Defender-, and Outlook-style investigation surfaces." },
  { icon: KeyRound, name: "Threat Intelligence", body: "Indicators, actors, and campaigns — with deliberate decoys." },
  { icon: ClipboardList, name: "Case Management", body: "Evidence, timeline, notes, and verdict — one workspace." },
  { icon: ScrollText, name: "MITRE ATT&CK Mapping", body: "Every technique tagged, every session scored against it." },
  { icon: BarChart3, name: "Scoring & Feedback", body: "Graded on your evidence and reasoning, not just your answer." },
  { icon: FileText, name: "Learning Paths & Certificates", body: "Structured tracks from first alert to job-ready." },
  { icon: Lock, name: "Instructor Tools", body: "Cohorts, rosters, grading overrides, progress at a glance." },
];

function Modules() {
  return (
    <section id="platform" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Platform"
        title="Everything a SOC analyst needs to practice. Nothing they don't."
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

/* ---------------------------- CUSTOMERS ---------------------------- */

const SEGMENTS = [
  { t: "Aspiring analysts", b: "Building the investigation reps a certification alone can't teach." },
  { t: "Bootcamps & universities", b: "Cybersecurity programs that need hands-on labs, not another slide deck." },
  { t: "Career switchers", b: "Portfolio-ready case work for people breaking into their first SOC role." },
  { t: "Corporate upskilling", b: "Teams onboarding new hires or leveling up junior analysts, at their own pace." },
];

function Customers() {
  return (
    <section id="solutions" className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHead
        eyebrow="Who it's for"
        title="Built for whoever has to learn this the hard way."
        sub="SOCVerse is for anyone who needs real investigation reps before the stakes are real."
      />
      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
        {SEGMENTS.map((s, i) => (
          <div
            key={s.t}
            className="group relative bg-[#07090C] p-6 transition-colors duration-300 hover:bg-[#0C1016]"
          >
            <span
              className="text-[10px] tracking-[0.22em] text-white/25"
              style={monoFont}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className="mt-4 text-[15px] font-semibold text-white"
              style={displayFont}
            >
              {s.t}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.6] text-white/50">
              {s.b}
            </p>
          </div>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            {
              q: "I'd passed Security+ but had never actually worked an incident. SOCVerse was the first time I had to defend a verdict with evidence, not just pick an answer.",
              a: "Bootcamp graduate, now Tier 1 SOC analyst",
            },
            {
              q: "We use it as the lab component of our SOC course. Students get graded on their reasoning, not whether they guessed the right MITRE technique.",
              a: "Instructor, cybersecurity program",
            },
            {
              q: "The decoys are what sold me. Half the point is learning what to ignore, and SOCVerse actually punishes you for chasing noise.",
              a: "Self-taught analyst, career switcher",
            },
          ].map((c) => (
            <figure
              key={c.a}
              className="rounded-xl border border-white/8 bg-[#080B0F] p-6"
            >
              <blockquote className="text-[13.5px] leading-[1.7] text-white/75">
                “{c.q}”
              </blockquote>
              <figcaption
                className="mt-4 text-[10.5px] uppercase tracking-[0.16em] text-white/35"
                style={monoFont}
              >
                {c.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
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
        title="Built for how institutions actually operate."
        sub="Formal certification programs are underway. In the meantime, here's what's already true about how ClickBox handles student and cohort data."
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
  REST: `curl https://api.clickbox.io/v1/cohorts/bootcamp-2026/progress \\
  -H "Authorization: Bearer $CLICKBOX_KEY"`,
  Python: `from clickbox import ClickBox

cb = ClickBox(api_key=os.environ["CLICKBOX_KEY"])

progress = cb.cohorts.progress("bootcamp-2026")

print(progress.average_score)   # cohort-wide case score
print(progress.roster)          # per-student breakdown`,
  Node: `import { ClickBox } from "@clickbox/sdk";

const cb = new ClickBox({ apiKey: process.env.CLICKBOX_KEY });

const progress = await cb.cohorts.progress("bootcamp-2026");

console.log(progress.averageScore);  // cohort-wide case score
console.log(progress.roster);        // per-student breakdown`,
};

function Developers() {
  const [tab, setTab] = useState<keyof typeof CODE_SAMPLES>("REST");
  return (
    <section id="developers" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="For instructors"
        title="Rosters, progress, and grades — via API too."
        sub="Sync a roster, pull cohort progress into your LMS gradebook, or export certificates. Every instructor action in the console is also an API call."
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
    name: "Individual",
    price: "Free",
    cta: "Start investigating",
    ctaHref: "/app",
    body: "For anyone building the investigation reps a certification alone can't teach.",
    features: [
      "Unlimited scenarios",
      "All investigation portals",
      "MITRE ATT&CK mapping & scoring",
      "Progress dashboard",
      "Community support",
    ],
  },
  {
    name: "Institutions & Teams",
    featured: true,
    price: "Contact sales",
    cta: "Book a demo",
    ctaHref: "#book",
    body: "For bootcamps, universities, and companies onboarding a cohort at once.",
    features: [
      "Unlimited students/analysts",
      "Cohort rostering & instructor tools",
      "Custom scenario packs",
      "LMS & gradebook integration",
      "Dedicated support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Pricing"
        title="Free to start. Priced for institutions at scale."
        sub="Practice on your own for free. Cohort and institutional plans are custom-quoted to your roster size and needs."
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
                    Most cohorts
                  </span>
                )}
              </div>
              <div
                className="mt-3 text-[24px] font-semibold text-white"
                style={displayFont}
              >
                {t.price}
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
              {t.ctaHref.startsWith("/") ? (
                <Link
                  to={t.ctaHref}
                  className={
                    t.featured
                      ? "btn-primary mt-8 w-full justify-center"
                      : "btn-ghost mt-8 w-full justify-center"
                  }
                >
                  {t.cta} <ArrowRight className="size-3.5" />
                </Link>
              ) : (
                <a
                  href={t.ctaHref}
                  className={
                    t.featured
                      ? "btn-primary mt-8 w-full justify-center"
                      : "btn-ghost mt-8 w-full justify-center"
                  }
                >
                  {t.cta} <ArrowRight className="size-3.5" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */

const FOOTER_COLS = [
  { title: "Platform", links: ["Console", "Scenario library", "Progress dashboard", "Pricing"] },
  { title: "Who it's for", links: ["Aspiring analysts", "Bootcamps & universities", "Career switchers", "Corporate upskilling"] },
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
                Ready to run your first case?
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.65] text-white/55">
                Start free, alone. Or bring a cohort — a 30-minute walkthrough
                with our team, no slide decks.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Link to="/app" className="btn-primary">
                Start investigating <ArrowRight className="size-4" />
              </Link>
              <a href="mailto:hello@clickbox.io" className="btn-ghost">
                For institutions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Mark className="size-6" />
              <span
                className="text-[14px] font-semibold tracking-[-0.02em] text-white"
                style={displayFont}
              >
                ClickBox
              </span>
            </div>
            <p className="mt-4 text-[12.5px] leading-[1.65] text-white/40">
              SOCVerse — the SOC investigation simulator. Learn by doing the
              job, not by reading about it.
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
      <Customers />
      <Trust />
      <Developers />
      <Pricing />
      <Footer />
    </div>
  );
}
