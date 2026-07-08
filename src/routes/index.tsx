import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Boxes,
  BrainCircuit,
  ClipboardList,
  Clock,
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
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import clickboxLogo from "@/assets/clickbox-logo.asset.json";
import productDemo from "@/assets/product-demo.mp4.asset.json";
import { ArchitectureDiagram } from "@/components/soc/architecture-diagram";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      {
        title:
          "SOCBOX — AI-native Security Operations. One console. Every signal.",
      },
      {
        name: "description",
        content:
          "SOCBOX correlates alerts across identity, endpoint, email, and cloud — and tells your analysts what actually happened. Book a demo.",
      },
      {
        property: "og:title",
        content: "SOCBOX — AI-native Security Operations",
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

const displayFont = { fontFamily: 'Geist, "Inter", system-ui, sans-serif' };
const monoFont = { fontFamily: '"Geist Mono", "JetBrains Mono", monospace' };

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
      className="fixed inset-x-0 top-0 z-50 transition-[background,border-color] duration-200"
      style={{
        backgroundColor: scrolled ? "rgba(16,21,26,0.85)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5">
          <img src={clickboxLogo.url} alt="SOCBOX" className="size-7 object-contain" />
          <span
            className="text-[15px] font-semibold tracking-tight"
            style={displayFont}
          >
            SOCBOX
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-[13px] text-white/70 md:flex">
          <a href="#platform" className="transition-colors hover:text-white">Platform</a>
          <a href="#solutions" className="transition-colors hover:text-white">Solutions</a>
          <a href="#developers" className="transition-colors hover:text-white">Developers</a>
          <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/app"
            className="hidden rounded-md px-3 py-1.5 text-[13px] text-white/70 transition-colors hover:text-white sm:inline-flex"
          >
            Open console
          </Link>
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-medium text-white transition-all"
            style={{
              background: "#16c784",
              boxShadow: "0 0 0 1px rgba(22,199,132,0.4), 0 8px 24px -8px rgba(22,199,132,0.6)",
            }}
          >
            Book a demo <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------- HERO ------------------------------- */

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-36 md:pt-40">
      {/* ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
        style={{
          background:
            "radial-gradient(1200px 500px at 50% 0%, rgba(22,199,132,0.14), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.06]" />

      <div className="mx-auto max-w-3xl text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11.5px] backdrop-blur"
          style={{
            borderColor: "rgba(22,199,132,0.25)",
            background: "rgba(22,199,132,0.08)",
            color: "#7fecc0",
          }}
        >
          <span
            className="size-1.5 rounded-full"
            style={{ background: "#16c784", boxShadow: "0 0 8px 2px rgba(22,199,132,0.6)" }}
          />
          AI-native Security Operations
        </div>

        <h1
          className="mt-7 text-[40px] font-semibold leading-[1.02] tracking-[-0.025em] text-white md:text-[64px]"
          style={displayFont}
        >
          One console. Every signal.
          <br />
          <span className="text-white/60">Answered in minutes, not shifts.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.6] text-white/70">
          SOCBOX correlates alerts across identity, endpoint, email, and cloud —
          and tells your analysts what actually happened.
        </p>

        <div className="mt-9 flex items-center justify-center gap-3">
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 rounded-md px-5 py-3 text-[13.5px] font-medium text-white transition-all"
            style={{
              background: "#16c784",
              boxShadow: "0 0 0 1px rgba(22,199,132,0.4), 0 12px 32px -10px rgba(22,199,132,0.55)",
            }}
          >
            Book a demo <ArrowRight className="size-4" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-5 py-3 text-[13.5px] text-white/85 transition-colors hover:border-white/25"
          >
            <PlayCircle className="size-4" /> Watch the product tour
          </a>
        </div>
      </div>

      {/* demo frame */}
      <div id="demo" className="relative mx-auto mt-20 max-w-6xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-10 -inset-y-14 -z-10 rounded-[2.5rem] opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(22,199,132,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#10151a]/80 backdrop-blur-xl"
          style={{
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.05) inset, 0 50px 120px -30px rgba(0,0,0,0.75)",
          }}
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-3 py-2">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </div>
            <div
              className="mx-auto rounded-md border border-white/10 bg-black/50 px-3 py-0.5 text-[10.5px] text-white/60"
              style={monoFont}
            >
              socbox.io / console
            </div>
          </div>
          <div className="relative aspect-video w-full bg-black">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={productDemo.url}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              controls={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- HOW IT WORKS -------------------------- */

const STEPS = [
  { n: "01", icon: Database, title: "Collect telemetry", body: "Pull signal from SIEM, EDR, identity, email, cloud." },
  { n: "02", icon: Layers, title: "Normalize events", body: "Unify formats across every connected source." },
  { n: "03", icon: BrainCircuit, title: "AI investigation", body: "Correlate related alerts, eliminate false positives." },
  { n: "04", icon: Radar, title: "Threat correlation", body: "Map to MITRE ATT&CK, score risk." },
  { n: "05", icon: ScrollText, title: "Evidence generation", body: "Auto-build the investigation timeline and artifacts." },
  { n: "06", icon: Workflow, title: "Response recommendation", body: "Suggest and optionally trigger containment." },
];

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          Pipeline
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={displayFont}
        >
          How SOCBOX works
        </h2>
      </div>

      {/* connecting line */}
      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px lg:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(22,199,132,0.35), rgba(22,199,132,0.35), transparent)",
          }}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {STEPS.map((s) => (
            <div key={s.n} className="relative">
              <div
                className="flex size-12 items-center justify-center rounded-lg border bg-[#10151a]"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <s.icon className="size-5 text-white/85" />
              </div>
              <div
                className="mt-4 text-[11px] font-medium tracking-[0.14em] text-white/50"
                style={monoFont}
              >
                {s.n}
              </div>
              <div className="mt-1 text-[14px] font-semibold text-white" style={displayFont}>
                {s.title}
              </div>
              <div className="mt-1.5 text-[13px] leading-[1.55] text-white/60">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ARCHITECTURE (signature) -------------------- */

function Architecture() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          Architecture
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={displayFont}
        >
          Built to sit on top of what you already run.
        </h2>
      </div>
      <div className="mt-12">
        <ArchitectureDiagram />
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
    <section id="platform" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          Platform
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={displayFont}
        >
          Everything a SOC needs. Nothing it doesn't.
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m) => (
          <div
            key={m.name}
            className="group rounded-xl border bg-[#10151a] p-5 transition-all duration-150 hover:-translate-y-px"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(22,199,132,0.45)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          >
            <div
              className="flex size-10 items-center justify-center rounded-lg"
              style={{ background: "rgba(22,199,132,0.10)", color: "#16c784" }}
            >
              <m.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-[15px] font-semibold text-white" style={displayFont}>
              {m.name}
            </h3>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-white/60">{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------- REAL PRODUCT SCREENSHOTS --------------------- */

function Screenshots() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          The product
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={displayFont}
        >
          See it, don't just read about it.
        </h2>
      </div>

      <div className="mt-12 space-y-6">
        <ShotFrame
          caption="Alert Center — every signal, one triage surface."
          embedSrc="/app/alerts"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ShotFrame caption="Incident Queue — cases, ownership, SLAs." embedSrc="/app/incidents" tall />
          <ShotFrame caption="Identity Center — risk across every user." embedSrc="/app/identity" tall />
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
    <figure>
      <div
        className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1013]"
        style={{ boxShadow: "0 40px 100px -30px rgba(0,0,0,0.7)" }}
      >
        <div
          className={`relative w-full ${tall ? "aspect-[4/3]" : "aspect-[16/9]"}`}
        >
          <iframe
            src={embedSrc}
            title={caption}
            loading="lazy"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0, background: "#0b1013" }}
          />
        </div>
      </div>
      <figcaption className="mt-3 text-[12px] text-white/55" style={monoFont}>
        {caption}
      </figcaption>
    </figure>
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
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          AI Investigator
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={displayFont}
        >
          What the AI actually does.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {/* chain */}
        <div className="rounded-2xl border border-white/10 bg-[#10151a] p-6">
          <ol className="relative space-y-5 pl-8">
            <div
              aria-hidden
              className="absolute bottom-2 left-3 top-2 w-px"
              style={{ background: "rgba(22,199,132,0.25)" }}
            />
            {AI_STEPS.map((s, i) => (
              <li key={s.t} className="relative">
                <span
                  className="absolute -left-[22px] top-1.5 flex size-4 items-center justify-center rounded-full"
                  style={{
                    background: "#0b1013",
                    boxShadow: "0 0 0 1.5px #16c784",
                  }}
                >
                  <span className="size-1.5 rounded-full" style={{ background: "#16c784" }} />
                </span>
                <div className="text-[11px] font-medium tracking-[0.14em] text-white/45" style={monoFont}>
                  {String(i + 1).padStart(2, "0")} · {s.meta}
                </div>
                <div className="mt-1 text-[15px] font-medium text-white" style={displayFont}>
                  {s.t}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* chat panel */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10151a]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-2.5">
            <Sparkles className="size-3.5" style={{ color: "#16c784" }} />
            <span className="text-[12px] font-medium text-white/80">SOCBOX Copilot</span>
            <span className="ml-auto text-[10.5px] text-white/40" style={monoFont}>
              incident · INC-42188
            </span>
          </div>
          <div className="space-y-4 p-5 text-[13px] leading-[1.6]">
            <div className="rounded-lg bg-white/[0.03] px-3.5 py-2.5 text-white/85">
              <span className="mr-2 text-[10.5px] uppercase tracking-widest text-white/40" style={monoFont}>
                analyst
              </span>
              What happened with SRV-DB-07?
            </div>
            <div
              className="rounded-lg border px-3.5 py-3 text-white/90"
              style={{
                borderColor: "rgba(22,199,132,0.25)",
                background: "rgba(22,199,132,0.05)",
              }}
            >
              <span className="mr-2 text-[10.5px] uppercase tracking-widest" style={{ ...monoFont, color: "#7fecc0" }}>
                copilot
              </span>
              SRV-DB-07 saw a successful SSH login from an unrecognized ASN at
              02:14 UTC, followed by 3 privileged queries against{" "}
              <span style={monoFont} className="text-white">customers.pii</span>.
              I've correlated this with an OAuth consent phish on{" "}
              <span style={monoFont} className="text-white">sarah.chen@contoso.com</span>{" "}
              from 4 hours earlier. Mapped to{" "}
              <span style={monoFont} className="text-white">T1078 · T1213</span>.
              Recommended action: revoke the token and quarantine the host.
            </div>
            <div className="flex flex-wrap gap-2">
              {["Draft executive brief", "Open incident", "Explain T1078"].map((c) => (
                <button
                  key={c}
                  className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11.5px] text-white/70 transition-colors hover:border-white/25 hover:text-white"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------- ENTERPRISE INTEGRATIONS --------------------- */

const INTEGRATIONS: { name: string; soon?: boolean }[] = [
  { name: "Microsoft" },
  { name: "Google Workspace" },
  { name: "AWS" },
  { name: "Azure" },
  { name: "Okta" },
  { name: "Slack" },
  { name: "CrowdStrike" },
  { name: "SentinelOne", soon: true },
  { name: "Splunk" },
  { name: "GitHub" },
];

function Integrations() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          Integrations
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={displayFont}
        >
          Works with what you already have.
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-3 md:grid-cols-5">
        {INTEGRATIONS.map((i) => (
          <div
            key={i.name}
            className="group relative flex flex-col items-center justify-center gap-1.5 bg-[#10151a] px-4 py-7 text-center transition-colors hover:bg-[#141a20]"
          >
            <span
              className="text-[13.5px] font-medium text-white/50 transition-colors group-hover:text-white"
              style={displayFont}
            >
              {i.name}
            </span>
            {i.soon && (
              <span
                className="text-[9.5px] uppercase tracking-[0.14em] text-white/35"
                style={monoFont}
              >
                Coming soon
              </span>
            )}
          </div>
        ))}
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
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          Trust
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={displayFont}
        >
          Built for how security teams actually operate.
        </h2>
        <p className="mt-4 text-[14.5px] leading-[1.6] text-white/60">
          Formal certification programs are underway. In the meantime, here's
          what's already true about how SOCBOX is architected.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
        {TRUST.map((c) => (
          <div
            key={c.t}
            className="flex gap-4 rounded-xl border border-white/10 bg-[#10151a] p-5"
          >
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-lg"
              style={{ background: "rgba(22,199,132,0.10)", color: "#16c784" }}
            >
              <c.icon className="size-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[14.5px] font-semibold text-white" style={displayFont}>
                {c.t}
              </div>
              <div className="mt-1 text-[13px] leading-[1.55] text-white/60">{c.b}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- DEVELOPERS --------------------------- */

const CODE_SAMPLES: Record<string, string> = {
  REST: `curl https://api.socbox.io/v1/investigations \\
  -H "Authorization: Bearer $SOCBOX_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "entity": "sarah.chen@contoso.com",
    "window": "24h"
  }'`,
  Python: `from socbox import SOCBox

sb = SOCBox(api_key=os.environ["SOCBOX_KEY"])

case = sb.investigations.create(
    entity="sarah.chen@contoso.com",
    window="24h",
)

print(case.summary)   # AI-generated incident narrative
print(case.timeline)  # ordered evidence artifacts`,
  Node: `import { SOCBox } from "@socbox/sdk";

const sb = new SOCBox({ apiKey: process.env.SOCBOX_KEY });

const case_ = await sb.investigations.create({
  entity: "sarah.chen@contoso.com",
  window: "24h",
});

console.log(case_.summary);   // AI-generated incident narrative
console.log(case_.timeline);  // ordered evidence artifacts`,
};

function Developers() {
  const [tab, setTab] = useState<keyof typeof CODE_SAMPLES>("REST");
  return (
    <section id="developers" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          Developers
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={displayFont}
        >
          Built API-first.
        </h2>
        <p className="mt-4 text-[14.5px] leading-[1.6] text-white/60">
          Every action in the console is an API call. Wire SOCBOX into your
          SOAR, ticketing, or custom internal tools.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#0b1013]">
        <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1.5">
          {(Object.keys(CODE_SAMPLES) as (keyof typeof CODE_SAMPLES)[]).map(
            (k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className="rounded-md px-3 py-1 text-[12px] font-medium transition-colors"
                style={{
                  color: tab === k ? "#fff" : "rgba(255,255,255,0.55)",
                  background: tab === k ? "rgba(22,199,132,0.10)" : "transparent",
                }}
              >
                {k}
              </button>
            ),
          )}
          <a
            href="#"
            className="ml-auto flex items-center gap-1.5 rounded-md px-3 py-1 text-[12px] text-white/60 transition-colors hover:text-white"
          >
            <BookOpen className="size-3.5" /> Read the docs
          </a>
        </div>
        <pre
          className="overflow-x-auto p-5 text-[12.5px] leading-[1.65] text-white/85"
          style={monoFont}
        >
          <code>{CODE_SAMPLES[tab]}</code>
        </pre>
      </div>
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
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          Pricing
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={displayFont}
        >
          Priced to the environment, not the seat.
        </h2>
        <p className="mt-4 text-[14.5px] leading-[1.6] text-white/60">
          Every SOC deployment is different. Both plans are custom-quoted to
          your data volume, integrations, and support tier.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className="relative rounded-2xl border p-8"
            style={{
              borderColor: t.featured ? "rgba(22,199,132,0.4)" : "rgba(255,255,255,0.10)",
              background: t.featured
                ? "linear-gradient(180deg, rgba(22,199,132,0.06), rgba(22,199,132,0) 60%), #10151a"
                : "#10151a",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="text-[14px] font-semibold text-white" style={displayFont}>
                {t.name}
              </div>
              {t.featured && (
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em]"
                  style={{
                    background: "rgba(22,199,132,0.12)",
                    color: "#7fecc0",
                  }}
                >
                  Most teams
                </span>
              )}
            </div>
            <div className="mt-3 text-[24px] font-semibold text-white" style={displayFont}>
              Contact sales
            </div>
            <p className="mt-2 text-[13px] leading-[1.55] text-white/60">{t.body}</p>
            <ul className="mt-6 space-y-2.5 text-[13px]">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-white/80">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full"
                    style={{ background: "#16c784" }}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="mt-8 inline-flex w-full items-center justify-center gap-1.5 rounded-md px-4 py-2.5 text-[13px] font-medium transition-all"
              style={
                t.featured
                  ? {
                      background: "#16c784",
                      color: "#fff",
                      boxShadow: "0 0 0 1px rgba(22,199,132,0.4)",
                    }
                  : {
                      background: "transparent",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }
              }
            >
              Book a demo <ArrowRight className="size-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */

const FOOTER_COLS = [
  {
    title: "Platform",
    links: ["Console", "AI Investigator", "Integrations", "Pricing"],
  },
  {
    title: "Solutions",
    links: ["Enterprise SOC", "MSSPs", "Financial services", "Public sector"],
  },
  {
    title: "Resources",
    links: ["Docs", "API", "Status", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Security", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms"],
  },
];

function Footer() {
  return (
    <footer id="book" className="border-t border-white/10 bg-[#0a0d0c]">
      {/* CTA band */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div
          className="flex flex-col items-start justify-between gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:p-12"
          style={{
            borderColor: "rgba(22,199,132,0.25)",
            background:
              "linear-gradient(90deg, rgba(22,199,132,0.06), rgba(22,199,132,0) 70%), #10151a",
          }}
        >
          <div className="max-w-xl">
            <h3
              className="text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-white md:text-[32px]"
              style={displayFont}
            >
              Ready to see SOCBOX on your telemetry?
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-white/65">
              A 30-minute walkthrough with an engineer, on your stack. No slide
              decks.
            </p>
          </div>
          <a
            href="mailto:hello@socbox.io"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-5 py-3 text-[13.5px] font-medium text-white"
            style={{
              background: "#16c784",
              boxShadow: "0 0 0 1px rgba(22,199,132,0.4), 0 12px 32px -10px rgba(22,199,132,0.55)",
            }}
          >
            Book a demo <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      {/* columns */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <img src={clickboxLogo.url} alt="SOCBOX" className="size-6 object-contain" />
              <span
                className="text-[14px] font-semibold tracking-tight text-white"
                style={displayFont}
              >
                SOCBOX
              </span>
            </div>
            <p className="mt-4 text-[12.5px] leading-[1.6] text-white/50">
              AI-native Security Operations for teams that need answers,
              not more alerts.
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45"
                style={monoFont}
              >
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] text-white/75 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11.5px] text-white/45">
          <div>© 2026 SOCBOX</div>
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
      style={{ background: "#0a0d0c", color: "#e9efec" }}
    >
      <Nav />
      <Hero />
      <HowItWorks />
      <Architecture />
      <Modules />
      <Screenshots />
      <AIWorkflow />
      <Integrations />
      <Trust />
      <Developers />
      <Pricing />
      <Footer />
    </div>
  );
}
