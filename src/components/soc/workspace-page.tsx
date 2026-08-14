import type { ReactNode } from "react";
import { Panel, SectionHeader, StatCard } from "@/components/soc/primitives";

export type WorkspaceStat = {
  label: string;
  value: string;
  delta?: string;
  tone?: "default" | "critical" | "high" | "success" | "info";
};

export type WorkspaceTable = {
  title: string;
  columns: string[];
  rows: ReactNode[][];
};

export type WorkspaceAside = {
  title: string;
  items: { label: string; value: string; meter?: number }[];
};

/**
 * Shared enterprise workspace layout: KPI strip, primary data table,
 * and supporting side panels. Keeps every module visually consistent.
 */
export function WorkspacePage({
  title,
  description,
  actions,
  stats,
  table,
  asides = [],
  children,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  stats?: WorkspaceStat[];
  table?: WorkspaceTable;
  asides?: WorkspaceAside[];
  children?: ReactNode;
}) {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader title={title} description={description} actions={actions} />

      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} label={s.label} value={s.value} delta={s.delta} tone={s.tone} />
          ))}
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {table && (
          <Panel className="lg:col-span-2" title={table.title} padded={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12.5px]">
                <thead>
                  <tr className="border-b border-border text-[10.5px] uppercase tracking-wider text-muted-foreground">
                    {table.columns.map((c) => (
                      <th key={c} className="px-4 py-2.5 font-medium">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {table.rows.map((r, i) => (
                    <tr key={i} className="transition-colors hover:bg-background/40">
                      {r.map((cell, j) => (
                        <td key={j} className="px-4 py-2.5 align-middle">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        )}

        <div className="flex flex-col gap-4">
          {asides.map((a) => (
            <Panel key={a.title} title={a.title}>
              <ul className="space-y-2.5">
                {a.items.map((it) => (
                  <li key={it.label}>
                    <div className="flex items-baseline justify-between text-[12px]">
                      <span className="text-secondary">{it.label}</span>
                      <span className="tabular-nums">{it.value}</span>
                    </div>
                    {typeof it.meter === "number" && (
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background">
                        <div
                          className="h-full rounded-full bg-[color:var(--info)]"
                          style={{ width: `${it.meter}%` }}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>
      </div>

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
