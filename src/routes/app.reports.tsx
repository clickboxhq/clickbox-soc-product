import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader } from "@/components/soc/primitives";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/app/reports")({
  component: ReportsPage,
  head: () => ({ meta: [{ title: "ClickBox · Reports" }] }),
});

const reports = [
  { name: "Executive weekly — SOC posture", type: "Executive", updated: "Today, 07:00", format: "PDF" },
  { name: "Analyst performance — Q2", type: "Analyst", updated: "Yesterday", format: "Excel" },
  { name: "MITRE coverage delta", type: "Program", updated: "2 days ago", format: "PDF" },
  { name: "Incident retrospective — INC-4820", type: "Incident", updated: "3 days ago", format: "PDF" },
  { name: "Learning analytics — Cohort 12", type: "Learning", updated: "1 week ago", format: "CSV" },
];

function ReportsPage() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader
        title="Reports"
        description="Executive briefs, analyst performance, MITRE coverage, and learning outcomes."
        actions={
          <button className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground hover:bg-primary-hover">
            Generate report
          </button>
        }
      />

      <Panel padded={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px]">
            <thead className="bg-background/50 text-[10.5px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-2.5 text-left">Report</th>
                <th className="px-4 py-2.5 text-left">Type</th>
                <th className="px-4 py-2.5 text-left">Format</th>
                <th className="px-4 py-2.5 text-left">Updated</th>
                <th className="w-24" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {reports.map((r) => (
                <tr key={r.name} className="hover:bg-background/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-muted-foreground" />
                      <span className="font-medium">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-secondary">{r.type}</td>
                  <td className="px-4 py-3">
                    <span className="rounded border border-border bg-background px-1.5 py-0.5 text-[10.5px] text-muted-foreground">
                      {r.format}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{r.updated}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] text-secondary hover:text-foreground">
                      <Download className="size-3" /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
