import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  FileSearch,
  Gavel,
  GraduationCap,
  KeyRound,
  Landmark,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Library,
  Menu,
  NotebookPen,
  Presentation,
  Radar,
  Rocket,
  ScrollText,
  ShieldCheck,
  Tags,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

import { CommandCenter, InvestigationWorkspace, ExecutiveDashboard, ProofStrip } from "@/components/soc/marketing/demos";
import { DemoSection, DemoIntro } from "@/components/soc/marketing/chrome";
import { Pathways, Schematic } from "@/components/soc/marketing/art";
import { Mark, BrandLockup } from "@/components/soc/marketing/brand";
import { CountUp } from "@/components/soc/ui/count-up";
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
          "ThreatLens — Security Investigation & Analyst Development Platform",
      },
      {
        name: "description",
        content:
          "ThreatLens simulates realistic SOC investigations across identity, endpoint, email, and cloud — and grades your investigation against a hidden ground truth. Not a SIEM. A cyber range for analysts.",
      },
      {
        property: "og:title",
        content: "ThreatLens — Security Investigation & Analyst Development Platform",
      },
      {
        property: "og:description",
        content:
          "Realistic alerts. Real investigations. Graded on your evidence, not just your answer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
});

/* ------------------------------- NAV ------------------------------- */

