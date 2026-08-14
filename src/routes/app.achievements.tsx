import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader } from "@/components/soc/primitives";
import { Award, Crosshair, Flame, Radar, ShieldCheck, Timer } from "lucide-react";

export const Route = createFileRoute("/app/achievements")({
  component: Achievements,
  head: () => ({
    meta: [
      { title: "ClickBox · Achievements" },
      { name: "description", content: "Investigation milestones earned across ClickBox SOC training scenarios." },
      { property: "og:title", content: "ClickBox · Achievements" },
      { property: "og:description", content: "Milestones for accuracy, evidence quality, and ATT&CK breadth." },
    ],
  }),
});

const badges = [
  { icon: ShieldCheck, name: "First Conclusion", detail: "Close an investigation with a correct verdict", got: true },
  { icon: Crosshair, name: "Evidence Purist", detail: "Collect 100% of required artifacts on 5 cases", got: true },
  { icon: Radar, name: "Tactic Breadth", detail: "Practice techniques in 10 ATT&CK tactics", got: true },
  { icon: Timer, name: "Under Pressure", detail: "Resolve a critical case in under 20 minutes", got: false },
  { icon: Flame, name: "Ransomware Responder", detail: "Complete the containment scenario at Expert level", got: false },
  { icon: Award, name: "Cohort Top 5", detail: "Finish a month in the top five of your cohort", got: true },
];

function Achievements() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader
        title="Achievements"
        description="Milestones awarded for investigation accuracy, evidence quality, and ATT&CK breadth."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {badges.map((b) => {
          const Icon = b.icon;
          return (
            <Panel key={b.name}>
              <div className="flex items-start gap-3">
                <div
                  className="grid size-10 place-items-center rounded-lg border border-border"
                  style={{
                    background: b.got ? "color-mix(in oklab, var(--success) 14%, transparent)" : "var(--background)",
                    color: b.got ? "var(--success)" : "var(--muted-foreground)",
                  }}
                >
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-medium">{b.name}</div>
                  <div className="mt-0.5 text-[11.5px] text-muted-foreground">{b.detail}</div>
                  <div className="mt-2 text-[10.5px] uppercase tracking-wider" style={{ color: b.got ? "var(--success)" : "var(--muted-foreground)" }}>
                    {b.got ? "Earned" : "Locked"}
                  </div>
                </div>
              </div>
            </Panel>
          );
        })}
      </div>
    </div>
  );
}
