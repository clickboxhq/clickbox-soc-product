import { createFileRoute } from "@tanstack/react-router";
import { Panel, SeverityBadge, StatusBadge } from "@/components/soc/primitives";
import { incidents } from "@/lib/soc-data";
import {
  Activity,
  AlertOctagon,
  ArrowLeft,
  Award,
  Check,
  ChevronRight,
  Cpu,
  FileSearch,
  Fingerprint,
  Flag,
  Link as LinkIcon,
  Lock,
  MessageSquare,
  Network,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/app/investigations/$id")({
  component: InvestigationWorkspace,
  head: () => ({ meta: [{ title: "ClickBox · Investigation" }] }),
});

function InvestigationWorkspace() {
  const { id } = Route.useParams();
  const incident = incidents.find((i) => i.id === id) ?? incidents[0];

  const timeline = [
    { t: "08:12:04", who: "Entra ID", what: "Sign-in from 41.86.7.9 (Lagos, NG) — kate.morgan@contoso.com", sev: "high" as const },
    { t: "08:12:19", who: "Entra ID", what: "MFA challenge satisfied — Authenticator push approved", sev: "info" as const },
    { t: "08:13:41", who: "Exchange", what: "Inbox rule created: move messages from CFO to RSS Feeds", sev: "critical" as const },
    { t: "08:15:02", who: "SharePoint", what: "Bulk file access — /Finance/2026-Q2/Wires (18 files)", sev: "high" as const },
    { t: "08:21:33", who: "EDR", what: "PowerShell -EncodedCommand (base64) executed on SRV-DB-07", sev: "critical" as const },
    { t: "08:24:10", who: "Network", what: "Outbound SMB (445) to 10.22.7.51 — admin$ share access", sev: "high" as const },
  ];

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col">
      {/* Sub-header */}
      <div className="border-b border-border bg-card/50 px-4 py-4 md:px-8">
        <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
          <Link to="/app/incidents" className="inline-flex items-center gap-1 hover:text-foreground">
            <ArrowLeft className="size-3.5" /> Incidents
          </Link>
          <ChevronRight className="size-3" />
          <span className="font-mono">{incident.id}</span>
        </div>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">{incident.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <SeverityBadge level={incident.severity} />
              <StatusBadge status={incident.status} />
              <span className="text-[11px] text-muted-foreground">
                Owner: <span className="text-secondary">{incident.owner}</span>
              </span>
              <span className="text-[11px] text-muted-foreground">
                {incident.alerts} alerts · {incident.entities} entities · updated {incident.updated}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-[12px] text-secondary hover:text-foreground">
              <Lock className="size-3.5" /> Isolate hosts
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-[12px] text-secondary hover:text-foreground">
              <Flag className="size-3.5" /> Escalate
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-md bg-[color:var(--success)] px-3 text-[12px] font-medium text-black">
              <Check className="size-3.5" /> Resolve
            </button>
          </div>
        </div>
      </div>

      {/* Workspace grid */}
      <div className="grid flex-1 grid-cols-1 gap-4 p-4 md:p-8 xl:grid-cols-[280px_minmax(0,1fr)_320px]">
        {/* LEFT — checklist + entities */}
        <div className="space-y-4">
          <Panel title="Investigation checklist" padded={false}>
            <ul className="divide-y divide-border">
              {[
                ["Contain impacted identity", true],
                ["Reset credentials + revoke tokens", true],
                ["Isolate SRV-DB-07 & FIN-DESK-22", false],
                ["Collect PowerShell script block logs", false],
                ["Correlate to prior TI on Storm-1811", false],
                ["Draft executive brief", false],
              ].map(([label, done]) => (
                <li key={label as string} className="flex items-center gap-2 px-3 py-2.5 text-[12.5px]">
                  <span
                    className={`grid size-4 place-items-center rounded border ${
                      done ? "border-[color:var(--success)] bg-[color:var(--success)]/15 text-[color:var(--success)]" : "border-border"
                    }`}
                  >
                    {done && <Check className="size-3" />}
                  </span>
                  <span className={done ? "line-through text-muted-foreground" : "text-secondary"}>{label}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Entities" padded={false}>
            <ul className="divide-y divide-border">
              {[
                { icon: UserRound, label: "kate.morgan@contoso.com", meta: "Identity · risk 82" },
                { icon: UserRound, label: "svc-backup", meta: "Service account · risk 93" },
                { icon: Cpu, label: "SRV-DB-07", meta: "Windows Server 2022" },
                { icon: Cpu, label: "FIN-DESK-22", meta: "Windows 11 · isolated" },
                { icon: Network, label: "41.86.7.9", meta: "IP · Lagos, NG · TI hit" },
                { icon: Fingerprint, label: "SHA256 …a3f9c", meta: "Encoded PowerShell payload" },
              ].map((e) => (
                <li key={e.label} className="flex items-center gap-2 px-3 py-2.5 text-[12px]">
                  <e.icon className="size-3.5 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-mono text-[11.5px]">{e.label}</div>
                    <div className="truncate text-[10.5px] text-muted-foreground">{e.meta}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        {/* CENTER — timeline + notes */}
        <div className="space-y-4">
          <Panel title="Attack timeline" padded={false}>
            <ol className="relative">
              {timeline.map((row, i) => (
                <li key={i} className="relative grid grid-cols-[80px_1fr] gap-4 border-b border-border px-4 py-3 last:border-b-0">
                  <div className="font-mono text-[11px] text-muted-foreground">{row.t}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {row.who}
                      </span>
                      <SeverityBadge level={row.sev} />
                    </div>
                    <div className="mt-1 text-[13px]">{row.what}</div>
                  </div>
                </li>
              ))}
            </ol>
          </Panel>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Panel title="MITRE mapping" padded={false}>
              <ul className="divide-y divide-border">
                {[
                  ["Initial Access", "T1078.004 · Cloud Accounts"],
                  ["Credential Access", "T1110.003 · Password Spraying"],
                  ["Persistence", "T1098 · Account Manipulation"],
                  ["Collection", "T1114.002 · Remote Email Collection"],
                  ["Execution", "T1059.001 · PowerShell"],
                  ["Lateral Movement", "T1021.002 · SMB Admin Shares"],
                ].map(([tac, tech]) => (
                  <li key={tech} className="grid grid-cols-[130px_1fr] gap-3 px-3 py-2.5 text-[12px]">
                    <span className="text-muted-foreground">{tac}</span>
                    <span className="font-mono text-[11.5px]">{tech}</span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel title="Evidence">
              <ul className="space-y-2 text-[12.5px]">
                {[
                  { icon: FileSearch, name: "signin-logs_2026-07-03.json", size: "1.2 MB" },
                  { icon: FileSearch, name: "powershell_scriptblock_SRV-DB-07.evtx", size: "812 KB" },
                  { icon: FileSearch, name: "exchange_inbox_rules_delta.csv", size: "44 KB" },
                  { icon: FileSearch, name: "network_smb_flow_10.22.7.51.pcapng", size: "6.4 MB" },
                ].map((e) => (
                  <li key={e.name} className="flex items-center gap-2 rounded-md border border-border bg-background/40 px-2.5 py-2">
                    <e.icon className="size-3.5 text-muted-foreground" />
                    <span className="flex-1 truncate font-mono text-[11.5px]">{e.name}</span>
                    <span className="text-[10.5px] text-muted-foreground">{e.size}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>

          <Panel title="Analyst notes">
            <textarea
              rows={4}
              defaultValue={`Impossible travel to Lagos followed by inbox rule creation and bulk finance file access strongly suggests token theft or session hijack. Correlate with the encoded PowerShell on SRV-DB-07 — same time window, same actor pattern as Storm-1811 TTPs from May.`}
              className="w-full resize-none rounded-md border border-border bg-background p-3 text-[13px] leading-relaxed text-secondary focus:border-[color:var(--info)] focus:outline-none"
            />
            <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Auto-saved · 08:31</span>
              <button className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 hover:text-foreground">
                <MessageSquare className="size-3" /> Post to case
              </button>
            </div>
          </Panel>
        </div>

        {/* RIGHT — copilot + scoring */}
        <div className="space-y-4">
          <Panel title="ClickBox Copilot">
            <div className="flex items-start gap-2">
              <div className="grid size-8 place-items-center rounded-md bg-[color:var(--info)]/15 text-[color:var(--info)]">
                <Sparkles className="size-4" />
              </div>
              <p className="text-[12.5px] text-secondary">
                This pattern matches <span className="text-foreground">BEC via OAuth consent phishing</span>.
                Recommended next steps: revoke refresh tokens for the identity, quarantine SRV-DB-07,
                and pivot on the SHA256 across the fleet.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Revoke tokens", "Quarantine host", "Pivot on hash", "Explain T1098"].map((c) => (
                <button
                  key={c}
                  className="rounded-md border border-border bg-background px-2 py-1 text-[11px] text-secondary hover:text-foreground"
                >
                  {c}
                </button>
              ))}
            </div>
          </Panel>

          <Panel title="Scoring">
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-semibold text-[color:var(--success)]">92</div>
              <div className="text-[11px] text-muted-foreground">/ 100</div>
            </div>
            <ul className="mt-3 space-y-2 text-[12px]">
              {[
                ["Correct containment", 24, 25],
                ["Evidence quality", 22, 25],
                ["MITRE mapping", 23, 25],
                ["Reporting", 23, 25],
              ].map(([label, v, max]) => (
                <li key={label as string}>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">{label}</span>
                    <span className="tabular-nums text-secondary">{v} / {max}</span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-background">
                    <div
                      className="h-full rounded-full bg-[color:var(--success)]"
                      style={{ width: `${(Number(v) / Number(max)) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background py-2 text-[12px] text-secondary hover:text-foreground">
              <Award className="size-3.5" /> Submit for review
            </button>
          </Panel>

          <Panel title="Related">
            <ul className="space-y-2 text-[12px]">
              {["INC-4820 · Ransomware precursor", "INC-4819 · Password spray campaign", "SC-081 · BEC via OAuth"].map((r) => (
                <li key={r} className="flex items-center gap-2 text-secondary">
                  <LinkIcon className="size-3 text-muted-foreground" />
                  <span className="truncate">{r}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}
