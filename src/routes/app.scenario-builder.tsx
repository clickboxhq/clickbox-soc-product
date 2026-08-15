import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader, SeverityBadge } from "@/components/soc/primitives";
import { Cloud, HardDrive, Mail, Network, Plus, Save, UserRound } from "lucide-react";

export const Route = createFileRoute("/app/scenario-builder")({
  component: ScenarioBuilder,
  head: () => ({
    meta: [
      { title: "ThreatLens · Scenario Builder" },
      { name: "description", content: "Author synthetic telemetry, ground truth, and automated grading for SOC investigation scenarios." },
      { property: "og:title", content: "ThreatLens · Scenario Builder" },
      { property: "og:description", content: "Instructor authoring for identity, endpoint, email, cloud, and network events." },
    ],
  }),
});

const eventSources = [
  { icon: UserRound, label: "Identity events", count: 14 },
  { icon: HardDrive, label: "Endpoint events", count: 22 },
  { icon: Mail, label: "Email events", count: 9 },
  { icon: Cloud, label: "Cloud events", count: 11 },
  { icon: Network, label: "Network events", count: 7 },
];

const timeline = [
  { t: "T+00:00", src: "Email", detail: "Spearphishing link delivered to finance@contoso.com", mitre: "T1566.002", sev: "medium" as const },
  { t: "T+00:06", src: "Identity", detail: "Sign-in from unfamiliar ASN, MFA satisfied", mitre: "T1078", sev: "high" as const },
  { t: "T+00:11", src: "Cloud", detail: "Inbox rule created — forward to external address", mitre: "T1098.002", sev: "high" as const },
  { t: "T+00:34", src: "Email", detail: "Payment redirection message sent to supplier", mitre: "T1114.002", sev: "critical" as const },
];

function ScenarioBuilder() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader
        title="Scenario Builder"
        description="Instructor authoring — compose synthetic telemetry, hide the ground truth, and configure automated grading."
        actions={
          <>
            <button className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card px-3 text-[12px] text-secondary hover:text-foreground">
              <Plus className="size-3.5" /> Add event
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground hover:bg-primary-hover">
              <Save className="size-3.5" /> Publish scenario
            </button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <Panel title="Event sources" padded={false}>
          <div className="divide-y divide-border">
            {eventSources.map((s) => {
              const Icon = s.icon;
              return (
                <button key={s.label} className="flex w-full items-center gap-2.5 px-4 py-3 text-left transition-colors hover:bg-background/40">
                  <Icon className="size-4 text-muted-foreground" />
                  <span className="flex-1 text-[12.5px]">{s.label}</span>
                  <span className="rounded border border-border bg-background px-1.5 py-0.5 text-[10.5px] tabular-nums text-secondary">
                    {s.count}
                  </span>
                </button>
              );
            })}
          </div>
        </Panel>

        <Panel className="lg:col-span-2" title="Injected timeline — SC-082 Draft" padded={false}>
          <div className="divide-y divide-border">
            {timeline.map((e) => (
              <div key={e.t} className="grid grid-cols-[64px_1fr_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-background/40">
                <span className="font-mono text-[11px] text-muted-foreground">{e.t}</span>
                <div className="min-w-0">
                  <div className="truncate text-[12.5px]">{e.detail}</div>
                  <div className="mt-0.5 text-[10.5px] text-muted-foreground">
                    {e.src} · <span className="font-mono">{e.mitre}</span>
                  </div>
                </div>
                <SeverityBadge level={e.sev} />
              </div>
            ))}
          </div>
        </Panel>

        <div className="flex flex-col gap-4">
          <Panel title="Configuration">
            <div className="space-y-3 text-[12px]">
              <div>
                <div className="text-muted-foreground">Difficulty</div>
                <div className="mt-1 flex gap-1">
                  {["Beginner", "Intermediate", "Advanced", "Expert"].map((d, i) => (
                    <span
                      key={d}
                      className={`rounded border px-1.5 py-0.5 text-[10.5px] ${i === 2 ? "border-[color:var(--info)]/40 bg-[color:var(--info)]/10 text-[color:var(--info)]" : "border-border bg-background text-muted-foreground"}`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              {[
                { k: "Hidden ground truth", v: "BEC via inbox rule" },
                { k: "Randomization", v: "Users, hosts, timestamps" },
                { k: "Automated grading", v: "Enabled · 9 artifacts" },
                { k: "Hints", v: "3 · score penalty 5% each" },
                { k: "Time limit", v: "60 minutes" },
              ].map((r) => (
                <div key={r.k} className="flex items-center justify-between border-t border-border pt-2">
                  <span className="text-muted-foreground">{r.k}</span>
                  <span className="text-right text-secondary">{r.v}</span>
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="Validation">
            <ul className="space-y-2 text-[12px] text-secondary">
              <li>Ground truth reachable from injected evidence</li>
              <li>All 4 required ATT&CK mappings present</li>
              <li className="text-[color:var(--warning)]">Network events missing for lateral phase</li>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}
