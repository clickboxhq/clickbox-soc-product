import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/components/soc/workspace-page";

export const Route = createFileRoute("/app/cohorts")({
  component: Cohorts,
  head: () => ({
    meta: [
      { title: "ClickBox · Cohorts" },
      { name: "description", content: "Manage analyst cohorts, assigned scenario tracks, and progress." },
      { property: "og:title", content: "ClickBox · Cohorts" },
      { property: "og:description", content: "Cohort rosters, tracks, and completion for SOC training programs." },
    ],
  }),
});

const cohorts = [
  { id: "CH-2026-A", name: "Autumn 2026 · Tier 1 Onboarding", learners: 42, track: "SOC Analyst", progress: 68, avg: 84, instructor: "Jonas Weber" },
  { id: "CH-2026-B", name: "Autumn 2026 · Threat Hunting", learners: 24, track: "Threat Hunter", progress: 41, avg: 79, instructor: "Marcus Chen" },
  { id: "CH-2026-C", name: "Contoso Internal · IR Rotation", learners: 18, track: "Incident Responder", progress: 88, avg: 91, instructor: "Priya Nair" },
  { id: "CH-2026-D", name: "MSSP Partner Program", learners: 44, track: "SOC Analyst", progress: 55, avg: 76, instructor: "Elena Rossi" },
];

function Cohorts() {
  return (
    <WorkspacePage
      title="Cohorts"
      description="Groups of analysts working a shared scenario track, with per-cohort scoring baselines."
      stats={[
        { label: "Active cohorts", value: "4" },
        { label: "Enrolled analysts", value: "128", delta: "+12 this month" },
        { label: "Average score", value: "82%", tone: "success" },
        { label: "At-risk learners", value: "7", tone: "high" },
      ]}
      table={{
        title: "Cohort roster",
        columns: ["ID", "Cohort", "Track", "Analysts", "Progress", "Avg. score", "Instructor"],
        rows: cohorts.map((c) => [
          <span className="font-mono text-[11px] text-muted-foreground">{c.id}</span>,
          <span className="font-medium">{c.name}</span>,
          c.track,
          <span className="tabular-nums">{c.learners}</span>,
          <div className="flex items-center gap-2">
            <div className="h-1 w-20 overflow-hidden rounded-full bg-background">
              <div className="h-full rounded-full bg-[color:var(--info)]" style={{ width: `${c.progress}%` }} />
            </div>
            <span className="tabular-nums text-muted-foreground">{c.progress}%</span>
          </div>,
          <span className="tabular-nums">{c.avg}%</span>,
          c.instructor,
        ]),
      }}
      asides={[
        {
          title: "Track completion",
          items: [
            { label: "SOC Analyst", value: "62%", meter: 62 },
            { label: "Threat Hunter", value: "41%", meter: 41 },
            { label: "Incident Responder", value: "88%", meter: 88 },
          ],
        },
      ]}
    />
  );
}
