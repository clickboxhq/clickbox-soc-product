import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Database,
  Layers,
  Radar,
  ScrollText,
  Workflow,
} from "lucide-react";

import { CommandCenter, InvestigationWorkspace, ExecutiveDashboard, ProofStrip } from "@/components/soc/marketing/demos";
import { DemoSection, DemoIntro } from "@/components/soc/marketing/chrome";
import { GraphField, Pathways, Schematic } from "@/components/soc/marketing/art";
import { Mark, BrandLockup } from "@/components/soc/marketing/brand";
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
        content: "ClickBox — ThreatLens: the SOC investigation simulator",
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

/* ------------------------------- NAV ------------------------------- */

export function Nav() {
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
        <a href="/" className="flex items-center gap-2.5" style={displayFont}>
          <Mark />
          <BrandLockup />
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["Platform", "/platform"],
            ["Investigations", "/investigations"],
            ["Who it's for", "#solutions"],
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
            to="/signup"
            className="hidden rounded-md px-3 py-1.5 text-[13px] text-white/60 transition-colors hover:text-white sm:inline-flex"
          >
            Get Started
          </Link>
          <Link to="/login" className="btn-primary text-[13px]">
            Login <ArrowRight className="size-3.5" />
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
  { n: "01", icon: Database, title: "Scenario generated", body: "Realistic, synthetic telemetry — never real customer data." },
  { n: "02", icon: Layers, title: "Investigate evidence", body: "Work the alerts across identity, endpoint, email, and cloud." },
  { n: "03", icon: Radar, title: "Build the timeline", body: "Assemble the case and write your incident summary." },
  { n: "04", icon: ScrollText, title: "Submit your verdict", body: "True positive, false positive, or benign — your call." },
  { n: "05", icon: Workflow, title: "Get scored", body: "Graded against a hidden ground truth, evidence included." },
];

function Pipeline() {
  return (
    <section style={{ background: "#FFFFFF", color: "#0A0C0F" }}>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          tone="light"
          eyebrow="How it works"
          title="From alert to graded investigation."
          sub="Five stages, every one of them yours to work through. Nothing is solved for you — that's the entire point."
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
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
  { t: "Students & career switchers", b: "Portfolio-ready case work for people breaking into their first SOC role." },
  { t: "SOC analysts", b: "Building the investigation reps a certification alone can't teach." },
  { t: "Cybersecurity learners", b: "Structured practice, not another course you'll forget by next month." },
  { t: "Independent professionals", b: "Staying sharp between jobs, or preparing for an interview loop." },
];

const ORG_SEGMENTS = [
  { t: "Universities & bootcamps", b: "Cybersecurity programs that need hands-on labs, not another slide deck." },
  { t: "Enterprises", b: "Onboarding new hires or leveling up junior analysts, at their own pace." },
  { t: "Government agencies", b: "Workforce-ready SOC training without standing up a live range." },
  { t: "Workforce development programs", b: "Measurable outcomes for public and nonprofit training initiatives." },
  { t: "Training providers & MSSPs", b: "A lab component you don't have to build or maintain yourselves." },
  { t: "Accelerators & incubators", b: "Practical security training as part of a founder or cohort curriculum." },
];

function SegmentGrid({ label, items }: { label: string; items: { t: string; b: string }[] }) {
  return (
    <div className="mt-10 first:mt-0">
      <div
        className="text-[10.5px] uppercase tracking-[0.2em] text-black/40"
        style={monoFont}
      >
        {label}
      </div>
      <div className="mt-3 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/8 bg-black/[0.04] md:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div
            key={s.t}
            className="group relative bg-white p-6 transition-colors duration-300 hover:bg-black/[0.02]"
          >
            <h3
              className="text-[15px] font-semibold text-[#0A0C0F]"
              style={displayFont}
            >
              {s.t}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.6] text-black/55">
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
              <p className="mt-4 text-[14.5px] leading-[1.65] text-white/55">
                Start free, alone. Or bring a cohort.
              </p>
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
              ThreatLens — the SOC investigation simulator. Learn by doing the
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
          body="Work the case across identity, endpoint, email and cloud, pin the evidence that matters, and build a narrative you can defend."
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
          body="Score trend and technique mastery for you — or a whole cohort's progress at a glance for instructors."
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
      <CustomerTypes />
      <HomeDemos />
      <Pipeline />
      <Pricing />
      <Footer />
    </div>
  );
}
