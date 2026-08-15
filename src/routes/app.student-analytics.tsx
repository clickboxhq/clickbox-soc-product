import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/components/soc/workspace-page";

export const Route = createFileRoute("/app/student-analytics")({
  component: StudentAnalytics,
  head: () => ({
    meta: [
      { title: "ThreatLens · Student Analytics" },
      { name: "description", content: "Per-analyst investigation performance, accuracy, and evidence collection trends." },
      { property: "og:title", content: "ThreatLens · Student Analytics" },
      { property: "og:description", content: "Instructor view of learner accuracy, evidence rate, and ATT&CK breadth." },
    ],
  }),
});

const students = [
  { name: "Elena Rossi", cohort: "CH-2026-A", inv: 148, acc: 94, evid: 96, mitre: 82, risk: "Low" },
  { name: "Marcus Chen", cohort: "CH-2026-B", inv: 141, acc: 91, evid: 93, mitre: 79, risk: "Low" },
  { name: "Priya Nair", cohort: "CH-2026-C", inv: 133, acc: 90, evid: 88, mitre: 76, risk: "Low" },
  { name: "Yusuf Demir", cohort: "CH-2026-A", inv: 129, acc: 84, evid: 81, mitre: 68, risk: "Medium" },
  { name: "Amelia Ward", cohort: "CH-2026-A", inv: 121, acc: 76, evid: 69, mitre: 58, risk: "High" },
  { name: "Daniel Holt", cohort: "CH-2026-D", inv: 64, acc: 68, evid: 62, mitre: 44, risk: "High" },
];

const riskTone = (r: string) =>
  r === "High" ? "var(--critical)" : r === "Medium" ? "var(--warning)" : "var(--success)";

function StudentAnalytics() {
  return (
    <WorkspacePage
      title="Student Analytics"
      description="Where analysts lose points: missed evidence, wrong verdicts, and unmapped techniques."
      stats={[
        { label: "Analysts tracked", value: "128" },
        { label: "Cohort accuracy", value: "78%", delta: "+4% this month", tone: "success" },
        { label: "Evidence rate", value: "84%", tone: "info" },
        { label: "At risk", value: "7", delta: "below 70% accuracy", tone: "critical" },
      ]}
      table={{
        title: "Analyst performance",
        columns: ["Analyst", "Cohort", "Investigations", "Accuracy", "Evidence rate", "ATT&CK breadth", "Risk"],
        rows: students.map((s) => [
          <span className="font-medium">{s.name}</span>,
          <span className="font-mono text-[11px] text-secondary">{s.cohort}</span>,
          <span className="tabular-nums">{s.inv}</span>,
          <span className="tabular-nums">{s.acc}%</span>,
          <span className="tabular-nums">{s.evid}%</span>,
          <span className="tabular-nums">{s.mitre}%</span>,
          <span className="text-[11px] font-medium" style={{ color: riskTone(s.risk) }}>{s.risk}</span>,
        ]),
      }}
      asides={[
        {
          title: "Common failure modes",
          items: [
            { label: "Missing message trace", value: "34 cases", meter: 68 },
            { label: "No conditional-access check", value: "27 cases", meter: 54 },
            { label: "Unmapped technique", value: "22 cases", meter: 44 },
            { label: "Closed without conclusion", value: "9 cases", meter: 18 },
          ],
        },
      ]}
    />
  );
}
