import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader } from "@/components/soc/primitives";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/app/organizations")({
  component: OrgsPage,
  head: () => ({ meta: [{ title: "SOCBOX · Organizations" }] }),
});

const orgs = [
  { name: "Contoso Global", seats: 420, plan: "Enterprise", region: "EU-West" },
  { name: "Fabrikam Financial", seats: 180, plan: "Enterprise", region: "US-East" },
  { name: "Northwind University", seats: 620, plan: "Education", region: "EU-North" },
  { name: "Adventure Works", seats: 90, plan: "Business", region: "APAC" },
];

function OrgsPage() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader title="Organizations" description="Multi-tenant management for training providers, MSSPs, and universities." />
      <Panel padded={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px]">
            <thead className="bg-background/50 text-[10.5px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-2.5 text-left">Organization</th>
                <th className="px-4 py-2.5 text-left">Plan</th>
                <th className="px-4 py-2.5 text-left">Seats</th>
                <th className="px-4 py-2.5 text-left">Region</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orgs.map((o) => (
                <tr key={o.name} className="hover:bg-background/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="size-4 text-muted-foreground" />
                      <span className="font-medium">{o.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-secondary">{o.plan}</td>
                  <td className="px-4 py-3 tabular-nums text-secondary">{o.seats}</td>
                  <td className="px-4 py-3 text-secondary">{o.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
