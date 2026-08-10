import { createFileRoute, Link } from "@tanstack/react-router";
import { Panel, SectionHeader, SeverityBadge, StatusBadge } from "@/components/soc/primitives";
import { incidents } from "@/lib/soc-data";
import { ArrowUpRight, Plus } from "lucide-react";

export const Route = createFileRoute("/app/investigations/")({
  component: InvList,
  head: () => ({ meta: [{ title: "ClickBox · Investigations" }] }),
});

function InvList() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader
        title="Investigations"
        description="Open workspaces for active analyst investigations."
        actions={
          <button className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-3 text-[12px] font-medium text-primary-foreground hover:bg-primary-hover">
            <Plus className="size-3.5" /> New investigation
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {incidents.map((i) => (
          <Panel key={i.id}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[10.5px] text-muted-foreground">{i.id}</span>
              <SeverityBadge level={i.severity} />
            </div>
            <h3 className="mt-2 text-[14px] font-medium leading-snug">{i.title}</h3>
            <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
              <StatusBadge status={i.status} />
              <span>· {i.alerts} alerts · {i.entities} entities</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[11.5px]">
              <span className="text-secondary">{i.owner}</span>
              <Link
                to="/app/investigations/$id"
                params={{ id: i.id }}
                className="inline-flex items-center gap-1 text-[color:var(--info)]"
              >
                Open workspace <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
