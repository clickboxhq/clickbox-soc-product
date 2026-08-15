import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/components/soc/workspace-page";
import { SeverityBadge } from "@/components/soc/primitives";
import { Download } from "lucide-react";

export const Route = createFileRoute("/app/evidence")({
  component: EvidenceLocker,
  head: () => ({
    meta: [
      { title: "ThreatLens · Evidence Locker" },
      { name: "description", content: "Chain-of-custody store for artifacts collected during SOC investigations." },
      { property: "og:title", content: "ThreatLens · Evidence Locker" },
      { property: "og:description", content: "Artifacts, hashes, and chain of custody for every investigation." },
    ],
  }),
});

const artifacts = [
  { id: "EVD-9014", name: "message_trace_INV-3181.csv", type: "Message trace", inv: "INV-3181", sev: "critical" as const, hash: "9f2c…41ab", who: "J. Doe", when: "12m ago" },
  { id: "EVD-9013", name: "signin_logs_kate.morgan.json", type: "Identity log", inv: "INV-3182", sev: "high" as const, hash: "4de1…0c77", who: "J. Doe", when: "38m ago" },
  { id: "EVD-9012", name: "proc_tree_SRV-DB-07.txt", type: "Process tree", inv: "INV-3178", sev: "critical" as const, hash: "b710…9e12", who: "P. Nair", when: "1h ago" },
  { id: "EVD-9011", name: "invoice_update.docm", type: "Attachment", inv: "INV-3181", sev: "high" as const, hash: "cc09…7a54", who: "A. Ward", when: "2h ago" },
  { id: "EVD-9010", name: "oauth_consent_grant.json", type: "Cloud audit", inv: "INV-3179", sev: "medium" as const, hash: "1a88…33f0", who: "J. Doe", when: "3h ago" },
  { id: "EVD-9009", name: "usb_insert_events.evtx", type: "Endpoint log", inv: "INV-3177", sev: "medium" as const, hash: "77bd…5cd1", who: "Y. Demir", when: "yesterday" },
];

function EvidenceLocker() {
  return (
    <WorkspacePage
      title="Evidence Locker"
      description="Every artifact you collect is hashed, timestamped, and bound to an investigation for grading."
      actions={
        <button className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card px-3 text-[12px] text-secondary hover:text-foreground">
          <Download className="size-3.5" /> Export manifest
        </button>
      }
      stats={[
        { label: "Artifacts collected", value: "214", delta: "+18 this week" },
        { label: "Collection rate", value: "91%", delta: "+6% this month", tone: "success" },
        { label: "Required outstanding", value: "6", delta: "across 3 investigations", tone: "high" },
        { label: "Chain of custody", value: "100%", delta: "verified", tone: "success" },
      ]}
      table={{
        title: "Collected artifacts",
        columns: ["ID", "Artifact", "Type", "Investigation", "Severity", "SHA-256", "Collected by", "When"],
        rows: artifacts.map((a) => [
          <span className="font-mono text-[11px] text-muted-foreground">{a.id}</span>,
          <span className="font-medium">{a.name}</span>,
          a.type,
          <span className="font-mono text-[11px] text-secondary">{a.inv}</span>,
          <SeverityBadge level={a.sev} />,
          <span className="font-mono text-[11px] text-muted-foreground">{a.hash}</span>,
          a.who,
          <span className="text-muted-foreground">{a.when}</span>,
        ]),
      }}
      asides={[
        {
          title: "Coverage by source",
          items: [
            { label: "Identity", value: "96%", meter: 96 },
            { label: "Endpoint", value: "88%", meter: 88 },
            { label: "Email", value: "93%", meter: 93 },
            { label: "Cloud", value: "84%", meter: 84 },
            { label: "Network", value: "71%", meter: 71 },
          ],
        },
        {
          title: "Grading impact",
          items: [
            { label: "Evidence weight", value: "40% of score" },
            { label: "Correct conclusion", value: "35% of score" },
            { label: "ATT&CK mapping", value: "15% of score" },
            { label: "Time to resolution", value: "10% of score" },
          ],
        },
      ]}
    />
  );
}
