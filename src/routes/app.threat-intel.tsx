import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader, SeverityBadge } from "@/components/soc/primitives";
import { Globe, Hash, Radar } from "lucide-react";

export const Route = createFileRoute("/app/threat-intel")({
  component: TIPage,
  head: () => ({ meta: [{ title: "SOCBOX · Threat Intelligence" }] }),
});

const actors = [
  { name: "Storm-1811", region: "Eastern Europe", motive: "Financial", campaigns: 14, sev: "critical" as const },
  { name: "APT29 (Midnight Blizzard)", region: "Russia", motive: "Espionage", campaigns: 22, sev: "high" as const },
  { name: "Lazarus Group", region: "DPRK", motive: "Financial / Espionage", campaigns: 31, sev: "high" as const },
  { name: "Scattered Spider", region: "US / UK", motive: "Extortion", campaigns: 18, sev: "critical" as const },
];

const iocs = [
  { type: "domain", v: "adobe-secure-invoice.com", tags: ["phishing", "brand-impersonation"], sev: "high" as const },
  { type: "ip", v: "185.220.101.44", tags: ["tor-exit", "phishing"], sev: "medium" as const },
  { type: "sha256", v: "a3f9cd12…7e14bc22", tags: ["cobalt-strike", "beacon"], sev: "critical" as const },
  { type: "url", v: "hxxps://mkt-out.net/o/49x/", tags: ["tracker", "campaign"], sev: "low" as const },
];

function TIPage() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader
        title="Threat Intelligence"
        description="Curated adversary profiles, IOCs, and campaign correlation across your environment."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Panel title="Tracked adversaries" padded={false}>
          <ul className="divide-y divide-border">
            {actors.map((a) => (
              <li key={a.name} className="flex items-center gap-3 px-4 py-3">
                <div className="grid size-8 place-items-center rounded-md bg-[color:var(--info)]/15 text-[color:var(--info)]">
                  <Radar className="size-4" />
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-medium">{a.name}</div>
                  <div className="text-[11px] text-muted-foreground">{a.region} · {a.motive}</div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] tabular-nums">{a.campaigns} campaigns</div>
                  <div className="mt-1"><SeverityBadge level={a.sev} /></div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Recent IOCs" padded={false}>
          <ul className="divide-y divide-border">
            {iocs.map((i) => (
              <li key={i.v} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3">
                <div className="grid size-8 place-items-center rounded-md border border-border bg-background/60 text-muted-foreground">
                  {i.type === "domain" ? <Globe className="size-3.5" /> : <Hash className="size-3.5" />}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-mono text-[12px]">{i.v}</div>
                  <div className="mt-0.5 flex flex-wrap gap-1">
                    {i.tags.map((t) => (
                      <span key={t} className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <SeverityBadge level={i.sev} />
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
