import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader } from "@/components/soc/primitives";

export const Route = createFileRoute("/app/settings")({
  component: SettingsPage,
  head: () => ({ meta: [{ title: "ThreatLens · Settings" }] }),
});

function SettingsPage() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader title="Settings" description="Workspace, security, integrations, notifications, and API access." />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr]">
        <Panel padded={false}>
          <ul className="flex flex-col p-2 text-[13px]">
            {["General", "Security", "Single sign-on", "Notifications", "Integrations", "API keys", "Audit log", "Billing"].map((s, i) => (
              <li key={s}>
                <button className={`w-full rounded-md px-2.5 py-2 text-left transition-colors ${i === 1 ? "bg-background/60 text-foreground" : "text-secondary hover:bg-background/40"}`}>
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </Panel>

        <div className="space-y-4">
          <Panel title="Security posture">
            <ul className="space-y-3 text-[13px]">
              {[
                ["Enforce SSO for all analysts", true],
                ["Require hardware key MFA for Tier 3", true],
                ["Session inactivity timeout — 15 minutes", true],
                ["Block sign-in from anonymized networks", false],
              ].map(([label, on]) => (
                <li key={label as string} className="flex items-center justify-between rounded-md border border-border bg-background/40 px-3 py-2.5">
                  <span className="text-secondary">{label}</span>
                  <span className={`h-5 w-9 rounded-full border transition-colors ${on ? "border-[color:var(--info)] bg-[color:var(--info)]/30" : "border-border bg-background"}`}>
                    <span className={`block size-4 translate-y-[1px] rounded-full bg-foreground transition-transform ${on ? "translate-x-[18px]" : "translate-x-[2px]"}`} />
                  </span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Data residency">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {["EU-West (Frankfurt)", "US-East (Virginia)", "APAC (Singapore)"].map((r, i) => (
                <button key={r} className={`rounded-md border p-3 text-left ${i === 0 ? "border-[color:var(--info)]/50 bg-[color:var(--info)]/10" : "border-border bg-background/40"}`}>
                  <div className="text-[13px] font-medium">{r}</div>
                  <div className="text-[11px] text-muted-foreground">GDPR · SOC 2 · ISO 27001</div>
                </button>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
