import { useState, useId } from "react";
import {
  Database,
  Cpu,
  Shield,
  Mail,
  Cloud,
  Search,
  PlayCircle,
  FileText,
  Layers,
  Gauge,
} from "lucide-react";

type Node = {
  id: string;
  label: string;
  tooltip: string;
  x: number; // 0-100 (%)
  icon: React.ComponentType<{ className?: string }>;
};

const INPUTS: Node[] = [
  { id: "siem", label: "SIEM", tooltip: "Log aggregation & correlation", x: 10, icon: Database },
  { id: "edr", label: "EDR", tooltip: "Endpoint detection & response", x: 30, icon: Cpu },
  { id: "fw", label: "Firewall", tooltip: "Network perimeter telemetry", x: 50, icon: Shield },
  { id: "email", label: "Email", tooltip: "Mail gateway & phishing signals", x: 70, icon: Mail },
  { id: "cloud", label: "Cloud", tooltip: "AWS · Azure · GCP audit trails", x: 90, icon: Cloud },
];

const OUTPUTS: Node[] = [
  { id: "inv", label: "Investigations", tooltip: "AI-assembled incident cases", x: 10, icon: Search },
  { id: "play", label: "Playbooks", tooltip: "Automated response actions", x: 30, icon: PlayCircle },
  { id: "rep", label: "Reports", tooltip: "Executive & compliance reporting", x: 50, icon: FileText },
  { id: "evi", label: "Evidence", tooltip: "Chain-of-custody artifact timeline", x: 70, icon: Layers },
  { id: "risk", label: "Risk Score", tooltip: "Continuous org-level risk posture", x: 90, icon: Gauge },
];

export function ArchitectureDiagram() {
  const [hover, setHover] = useState<string | null>(null);
  const gid = useId();

  const isActive = (id: string) => hover === id || hover === "core";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[#0b1013] p-6 md:p-10">
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />

      {/* diagram canvas */}
      <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl">
        {/* SVG lines behind nodes */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 56"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id={`${gid}-flow`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16c784" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#16c784" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#16c784" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* input -> core */}
          {INPUTS.map((n) => {
            const active = isActive(n.id);
            return (
              <line
                key={`in-${n.id}`}
                x1={n.x}
                y1={8}
                x2={50}
                y2={28}
                stroke={active ? "#16c784" : "rgba(255,255,255,0.14)"}
                strokeWidth={active ? 0.35 : 0.2}
                strokeDasharray="0.6 0.8"
                vectorEffect="non-scaling-stroke"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-8"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </line>
            );
          })}

          {/* core -> output */}
          {OUTPUTS.map((n) => {
            const active = isActive(n.id);
            return (
              <line
                key={`out-${n.id}`}
                x1={50}
                y1={28}
                x2={n.x}
                y2={48}
                stroke={active ? "#16c784" : "rgba(255,255,255,0.14)"}
                strokeWidth={active ? 0.35 : 0.2}
                strokeDasharray="0.6 0.8"
                vectorEffect="non-scaling-stroke"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-8"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </line>
            );
          })}
        </svg>

        {/* Top tier */}
        <div className="absolute inset-x-0 top-0 flex h-[18%] items-center">
          {INPUTS.map((n) => (
            <NodePill
              key={n.id}
              node={n}
              active={isActive(n.id)}
              onEnter={() => setHover(n.id)}
              onLeave={() => setHover(null)}
            />
          ))}
        </div>

        {/* Core */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          onMouseEnter={() => setHover("core")}
          onMouseLeave={() => setHover(null)}
        >
          <div
            className="relative flex items-center gap-2 rounded-xl border px-5 py-3 backdrop-blur"
            style={{
              borderColor: "#16c784",
              background: "rgba(22,199,132,0.06)",
              boxShadow:
                "0 0 0 1px rgba(22,199,132,0.35), 0 0 60px -10px rgba(22,199,132,0.45)",
            }}
          >
            <span
              className="size-2 rounded-full"
              style={{
                background: "#16c784",
                boxShadow: "0 0 10px 2px rgba(22,199,132,0.7)",
              }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
              SOCBOX
            </span>
            <span className="text-[13.5px] font-semibold tracking-tight text-white">
              AI Core
            </span>
          </div>
        </div>

        {/* Bottom tier */}
        <div className="absolute inset-x-0 bottom-0 flex h-[18%] items-center">
          {OUTPUTS.map((n) => (
            <NodePill
              key={n.id}
              node={n}
              active={isActive(n.id)}
              onEnter={() => setHover(n.id)}
              onLeave={() => setHover(null)}
            />
          ))}
        </div>
      </div>

      {/* Tooltip readout */}
      <div className="mx-auto mt-6 h-6 max-w-2xl text-center font-mono text-[11.5px] text-white/60">
        {hover
          ? [...INPUTS, ...OUTPUTS].find((n) => n.id === hover)?.tooltip ??
            "Every signal routes through SOCBOX AI Core"
          : "Hover a node to trace how signal flows through the platform"}
      </div>
    </div>
  );
}

function NodePill({
  node,
  active,
  onEnter,
  onLeave,
}: {
  node: Node;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = node.icon;
  return (
    <div
      className="absolute -translate-x-1/2"
      style={{ left: `${node.x}%` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className="flex items-center gap-2 rounded-lg border px-2.5 py-1.5 backdrop-blur transition-all duration-150"
        style={{
          borderColor: active ? "#16c784" : "rgba(255,255,255,0.10)",
          background: active ? "rgba(22,199,132,0.08)" : "rgba(16,21,26,0.9)",
          transform: active ? "translateY(-1px)" : "translateY(0)",
        }}
      >
        <Icon className="size-3.5 text-white/80" />
        <span className="text-[11.5px] font-medium tracking-tight text-white">
          {node.label}
        </span>
      </div>
    </div>
  );
}
