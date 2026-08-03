import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader } from "@/components/soc/primitives";
import { Kbd } from "@/components/soc/primitives";
import { Search, UserRound, Cpu, Mail, FileText, Globe, Hash, Radar } from "lucide-react";

export const Route = createFileRoute("/app/search")({
  component: SearchPage,
  head: () => ({ meta: [{ title: "ClickBox · Global Search" }] }),
});

const categories = [
  { label: "Users", icon: UserRound, count: 12 },
  { label: "Devices", icon: Cpu, count: 4 },
  { label: "Alerts", icon: Radar, count: 22 },
  { label: "Emails", icon: Mail, count: 7 },
  { label: "Files", icon: FileText, count: 5 },
  { label: "Domains", icon: Globe, count: 3 },
  { label: "MITRE IDs", icon: Hash, count: 6 },
];

function SearchPage() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader
        title="Global Search"
        description="Search across identities, endpoints, alerts, incidents, files, domains, IPs, MITRE techniques, and scenarios."
      />

      <Panel>
        <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2.5 text-[13px]">
          <Search className="size-4 text-muted-foreground" />
          <input
            defaultValue="storm-1811"
            className="flex-1 bg-transparent focus:outline-none"
            placeholder="Search everything…"
          />
          <Kbd>⌘</Kbd><Kbd>K</Kbd>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c.label} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-[12px] text-secondary hover:text-foreground">
              <c.icon className="size-3.5" /> {c.label}
              <span className="rounded bg-card px-1 text-[10px] text-muted-foreground">{c.count}</span>
            </button>
          ))}
        </div>
      </Panel>

      <div className="mt-6 space-y-4">
        <Panel title="Top results">
          <ul className="divide-y divide-border">
            {[
              { icon: Radar, title: "Adversary · Storm-1811", meta: "Financially motivated · 14 tracked campaigns" },
              { icon: FileText, title: "SC-081 · BEC via OAuth consent phishing", meta: "Scenario · Advanced · 45 min" },
              { icon: Mail, title: "MSG-3120 · HR-benefits open enrollment phish", meta: "Correlated with Storm-1811-C · 87 messages" },
              { icon: UserRound, title: "sarah.chen@contoso.com", meta: "Identity · risk 47 · OAuth consent grant flagged" },
              { icon: Cpu, title: "SRV-DB-07", meta: "Windows Server 2022 · encoded PowerShell observed" },
            ].map((r) => (
              <li key={r.title} className="flex items-center gap-3 py-3">
                <div className="grid size-8 place-items-center rounded-md border border-border bg-background/60 text-muted-foreground">
                  <r.icon className="size-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[13px] font-medium">{r.title}</div>
                  <div className="truncate text-[11px] text-muted-foreground">{r.meta}</div>
                </div>
                <button className="rounded-md border border-border px-2 py-1 text-[11px] text-secondary hover:text-foreground">Open</button>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
