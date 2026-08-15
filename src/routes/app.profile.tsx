import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader } from "@/components/soc/primitives";
import { Award } from "lucide-react";

export const Route = createFileRoute("/app/profile")({
  component: ProfilePage,
  head: () => ({ meta: [{ title: "ThreatLens · Profile" }] }),
});

function ProfilePage() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader title="Profile" description="Your analyst identity, performance, and preferences." />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="grid size-14 place-items-center rounded-full bg-[color:var(--info)]/15 text-[16px] font-semibold text-[color:var(--info)]">JD</div>
            <div>
              <div className="text-[15px] font-semibold">John Doe</div>
              <div className="text-[11.5px] text-muted-foreground">Tier 3 · SOC Manager</div>
              <div className="mt-1 font-mono text-[11px] text-muted-foreground">john.doe@contoso.com</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[
              ["Score", "9,820"],
              ["Solved", "148"],
              ["Rank", "#1"],
            ].map(([l, v]) => (
              <div key={l} className="rounded-md border border-border bg-background/40 p-2">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
                <div className="mt-0.5 text-[14px] font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="lg:col-span-2" title="Skills mastery" padded={false}>
          <div className="p-4">
            {[
              ["Identity investigations", 92],
              ["Endpoint forensics", 84],
              ["Email threat analysis", 88],
              ["Cloud attack investigation", 71],
              ["Threat hunting", 76],
            ].map(([label, v]) => (
              <div key={label as string} className="mb-3">
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-secondary">{label}</span>
                  <span className="tabular-nums text-secondary">{v}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background">
                  <div className="h-full rounded-full bg-[color:var(--info)]" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border p-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Certificates</div>
            {["ClickBox Certified Analyst — L2", "Identity Attack Investigation", "Endpoint Forensics Fundamentals"].map((c) => (
              <div key={c} className="flex items-center gap-2 py-1 text-[12.5px]">
                <Award className="size-3.5 text-[color:var(--info)]" />
                {c}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
