import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader } from "@/components/soc/primitives";
import { Award, GraduationCap, Trophy } from "lucide-react";

export const Route = createFileRoute("/app/learning")({
  component: LearningPage,
  head: () => ({ meta: [{ title: "ThreatLens · Learning Center" }] }),
});

const tracks = [
  { name: "SOC Analyst Track", modules: 14, hours: 22, progress: 74 },
  { name: "Threat Hunter Track", modules: 12, hours: 28, progress: 42 },
  { name: "Incident Responder Track", modules: 10, hours: 18, progress: 88 },
  { name: "Blue Team Fundamentals", modules: 16, hours: 24, progress: 21 },
];

function LearningPage() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader
        title="Learning Center"
        description="Structured career paths, hands-on labs, and mastery-based certification."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tracks.map((t) => (
          <Panel key={t.name}>
            <div className="flex items-center gap-2 text-[color:var(--info)]">
              <GraduationCap className="size-4" />
              <span className="text-[11px] uppercase tracking-wider">Career Track</span>
            </div>
            <h3 className="mt-2 text-[15px] font-semibold">{t.name}</h3>
            <div className="mt-1 text-[11px] text-muted-foreground">{t.modules} modules · {t.hours} hrs</div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-secondary">Progress</span>
                <span className="tabular-nums text-secondary">{t.progress}%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background">
                <div className="h-full rounded-full bg-[color:var(--info)]" style={{ width: `${t.progress}%` }} />
              </div>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background py-2 text-[12px] text-secondary hover:text-foreground">
              Continue
            </button>
          </Panel>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Panel title="Achievements" padded={false}>
          <ul className="divide-y divide-border">
            {[
              ["Threat Detective", "Solve 50 investigations at ≥90 score"],
              ["Zero-day Hunter", "Identify novel behaviors in 3 scenarios"],
              ["Chain Breaker", "Contain a kill chain within 15 minutes"],
              ["Golden Ticket", "Detect a Kerberos abuse scenario end-to-end"],
            ].map(([t, d]) => (
              <li key={t} className="flex items-center gap-3 px-4 py-3">
                <Trophy className="size-4 text-[color:var(--warning)]" />
                <div>
                  <div className="text-[13px] font-medium">{t}</div>
                  <div className="text-[11px] text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Recent certificates" padded={false}>
          <ul className="divide-y divide-border">
            {[
              ["ThreatLens Certified Analyst — L2", "Jun 24, 2026"],
              ["Identity Attack Investigation", "Jun 12, 2026"],
              ["Endpoint Forensics Fundamentals", "May 30, 2026"],
              ["Email Threat Investigation", "May 18, 2026"],
            ].map(([n, d]) => (
              <li key={n} className="flex items-center gap-3 px-4 py-3">
                <Award className="size-4 text-[color:var(--info)]" />
                <div className="flex-1 text-[13px] font-medium">{n}</div>
                <div className="text-[11px] text-muted-foreground">{d}</div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
