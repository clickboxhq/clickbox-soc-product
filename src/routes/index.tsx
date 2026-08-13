import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  Radar,
  ScrollText,
  Workflow,
} from "lucide-react";

import clickboxLogo from "@/assets/clickbox-logo.asset.json";
import { CapabilityStack } from "@/components/soc/capability-stack";
import { IntegrationsGrid } from "@/components/soc/integrations-grid";
import { Narrative } from "@/components/soc/marketing/narrative";
import { ProductDemos, ProofStrip } from "@/components/soc/marketing/demos";
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
    <section className="relative overflow-hidden px-6 pb-28 pt-36 md:pb-36 md:pt-48">
      <HeroArtwork />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
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
              AI-native Security Operations Platform
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="mt-8 text-[46px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[86px]"
              style={displayFont}
            >
              Security operations,
              <br />
              finally correlated.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-[1.65] text-white/55 [text-wrap:pretty]">
              ClickBox joins identity, endpoint, email, cloud and network signal
              into a single security graph — then tells your analysts what
              actually happened, and what to do about it.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#book" className="btn-primary w-full sm:w-auto">
                Book a demo <ArrowRight className="size-4" />
              </a>
              <a href="#product" className="btn-ghost w-full sm:w-auto">
                <Layers className="size-4" /> Explore the platform
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <ProofStrip />
          </Reveal>
        </div>
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

/* ---------------------------- CUSTOMERS ---------------------------- */

const SEGMENTS = [
  { t: "Financial institutions", b: "Tier-1 banks and payment networks running 24×7 fraud and intrusion response." },
  { t: "Government agencies", b: "National CERTs and defence programs with strict residency and audit demands." },
  { t: "Technology companies", b: "Platform security teams protecting multi-tenant cloud estates at scale." },
  { t: "Managed security providers", b: "MSSPs operating dozens of client tenants from one correlated console." },
];

function Customers() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <SectionHead
        eyebrow="Trusted by"
        title="Deployed where the consequences are real."
        sub="ClickBox is built for teams whose incidents make the news if they're handled badly."
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
              q: "We replaced three consoles and a spreadsheet. The first week, ClickBox closed a phishing-to-cloud chain our SIEM had split into nine unrelated alerts.",
              a: "Director of Security Operations, global payments",
            },
            {
              q: "The narrative it writes is the narrative we hand to regulators. That has never been true of a tool before.",
              a: "Head of Cyber Defence, public sector",
            },
            {
              q: "Our analysts stopped triaging and started investigating. MTTR went from hours to minutes.",
              a: "SOC Manager, enterprise technology",
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
