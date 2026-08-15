import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/components/soc/workspace-page";
import { StatusBadge } from "@/components/soc/primitives";

export const Route = createFileRoute("/app/assessments")({
  component: Assessments,
  head: () => ({
    meta: [
      { title: "ThreatLens · Assessments" },
      { name: "description", content: "Timed investigation assessments with automated grading and ground-truth comparison." },
      { property: "og:title", content: "ThreatLens · Assessments" },
      { property: "og:description", content: "Proctored investigation assessments and grading outcomes." },
    ],
  }),
});

const rows = [
  { id: "AS-114", name: "Tier 1 Certification — Identity Attacks", cohort: "CH-2026-A", window: "Aug 18 – Aug 22", submitted: 38, total: 42, avg: 84, status: "in-progress" as const },
  { id: "AS-113", name: "BEC Investigation Practical", cohort: "CH-2026-A", window: "Aug 04 – Aug 08", submitted: 42, total: 42, avg: 88, status: "resolved" as const },
  { id: "AS-112", name: "Endpoint Forensics Practical", cohort: "CH-2026-C", window: "Jul 28 – Aug 01", submitted: 18, total: 18, avg: 91, status: "resolved" as const },
  { id: "AS-111", name: "Threat Hunting Hypothesis Exercise", cohort: "CH-2026-B", window: "Aug 25 – Aug 29", submitted: 0, total: 24, avg: 0, status: "open" as const },
];

function Assessments() {
  return (
    <WorkspacePage
      title="Assessments"
      description="Timed, proctored investigations graded against hidden ground truth."
      stats={[
        { label: "Scheduled", value: "4" },
        { label: "Submissions", value: "98", delta: "of 126 expected" },
        { label: "Average grade", value: "87%", tone: "success" },
        { label: "Awaiting review", value: "6", tone: "high" },
      ]}
      table={{
        title: "Assessment schedule",
        columns: ["ID", "Assessment", "Cohort", "Window", "Submitted", "Avg. grade", "Status"],
        rows: rows.map((r) => [
          <span className="font-mono text-[11px] text-muted-foreground">{r.id}</span>,
          <span className="font-medium">{r.name}</span>,
          <span className="font-mono text-[11px] text-secondary">{r.cohort}</span>,
          r.window,
          <span className="tabular-nums">{r.submitted}/{r.total}</span>,
          <span className="tabular-nums">{r.avg ? `${r.avg}%` : "—"}</span>,
          <StatusBadge status={r.status} />,
        ]),
      }}
      asides={[
        {
          title: "Grading breakdown",
          items: [
            { label: "Conclusion accuracy", value: "89%", meter: 89 },
            { label: "Evidence completeness", value: "91%", meter: 91 },
            { label: "ATT&CK mapping", value: "78%", meter: 78 },
            { label: "Report quality", value: "72%", meter: 72 },
          ],
        },
      ]}
    />
  );
}
