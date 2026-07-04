import { createFileRoute } from "@tanstack/react-router";
import {
  Panel,
  SectionHeader,
  StatCard,
  SeverityBadge,
  StatusBadge,
} from "@/components/soc/primitives";
import {
  Activity,
  AlertOctagon,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Bell,
  Cpu,
  Download,
  Flame,
  Gauge,
  ShieldAlert,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  alerts,
  incidents,
  leaderboard,
  mitreCoverage,
  signedOverTime,
} from "@/lib/soc-data";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "SOCBOX · Dashboard" }] }),
});

function Dashboard() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader
        title="Welcome back, John"
        description="Live view of investigations, alerts, and analyst performance across Contoso Global SOC."
        actions={
          <>
            <button className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card px-3 text-[12px] text-secondary hover:text-foreground">
              <Download className="size-3.5" /> Export
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-md bg-[color:var(--info)] px-3 text-[12px] font-medium text-[color:var(--background)] hover:opacity-90">
              <ShieldAlert className="size-3.5" /> New investigation
            </button>
          </>
        }
      />

      {/* KPI grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Active investigations"
          value="128"
          delta="+14 today"
          icon={<Activity className="size-4" />}
        />
        <StatCard
          label="Open incidents"
          value="47"
          delta="5 critical"
          tone="critical"
          icon={<AlertOctagon className="size-4" />}
        />
        <StatCard
          label="Critical alerts (24h)"
          value="26"
          delta="↑ 12% vs yesterday"
          tone="high"
          icon={<Flame className="size-4" />}
        />
        <StatCard
          label="Avg. investigation score"
          value="87.4"
          delta="Top decile"
          tone="success"
          icon={<Gauge className="size-4" />}
        />
      </div>

      {/* Chart row */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel
          className="lg:col-span-2"
          title="Investigations completed"
          actions={
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-sm bg-[color:var(--info)]" />
                Actual
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-sm bg-muted-foreground/60" />
                Target
              </span>
              <span className="rounded border border-border bg-background px-2 py-0.5 text-[11px] text-secondary">
                Jan – Jul
              </span>
            </div>
          }
        >
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={signedOverTime} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="gInv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--info)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--info)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="m" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="target"
                  stroke="var(--muted-foreground)"
                  strokeDasharray="4 4"
                  fill="transparent"
                  strokeWidth={1.5}
                />
                <Area
                  type="monotone"
                  dataKey="investigations"
                  stroke="var(--info)"
                  strokeWidth={2}
                  fill="url(#gInv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="MITRE ATT&CK coverage" actions={<Target className="size-4 text-muted-foreground" />}>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mitreCoverage} layout="vertical" margin={{ top: 4, right: 12, left: 4, bottom: 0 }}>
                <CartesianGrid stroke="var(--border)" horizontal={false} strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis
                  type="category"
                  dataKey="tactic"
                  stroke="var(--muted-foreground)"
                  fontSize={10.5}
                  width={110}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v) => [`${v}%`, "Coverage"]}
                />
                <Bar dataKey="cov" fill="var(--info)" radius={[3, 3, 3, 3]} barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      {/* Alerts + Incidents */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel
          className="lg:col-span-2"
          title="Recent alerts"
          padded={false}
          actions={
            <a href="/app/alerts" className="inline-flex items-center gap-1 text-[12px] text-secondary hover:text-foreground">
              View all <ArrowUpRight className="size-3" />
            </a>
          }
        >
          <div className="divide-y divide-border">
            {alerts.slice(0, 6).map((a) => (
              <div key={a.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 hover:bg-background/40">
                <div className="grid size-8 place-items-center rounded-md border border-border bg-background/60 text-secondary">
                  <Bell className="size-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-[13px] font-medium">{a.name}</span>
                    <SeverityBadge level={a.severity} />
                  </div>
                  <div className="mt-0.5 truncate text-[11px] text-muted-foreground">
                    {a.mitre} · {a.source} · {a.user}
                  </div>
                </div>
                <div className="text-right text-[11px] text-muted-foreground tabular-nums">{a.ts}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Open incidents" padded={false}>
          <div className="divide-y divide-border">
            {incidents.slice(0, 5).map((i) => (
              <div key={i.id} className="px-4 py-3 hover:bg-background/40">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground">{i.id}</span>
                  <StatusBadge status={i.status} />
                </div>
                <div className="mt-1 line-clamp-2 text-[13px] font-medium">{i.title}</div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{i.alerts} alerts · {i.entities} entities</span>
                  <span>{i.owner}</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Bottom row */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel title="Analyst leaderboard" padded={false}>
          <div className="divide-y divide-border">
            {leaderboard.map((l, i) => (
              <div key={l.name} className="flex items-center gap-3 px-4 py-3">
                <div className={`grid size-7 place-items-center rounded-md border border-border text-[11px] font-semibold ${i === 0 ? "text-[color:var(--warning)]" : "text-secondary"}`}>
                  {i === 0 ? <Trophy className="size-3.5" /> : i + 1}
                </div>
                <div className="flex-1 text-[13px] font-medium">{l.name}</div>
                <div className="text-right">
                  <div className="text-[12px] tabular-nums">{l.score.toLocaleString()}</div>
                  <div className="text-[10px] text-muted-foreground">{l.solved} solved</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Organization risk">
          <div className="flex items-baseline gap-2">
            <div className="text-4xl font-semibold tabular-nums text-[color:var(--high)]">63</div>
            <div className="text-[11px] text-muted-foreground">/ 100 · Elevated</div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-background">
            <div className="h-full w-[63%] rounded-full bg-gradient-to-r from-[color:var(--success)] via-[color:var(--warning)] to-[color:var(--critical)]" />
          </div>
          <ul className="mt-4 space-y-2.5 text-[12px]">
            <li className="flex items-center justify-between">
              <span className="text-secondary">Identity</span>
              <span className="tabular-nums text-[color:var(--critical)]">72</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-secondary">Endpoint</span>
              <span className="tabular-nums text-[color:var(--high)]">68</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-secondary">Cloud</span>
              <span className="tabular-nums text-[color:var(--warning)]">54</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-secondary">Email</span>
              <span className="tabular-nums text-[color:var(--success)]">41</span>
            </li>
          </ul>
        </Panel>

        <Panel title="Learning & certificates" padded={false}>
          <div className="space-y-3 p-4">
            <div>
              <div className="flex items-center justify-between text-[12px]">
                <span>SOC Analyst Track</span>
                <span className="tabular-nums text-secondary">74%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background">
                <div className="h-full w-[74%] rounded-full bg-[color:var(--info)]" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-[12px]">
                <span>Threat Hunter Track</span>
                <span className="tabular-nums text-secondary">42%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background">
                <div className="h-full w-[42%] rounded-full bg-[color:var(--info)]" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-[12px]">
                <span>Incident Responder Track</span>
                <span className="tabular-nums text-secondary">88%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background">
                <div className="h-full w-[88%] rounded-full bg-[color:var(--info)]" />
              </div>
            </div>
          </div>
          <div className="border-t border-border p-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Recent certificates
            </div>
            {[
              { name: "SOCBOX Certified Analyst — L2", when: "Jun 24" },
              { name: "Identity Attack Investigation", when: "Jun 12" },
              { name: "Endpoint Forensics Fundamentals", when: "May 30" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-2 py-1.5 text-[12px]">
                <Award className="size-3.5 text-[color:var(--info)]" />
                <span className="flex-1 truncate">{c.name}</span>
                <span className="text-[11px] text-muted-foreground">{c.when}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* AI + News */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Panel className="lg:col-span-2" title="SOCBOX Copilot">
          <div className="flex items-start gap-3">
            <div className="grid size-9 place-items-center rounded-md bg-[color:var(--info)]/15 text-[color:var(--info)]">
              <Sparkles className="size-4" />
            </div>
            <div className="flex-1">
              <p className="text-[13px] text-secondary">
                <span className="text-foreground">3 investigations</span> match the current
                <span className="text-foreground"> BEC via OAuth consent phishing</span> pattern.
                Consider correlating <span className="font-mono text-foreground">ALT-24810</span>
                with the identity risk spike on <span className="font-mono text-foreground">sarah.chen@contoso.com</span>.
                I can draft an executive brief and open a linked incident.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="rounded-md border border-border bg-background px-2.5 py-1 text-[11px] text-secondary hover:text-foreground">
                  Draft executive brief
                </button>
                <button className="rounded-md border border-border bg-background px-2.5 py-1 text-[11px] text-secondary hover:text-foreground">
                  Open linked incident
                </button>
                <button className="rounded-md border border-border bg-background px-2.5 py-1 text-[11px] text-secondary hover:text-foreground">
                  Explain T1528
                </button>
              </div>
            </div>
          </div>
        </Panel>

        <Panel title="Threat intel feed" padded={false}>
          <div className="divide-y divide-border">
            {[
              { t: "APT29 rotates infrastructure across 14 new domains", tag: "Nation-state", when: "1h" },
              { t: "Emerging Lumma Stealer campaign targeting finance", tag: "Malware", when: "3h" },
              { t: "CVE-2026-31142: Critical RCE in Fortinet SSL-VPN", tag: "Vulnerability", when: "6h" },
              { t: "Storm-1811 shifts to Teams-based social engineering", tag: "Ransomware", when: "1d" },
            ].map((n) => (
              <div key={n.t} className="px-4 py-3">
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="rounded border border-border bg-background px-1.5 py-0.5 text-muted-foreground">
                    {n.tag}
                  </span>
                  <span className="text-muted-foreground">{n.when} ago</span>
                </div>
                <div className="mt-1 text-[13px]">{n.t}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
