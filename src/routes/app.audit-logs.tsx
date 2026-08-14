import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/components/soc/workspace-page";

export const Route = createFileRoute("/app/audit-logs")({
  component: AuditLogs,
  head: () => ({
    meta: [
      { title: "ClickBox · Audit Logs" },
      { name: "description", content: "Platform audit trail for investigation actions, grading changes, and admin events." },
      { property: "og:title", content: "ClickBox · Audit Logs" },
      { property: "og:description", content: "Immutable audit trail across the ClickBox training platform." },
    ],
  }),
});

const logs = [
  { ts: "02:11:04", actor: "john.doe", action: "evidence.collect", target: "EVD-9014", ctx: "INV-3181", ip: "10.14.2.66" },
  { ts: "02:04:51", actor: "jonas.weber", action: "assessment.grade", target: "AS-113", ctx: "42 submissions", ip: "10.14.2.9" },
  { ts: "01:58:12", actor: "system", action: "scenario.randomize", target: "SC-081", ctx: "seed rotated", ip: "—" },
  { ts: "01:44:30", actor: "priya.nair", action: "case.conclude", target: "INV-3177", ctx: "verdict accepted", ip: "10.14.7.4" },
  { ts: "01:31:07", actor: "admin", action: "role.grant", target: "marcus.chen", ctx: "instructor", ip: "10.14.1.2" },
  { ts: "01:12:45", actor: "amelia.ward", action: "hint.reveal", target: "SC-079", ctx: "−5% score", ip: "10.22.4.18" },
];

function AuditLogs() {
  return (
    <WorkspacePage
      title="Audit Logs"
      description="Immutable record of investigation actions, grading decisions, and administrative changes."
      stats={[
        { label: "Events (24h)", value: "4,182" },
        { label: "Admin actions", value: "36" },
        { label: "Grading overrides", value: "4", tone: "high" },
        { label: "Retention", value: "400 days" },
      ]}
      table={{
        title: "Recent events",
        columns: ["Time", "Actor", "Action", "Target", "Context", "Source IP"],
        rows: logs.map((l) => [
          <span className="font-mono text-[11px] text-muted-foreground">{l.ts}</span>,
          <span className="font-medium">{l.actor}</span>,
          <span className="font-mono text-[11px] text-[color:var(--info)]">{l.action}</span>,
          <span className="font-mono text-[11px]">{l.target}</span>,
          <span className="text-secondary">{l.ctx}</span>,
          <span className="font-mono text-[11px] text-muted-foreground">{l.ip}</span>,
        ]),
      }}
      asides={[
        {
          title: "Event categories",
          items: [
            { label: "Investigation", value: "2,914", meter: 70 },
            { label: "Grading", value: "612", meter: 15 },
            { label: "Authentication", value: "520", meter: 12 },
            { label: "Administration", value: "136", meter: 3 },
          ],
        },
      ]}
    />
  );
}
