import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader } from "@/components/soc/primitives";
import { Award, Download } from "lucide-react";

export const Route = createFileRoute("/app/certificates")({
  component: Certs,
  head: () => ({ meta: [{ title: "ClickBox · Certificates" }] }),
});

const certs = [
  { name: "ClickBox Certified Analyst — L2", id: "SBX-CA2-4419", issued: "Jun 24, 2026", expires: "Jun 24, 2028" },
  { name: "Identity Attack Investigation", id: "SBX-IAI-1188", issued: "Jun 12, 2026", expires: "Jun 12, 2028" },
  { name: "Endpoint Forensics Fundamentals", id: "SBX-EFF-0921", issued: "May 30, 2026", expires: "May 30, 2028" },
  { name: "Email Threat Investigation", id: "SBX-ETI-0774", issued: "May 18, 2026", expires: "May 18, 2028" },
];

function Certs() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader title="Certificates" description="Verifiable, tamper-evident credentials for completed programs." />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certs.map((c) => (
          <Panel key={c.id}>
            <div className="flex items-start gap-3">
              <div className="grid size-12 place-items-center rounded-lg border border-[color:var(--info)]/30 bg-[color:var(--info)]/10 text-[color:var(--info)]">
                <Award className="size-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14.5px] font-semibold">{c.name}</h3>
                <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">{c.id}</div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11.5px]">
                  <div><span className="text-muted-foreground">Issued </span><span>{c.issued}</span></div>
                  <div><span className="text-muted-foreground">Expires </span><span>{c.expires}</span></div>
                </div>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-[11.5px] text-secondary">
                <Download className="size-3.5" /> PDF
              </button>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