const NAV_LINKS: [string, string][] = [
  ["Platform", "/platform"],
  ["Investigations", "/investigations"],
  ["Who it's for", "#solutions"],
  ["Pricing", "#pricing"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Close the mobile menu on route change / resize past the mobile breakpoint.
  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || menuOpen ? "rgba(6,9,13,0.92)" : "transparent",
        borderBottom: scrolled || menuOpen
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        backdropFilter: scrolled || menuOpen ? "blur(18px) saturate(140%)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <a href="/" className="flex items-center gap-2.5" style={displayFont}>
          <Mark />
          <BrandLockup />
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="rounded-md px-3 py-1.5 text-[13px] text-white/60 transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-1.5 md:flex">
          <Link
            to="/signup"
            className="rounded-md px-3 py-1.5 text-[13px] text-white/60 transition-colors hover:text-white"
          >
            Get Started
          </Link>
          <Link to="/login" className="btn-primary text-[13px]">
            Login <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="flex items-center gap-1.5 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex size-9 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] text-white/80 transition-colors hover:text-white"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/8 px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map(([l, h]) => (
              <a
                key={l}
                href={h}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-[15px] text-white/75 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-white/8 pt-4">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Login <ArrowRight className="size-3.5" />
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="btn-ghost w-full justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------- HERO ------------------------------- */

/** Atmospheric security graph + schematic plate behind the headline. */
function HeroArtwork() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, #000 0%, rgba(0,0,0,0.9) 18%, rgba(0,0,0,0.55) 36%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.1) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{ background: "linear-gradient(180deg, #000, transparent)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background: "linear-gradient(180deg, transparent, #000)",
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative z-0 overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36"
      style={{ background: "#000000", color: "#EDEDED" }}
    >
      <HeroArtwork />
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-6">
          <div>
            <Reveal>
              <h1
                className="text-[26px] font-semibold leading-[1.15] tracking-[-0.025em] text-white sm:text-[30px] md:text-[34px]"
                style={displayFont}
              >
                Real incidents. Real investigation. Real skills.
              </h1>
            </Reveal>

            <Reveal delay={110}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to="/signup" className="btn-primary">
                  Start investigating <ArrowRight className="size-3.5" />
                </Link>
                <a href="mailto:info@useclickbox.com" className="btn-ghost">
                  For institutions &amp; teams
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative lg:-mr-6 xl:-mr-24 2xl:-mr-40">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-16 -inset-y-14 -z-10"
                style={{
                  background:
                    "radial-gradient(900px 380px at 50% 20%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 70%)",
                }}
              />
              <div className="rounded-2xl shadow-[0_60px_140px_-40px_rgba(0,0,0,0.85)]">
                <CommandCenter />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={280} className="mt-14 md:mt-20">
          <ProofStrip />
        </Reveal>
      </div>
    </section>
  );

}

/* -------------------------- PIPELINE STRIP -------------------------- */

const STEPS = [
  { n: "01", icon: FileSearch, title: "Evidence Review", body: "Examine activity across identity, endpoint, email, cloud, and network telemetry. Determine which signals matter and preserve the evidence that supports your investigation." },
  { n: "02", icon: Lightbulb, title: "Hypothesis", body: "Develop a working explanation of what happened, then challenge it against the available evidence. Deliberate decoys help test whether your reasoning holds up." },
  { n: "03", icon: NotebookPen, title: "Investigation Notes", body: "Record your observations, assumptions, questions, and conclusions as the investigation develops. Your reasoning becomes part of the assessment." },
  { n: "04", icon: ScrollText, title: "Timeline", body: "Organize relevant events into a coherent timeline and identify the sequence that connects the individual signals into an incident." },
  { n: "05", icon: Gavel, title: "Findings & Verdict", body: "Classify the incident and explain your conclusion. Select the response actions you would take based on the evidence and observed impact." },
  { n: "06", icon: BarChart3, title: "Scoring", body: "Your investigation is evaluated against the scenario's hidden ground truth, including evidence selection, reasoning, findings, and response decisions." },
];

function LearningJourney() {
  return (
    <section style={{ background: "#FFFFFF", color: "#0A0C0F" }}>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          tone="light"
          eyebrow="How it works"
          title="From first signal to final verdict."
          sub="Six stages. Every one of them yours to work through."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="relative">
                <div className="flex size-11 items-center justify-center rounded-lg border border-black/10 bg-black/[0.03]">
                  <s.icon className="size-[18px] text-black/70" />
                </div>
                <div
                  className="mt-4 text-[10.5px] tracking-[0.2em] text-black/35"
                  style={monoFont}
                >
                  {s.n}
                </div>
                <div
                  className="mt-1.5 text-[15px] font-semibold text-[#0A0C0F]"
                  style={displayFont}
                >
                  {s.title}
                </div>
                <div className="mt-1.5 max-w-sm text-[13px] leading-[1.65] text-black/55">
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


/* ---------------------------- CUSTOMERS ---------------------------- */

const INDIVIDUAL_SEGMENTS = [
  { icon: GraduationCap, t: "Students & career switchers", b: "Portfolio-ready case work for people breaking into their first SOC role." },
  { icon: ShieldCheck, t: "SOC analysts", b: "Building the investigation reps a certification alone can't teach." },
  { icon: Library, t: "Cybersecurity learners", b: "Structured practice, not another course you'll forget by next month." },
  { icon: Users, t: "Independent professionals", b: "Staying sharp between jobs, or preparing for an interview loop." },
];

const ORG_SEGMENTS = [
  { icon: GraduationCap, t: "Universities & bootcamps", b: "Cybersecurity programs that need hands-on labs, not another slide deck." },
  { icon: Building2, t: "Enterprises", b: "Onboarding new hires or leveling up junior analysts, at their own pace." },
  { icon: Landmark, t: "Government agencies", b: "Workforce-ready SOC training without standing up a live range." },
  { icon: TrendingUp, t: "Workforce development programs", b: "Measurable outcomes for public and nonprofit training initiatives." },
  { icon: Radar, t: "Training providers & MSSPs", b: "A lab component you don't have to build or maintain yourselves." },
  { icon: Rocket, t: "Accelerators & incubators", b: "Practical security training as part of a founder or cohort curriculum." },
];

type Segment = { icon: typeof GraduationCap; t: string; b: string };

function SegmentGrid({ label, items }: { label: string; items: Segment[] }) {
  return (
    <div className="mt-10 first:mt-0">
      <div
        className="text-[10.5px] uppercase tracking-[0.2em] text-black/40"
        style={monoFont}
      >
        {label}
      </div>
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div key={s.t} className="glass-card-dark card-hover-lift h-full p-6">
            <div className="icon-frame-dark text-white/85">
              <s.icon className="size-[18px]" />
            </div>
            <h3
              className="mt-4 text-[15px] font-semibold text-white"
              style={displayFont}
            >
              {s.t}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.6] text-white/55">
              {s.b}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomerTypes() {
  return (
    <section id="solutions" style={{ background: "#FFFFFF", color: "#0A0C0F" }}>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          tone="light"
          eyebrow="Who it's for"
          title="Built for individuals and organizations."
          sub="A practical environment to build skills. Infrastructure to train talent at scale."
        />
        <SegmentGrid label="For individuals" items={INDIVIDUAL_SEGMENTS} />
        <SegmentGrid label="For organizations" items={ORG_SEGMENTS} />
      </div>
    </section>
  );
}

/* ------------------------------- TRUST ------------------------------- */

const TRUST_STATS: {
  icon: typeof Library;
  target: number | null;
  suffix?: string;
  staticValue?: string;
  label: string;
}[] = [
  { icon: Library, target: 50, suffix: "+", label: "Investigation scenarios" },
  { icon: Boxes, target: 4, label: "Security domains covered" },
  { icon: Tags, target: 12, label: "MITRE ATT&CK techniques mapped" },
  { icon: GraduationCap, target: 2, label: "Structured learning tracks" },
  { icon: Users, target: null, staticValue: "Cohorts", label: "Organization support" },
];

/** Fires `seen` once an element scrolls into view — drives the counters below. */
function useOnScreenOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Trust() {
  const { ref, seen } = useOnScreenOnce<HTMLDivElement>();
  return (
    <section style={{ background: "#000000", color: "#EDEDED" }}>
      <div ref={ref} className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {TRUST_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 50}>
              <div className="glass-card-dark card-hover-lift h-full p-5">
                <div className="icon-frame-dark text-white/85">
                  <s.icon className="size-[18px]" />
                </div>
                <div
                  className="mt-4 text-[22px] font-semibold tracking-[-0.02em] text-white"
                  style={displayFont}
                >
                  {s.target === null ? (
                    s.staticValue
                  ) : (
                    <>
                      <CountUp value={seen ? s.target : 0} />
                      {s.suffix}
                    </>
                  )}
                </div>
                <div className="mt-1 text-[12px] leading-[1.4] text-white/50">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- PRODUCT ECOSYSTEM ------------------------- */

const ECOSYSTEM = [
  { icon: LayoutDashboard, name: "SOC Console", body: "The unified investigation workspace." },
  { icon: Layers, name: "Investigation Workspace", body: "Evidence, timeline, and notes — one place." },
  { icon: Radar, name: "Scenario Engine", body: "A fresh, realistic incident every session." },
  { icon: KeyRound, name: "Threat Intelligence", body: "Indicators, actors, campaigns — with decoys." },
  { icon: BarChart3, name: "Scoring Engine", body: "Graded against a hidden ground truth." },
  { icon: Presentation, name: "Instructor Tools", body: "Rosters, grading, scenario assignment." },
  { icon: TrendingUp, name: "Progress Tracking", body: "Score trend and technique mastery over time." },
  { icon: Award, name: "Certificates", body: "Verifiable proof of completion." },
  { icon: Building2, name: "Organization Management", body: "Cohorts, seats, and reporting for teams." },
];

function ProductEcosystem() {
  return (
    <section id="platform" style={{ background: "#FFFFFF", color: "#0A0C0F" }}>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHead tone="light" eyebrow="Platform" title="One ecosystem. Every capability." />
        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 60}>
              <div className="glass-card-dark card-hover-lift h-full p-6">
                <div className="icon-frame-dark text-white/85">
                  <m.icon className="size-[18px]" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-white" style={displayFont}>
                  {m.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-white/55">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PRICING ----------------------------- */

const TIERS = [
  {
    name: "Individual",
    price: "Free",
    cta: "Start investigating",
    ctaHref: "/signup",
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
    cta: "Let's Talk",
    ctaHref: "mailto:info@useclickbox.com",
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
    <section id="pricing" style={{ background: "#000000", color: "#EDEDED" }}>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Pricing"
        title="Start free. Scale when your team is ready."
        sub="Free for individuals. Custom-priced for cohorts and institutions."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {TIERS.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <div
              className="glass-card-dark relative h-full overflow-hidden p-8"
              style={{
                borderColor: t.featured
                  ? "color-mix(in oklab, var(--primary) 45%, transparent)"
                  : undefined,
                background: t.featured
                  ? "linear-gradient(180deg, color-mix(in oklab, var(--primary) 12%, transparent), transparent 55%), #0A0A0A"
                  : undefined,
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
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */

const FOOTER_COLS = [
  {
    title: "Platform",
    links: [
      { l: "Console", h: "/app" },
      { l: "Investigations", h: "/investigations" },
      { l: "Correlation", h: "/correlation" },
      { l: "Scoring", h: "/scoring" },
    ],
  },
  {
    title: "Who it's for",
    links: [
      { l: "For individuals", h: "/students" },
      { l: "For organizations", h: "/institutions" },
      { l: "For instructors", h: "/instructors" },
    ],
  },
  {
    title: "Company",
    links: [
      { l: "Security", h: "/security" },
      { l: "Contact", h: "mailto:info@useclickbox.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { l: "Privacy", h: "/privacy" },
      { l: "Terms", h: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-black">
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div
          className="relative overflow-hidden rounded-2xl border p-8 md:p-14"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            background: "#080808",
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
            </div>
            <div className="flex shrink-0 gap-3">
              <Link to="/signup" className="btn-primary">
                Get started <ArrowRight className="size-4" />
              </Link>
              <a href="mailto:info@useclickbox.com" className="btn-ghost">
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
              <span className="text-white" style={displayFont}>
                <BrandLockup size="footer" />
              </span>
            </div>
            <p className="mt-4 text-[12.5px] leading-[1.65] text-white/40">
              ThreatLens is a security investigation and analyst
              development platform built to help individuals and
              organizations develop practical incident investigation
              capability through realistic, hands-on scenarios.
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
                {col.links.map((item) => (
                  <li key={item.l}>
                    {item.h.startsWith("/") ? (
                      <Link
                        to={item.h}
                        className="text-[13px] text-white/65 transition-colors hover:text-white"
                      >
                        {item.l}
                      </Link>
                    ) : (
                      <a
                        href={item.h}
                        className="text-[13px] text-white/65 transition-colors hover:text-white"
                      >
                        {item.l}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/8 pt-6 text-[11.5px] text-white/35">
          <div>© 2026 ThreatLens</div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------- PRODUCT DEMOS -------------------------- */

/** The two demos kept on the homepage — Investigation Workspace and
 * Progress & Instructor Dashboard. Correlation Practice moved to its own
 * dedicated page (/correlation) to keep the homepage shorter. */
function HomeDemos() {
  return (
    <div id="product" className="relative" style={{ background: "#000000", color: "#EDEDED" }}>
      <DemoSection id="workspace">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Pathways opacity={0.32} />
        </div>
        <DemoIntro
          index="01"
          kicker="Investigation Workspace"
          title="Investigate with the tools analysts actually use."
          body="Evidence, timeline, and case notes in one workspace."
        />
        <Reveal className="mt-14">
          <InvestigationWorkspace />
        </Reveal>
      </DemoSection>

      <DemoSection id="executive">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Schematic opacity={0.22} />
        </div>
        <DemoIntro
          index="02"
          kicker="Progress & Instructor Dashboard"
          title="Numbers that actually track whether you're learning."
          body="Score trend and mastery — for you, or a whole cohort."
        />
        <Reveal className="mt-14">
          <ExecutiveDashboard />
        </Reveal>
      </DemoSection>
    </div>
  );
}

/* ------------------------------ PAGE ------------------------------ */

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <Trust />
      <ProductEcosystem />
      <HomeDemos />
      <CustomerTypes />
      <LearningJourney />
      <Pricing />
      <Footer />
    </div>
  );
}
