import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  Building2,
  Gavel,
  GraduationCap,
  KeyRound,
  Landmark,
  Layers,
  LayoutDashboard,
  Library,
  Menu,
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
import { GraphField, Pathways, Schematic } from "@/components/soc/marketing/art";
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
          "ClickBox — ThreatLens. Learn SOC investigation by doing it.",
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
        <div className="flex items-center gap-1.5">
          <Link
            to="/signup"
            className="hidden rounded-md px-3 py-1.5 text-[13px] text-white/60 transition-colors hover:text-white sm:inline-flex"
          >
            Get Started
          </Link>
          <Link to="/login" className="btn-primary text-[13px]">
            Login <ArrowRight className="size-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="ml-1 flex size-9 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] text-white/80 transition-colors hover:text-white md:hidden"
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
    <section
      className="relative overflow-hidden px-6 pb-16 pt-24 md:pb-20 md:pt-28"
      style={{ background: "#000000", color: "#E9EEF3" }}
    >
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
              Security Investigation &amp; Analyst Development Platform
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

          <Reveal delay={160}>
            <p
              className="mx-auto mt-4 max-w-2xl text-[11.5px] uppercase tracking-[0.14em] text-white/35"
              style={monoFont}
            >
              Built for individuals · universities · bootcamps · MSSPs ·
              enterprises · government programs · workforce development ·
              accelerators &amp; incubators
            </p>
          </Reveal>

          <Reveal delay={190}>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/signup" className="btn-primary w-full sm:w-auto">
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
  { n: "01", icon: Bell, title: "Alert", body: "A realistic, synthetic alert lands in the queue." },
  { n: "02", icon: Layers, title: "Investigation", body: "Work the evidence across identity, endpoint, email, cloud." },
  { n: "03", icon: ScrollText, title: "Timeline", body: "Assemble the case into an ordered narrative." },
  { n: "04", icon: Gavel, title: "Verdict", body: "True positive, false positive, or benign — your call." },
  { n: "05", icon: BarChart3, title: "Scoring", body: "Graded against a hidden ground truth." },
  { n: "06", icon: TrendingUp, title: "Improvement", body: "Score trend and mastery, case over case." },
];

function LearningJourney() {
  return (
    <section style={{ background: "#FFFFFF", color: "#0A0C0F" }}>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          tone="light"
          eyebrow="Learning journey"
          title="From alert to measurable improvement."
          sub="Six stages, every one of them yours to work through. Nothing is solved for you — that's the entire point."
        />
        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[22px] hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(10,12,15,.14) 10%, rgba(10,12,15,.14) 90%, transparent)",
            }}
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
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
                    className="mt-1.5 text-[14px] font-semibold text-[#0A0C0F]"
                    style={displayFont}
                  >
                    {s.title}
                  </div>
                  <div className="mt-1.5 text-[13px] leading-[1.6] text-black/55">
                    {s.body}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
          title="Built for whoever has to learn this the hard way."
          sub="ThreatLens serves individuals and organizations alike — anyone who needs real investigation reps before the stakes are real."
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
    <section style={{ background: "#000000", color: "#E9EEF3" }}>
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
    <section id="pricing" style={{ background: "#000000", color: "#E9EEF3" }}>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Pricing"
        title="Free to start. Priced for institutions at scale."
        sub="Practice on your own for free. Cohort and institutional plans are custom-quoted to your roster size and needs."
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
      { l: "Contact", h: "mailto:hello@clickbox.io" },
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
            </div>
            <div className="flex shrink-0 gap-3">
              <Link to="/signup" className="btn-primary">
                Get started <ArrowRight className="size-4" />
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
              <span className="text-white" style={displayFont}>
                <BrandLockup size="footer" />
              </span>
            </div>
            <p className="mt-4 text-[12.5px] leading-[1.65] text-white/40">
              ThreatLens — the security investigation &amp; analyst
              development platform. Learn by doing the job, not by reading
              about it.
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

/* -------------------------- PRODUCT DEMOS -------------------------- */

/** The two demos kept on the homepage — Investigation Workspace and
 * Progress & Instructor Dashboard. Correlation Practice moved to its own
 * dedicated page (/correlation) to keep the homepage shorter. */
function HomeDemos() {
  return (
    <div id="product" className="relative" style={{ background: "#000000", color: "#E9EEF3" }}>
      <DemoSection id="workspace">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Pathways opacity={0.32} />
        </div>
        <DemoIntro
          index="01"
          kicker="Investigation Workspace"
          title="Everything you need to investigate. Nothing solved for you."
          body="The real console — evidence, timeline, notes."
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
