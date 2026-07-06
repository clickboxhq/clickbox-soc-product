import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  Check,
  GraduationCap,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { SeverityBadge } from "@/components/soc/primitives";
import clickboxLogo from "@/assets/clickbox-logo.asset.json";
import { InteractiveCTA } from "@/components/soc/interactive-cta";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "SOCBOX — The professional SOC console for investigations & training" },
      {
        name: "description",
        content:
          "Investigate realistic enterprise incidents on synthetic telemetry. Train, certify, and measure SOC analysts on a platform that feels like Sentinel or Falcon.",
      },
    ],
  }),
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40" />

      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2.5">
          <img src={clickboxLogo.url} alt="ClickBox" className="size-7 object-contain" />
          <span className="text-[15px] font-semibold tracking-tight">SOCBOX</span>
          <span className="hidden text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:inline">by ClickBox</span>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] text-secondary md:flex">
          <a href="#platform" className="hover:text-foreground">Platform</a>
          <a href="#for-teams" className="hover:text-foreground">For SOC teams</a>
          <a href="#for-education" className="hover:text-foreground">For education</a>
          <a href="#customers" className="hover:text-foreground">Customers</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/app" className="rounded-md border border-border bg-card px-3 py-1.5 text-[13px] text-secondary hover:text-foreground">
            Sign in
          </Link>
          <Link
            to="/app"
            className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--info)] px-3 py-1.5 text-[13px] font-medium text-white"
          >
            Open console <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11.5px] text-secondary backdrop-blur">
            <Sparkles className="size-3.5 text-[color:var(--info)]" />
            <span>SOCBOX Copilot · now generally available</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            The professional SOC console <br className="hidden md:block" />
            for investigations & training.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-secondary">
            SOCBOX simulates enterprise Security Operations Center investigations on
            proprietary synthetic telemetry. Analysts investigate realistic incidents,
            SOCBOX measures methodology, and teams get audit-grade evidence of skill.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              to="/app"
              className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--info)] px-4 py-2.5 text-[13.5px] font-medium text-white shadow-elev"
            >
              Launch the console <ArrowRight className="size-4" />
            </Link>
            <a href="#platform" className="rounded-md border border-border bg-card px-4 py-2.5 text-[13.5px] text-secondary hover:text-foreground">
              See the platform
            </a>
          </div>
          <div className="mt-4 text-[11.5px] text-muted-foreground">
            SOC 2 · ISO 27001 · GDPR · EU / US / APAC data residency
          </div>
        </div>
      </section>

      {/* Primary interactive CTA — immediately after hero */}
      <InteractiveCTA />

      {/* Secondary product mock section */}
      <section className="mx-auto max-w-7xl px-6">
        {/* Hero product mock */}
        <div className="shadow-elev mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border bg-background/60 px-3 py-2">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[color:var(--critical)]/60" />
              <span className="size-2.5 rounded-full bg-[color:var(--warning)]/60" />
              <span className="size-2.5 rounded-full bg-[color:var(--success)]/60" />
            </div>
            <div className="mx-auto rounded-md border border-border bg-card px-3 py-0.5 font-mono text-[10.5px] text-muted-foreground">
              socbox.io / console / dashboard
            </div>
          </div>
          <div className="grid grid-cols-[220px_1fr]">
            {/* mini sidebar */}
            <div className="hidden border-r border-border bg-sidebar p-3 text-[12px] md:block">
              <div className="mb-3 flex items-center gap-2 rounded-md border border-sidebar-border bg-background/40 px-2 py-1.5">
                <div className="grid size-5 place-items-center rounded bg-[color:var(--info)]/15 text-[color:var(--info)]">
                  <ShieldAlert className="size-3" />
                </div>
                <span className="text-[11.5px] font-medium">Contoso Global SOC</span>
              </div>
              {[
                ["Dashboard", true],
                ["Investigations", false],
                ["Alerts", false],
                ["Incident Queue", false],
                ["Identity Center", false],
                ["Endpoint Center", false],
                ["Threat Intelligence", false],
                ["Scenario Library", false],
              ].map(([l, active]) => (
                <div
                  key={l as string}
                  className={`mb-0.5 rounded px-2 py-1.5 ${active ? "bg-sidebar-accent text-foreground" : "text-secondary"}`}
                >
                  {l as string}
                </div>
              ))}
            </div>
            <div className="p-5">
              <div className="text-[11px] text-muted-foreground">Welcome back, John</div>
              <div className="mt-1 text-lg font-semibold">Security overview</div>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  ["Active investigations", "128"],
                  ["Open incidents", "47"],
                  ["Critical alerts", "26"],
                  ["Avg. score", "87.4"],
                ].map(([l, v]) => (
                  <div key={l} className="rounded-lg border border-border bg-background/60 p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
                    <div className="mt-1 text-xl font-semibold tabular-nums">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-border bg-background/40 p-3">
                <div className="mb-2 text-[11px] font-medium text-secondary">Recent alerts</div>
                <ul className="space-y-2 text-[11.5px]">
                  {[
                    ["Impossible travel — kate.morgan@contoso.com", "high" as const],
                    ["Encoded PowerShell on SRV-DB-07", "critical" as const],
                    ["Password spray against tenant", "high" as const],
                    ["OAuth consent grant — sarah.chen", "high" as const],
                  ].map(([t, sev]) => (
                    <li key={t as string} className="flex items-center justify-between rounded-md border border-border bg-card px-2.5 py-1.5">
                      <span className="truncate">{t as string}</span>
                      <SeverityBadge level={sev as any} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[12px] uppercase tracking-widest text-muted-foreground">
          {["Contoso", "Fabrikam", "Northwind U.", "Adventure Works", "TU Berlin", "NATO CCDCOE"].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </section>

      {/* Interactive primary CTA */}
      <InteractiveCTA />

      {/* Feature grid */}
      <section id="platform" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--info)]">Platform</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Everything a real SOC has. None of the risk.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-secondary">
            Purpose-built modules mirror the tools analysts use every day —
            identity, endpoint, email, threat intel — powered by SOCBOX's
            proprietary synthetic telemetry engine.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: ShieldAlert, title: "Alert Center", body: "Triage alerts across identity, endpoint, email, and cloud with saved views, bulk actions, and MITRE mapping." },
            { icon: Radar, title: "Incident investigation", body: "A full workspace: timeline, evidence, entities, MITRE, notes, scoring, and an AI copilot next to the analyst." },
            { icon: BarChart3, title: "Analytics & MITRE coverage", body: "See MTTD/MTTR, coverage deltas, and per-analyst mastery across every tactic in the ATT&CK matrix." },
            { icon: GraduationCap, title: "Career tracks", body: "SOC Analyst, Threat Hunter, Incident Responder — mastery-based paths with verifiable certificates." },
            { icon: Building2, title: "Multi-tenant orgs", body: "Cohorts, seats, and audit logs for training providers, MSSPs, universities, and government." },
            { icon: Sparkles, title: "SOCBOX Copilot", body: "Explains alerts, suggests next steps, drafts executive briefs, and teaches methodology in-context." },
          ].map((f) => (
            <div key={f.title} className="shadow-elev rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/70">
              <div className="grid size-10 place-items-center rounded-lg bg-[color:var(--info)]/12 text-[color:var(--info)]">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-secondary">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Split: for SOC teams / for education */}
      <section id="for-teams" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="shadow-elev rounded-2xl border border-border bg-card p-8">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--info)]">For SOC teams</div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">Prove your team can handle the next incident.</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-secondary">
              Run realistic tabletop exercises and continuous drills without touching
              production. SOCBOX scores the analyst's methodology, not just the answer.
            </p>
            <ul className="mt-5 space-y-2 text-[13px]">
              {[
                "Repeatable BEC, ransomware, and insider scenarios",
                "MITRE-aligned coverage & analyst mastery reports",
                "Live copilot for junior analyst onboarding",
                "Audit-grade evidence for board and regulators",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-secondary">
                  <Check className="size-4 text-[color:var(--success)]" /> {p}
                </li>
              ))}
            </ul>
          </div>

          <div id="for-education" className="shadow-elev rounded-2xl border border-border bg-card p-8">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--info)]">For education</div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">The console cybersecurity students should learn on.</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-secondary">
              Universities, academies, and training providers get instructor tooling,
              cohort analytics, and verifiable credentials — inside a console that
              looks and feels like a Fortune 500 SOC.
            </p>
            <ul className="mt-5 space-y-2 text-[13px]">
              {[
                "Instructor portal with assignments & grading",
                "Cohort dashboards and cross-cohort benchmarks",
                "Verifiable certificates with public transcripts",
                "SSO, LMS integration, and roster provisioning",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-secondary">
                  <Check className="size-4 text-[color:var(--success)]" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="customers" className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-14 md:grid-cols-4">
          {[
            ["620k+", "Investigations run"],
            ["11 min", "Median MTTD in-training"],
            ["94%", "Analysts pass Tier-2 assessment"],
            ["37", "Countries deployed"],
          ].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-semibold tracking-tight tabular-nums">{v}</div>
              <div className="mt-1 text-[12px] text-secondary">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--info)]">Pricing</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Simple, seat-based enterprise pricing.</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { name: "Business", price: "$29", per: "/analyst / mo", features: ["Unlimited investigations", "Core scenario library", "MITRE coverage report", "Email support"], cta: "Start free trial", featured: false },
            { name: "Enterprise", price: "$79", per: "/analyst / mo", features: ["Everything in Business", "SOCBOX Copilot", "Custom scenarios & content", "SSO, audit logs, data residency", "24/7 support"], cta: "Talk to sales", featured: true },
            { name: "Education", price: "Custom", per: "for institutions", features: ["Instructor portal + cohorts", "Verifiable certificates", "LMS + roster provisioning", "Discounted student seats"], cta: "Contact team", featured: false },
          ].map((t) => (
            <div
              key={t.name}
              className={`shadow-elev rounded-2xl border p-6 ${t.featured ? "border-[color:var(--info)]/40 bg-[color:var(--info)]/5" : "border-border bg-card"}`}
            >
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-semibold">{t.name}</div>
                {t.featured && (
                  <span className="rounded-full bg-[color:var(--info)]/15 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[color:var(--info)]">
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">{t.price}</span>
                <span className="text-[12px] text-muted-foreground">{t.per}</span>
              </div>
              <ul className="mt-5 space-y-2 text-[12.5px]">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-secondary">
                    <Check className="size-4 text-[color:var(--success)]" /> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-[12.5px] font-medium ${
                  t.featured
                    ? "bg-[color:var(--info)] text-white"
                    : "border border-border bg-background text-secondary"
                }`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="shadow-elev overflow-hidden rounded-2xl border border-border bg-card p-10 text-center">
          <ShieldCheck className="mx-auto size-8 text-[color:var(--info)]" />
          <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Give your analysts a real SOC to train on.
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[14px] text-secondary">
            The SOCBOX console is ready. No log ingestion, no risk, no waiting for the next real incident.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/app" className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--info)] px-4 py-2.5 text-[13.5px] font-medium text-white">
              Open the console <ArrowRight className="size-4" />
            </Link>
            <a href="#pricing" className="rounded-md border border-border bg-background px-4 py-2.5 text-[13.5px] text-secondary">
              See pricing
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-[12px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="grid size-6 place-items-center rounded bg-[color:var(--info)]/15 text-[color:var(--info)]">
              <ShieldAlert className="size-3.5" />
            </div>
            <span>© 2026 SOCBOX. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">Trust</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
