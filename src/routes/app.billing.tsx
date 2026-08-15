import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/components/soc/workspace-page";

export const Route = createFileRoute("/app/billing")({
  component: Billing,
  head: () => ({
    meta: [
      { title: "ThreatLens · Billing" },
      { name: "description", content: "Seat allocation, scenario usage, and invoices for your ClickBox training tenant." },
      { property: "og:title", content: "ThreatLens · Billing" },
      { property: "og:description", content: "Seats, usage, and invoices for the ClickBox training platform." },
    ],
  }),
});

const invoices = [
  { id: "INV-2026-08", period: "Aug 2026", seats: 128, amount: "$18,432.00", status: "Open" },
  { id: "INV-2026-07", period: "Jul 2026", seats: 121, amount: "$17,424.00", status: "Paid" },
  { id: "INV-2026-06", period: "Jun 2026", seats: 118, amount: "$16,992.00", status: "Paid" },
  { id: "INV-2026-05", period: "May 2026", seats: 104, amount: "$14,976.00", status: "Paid" },
];

function Billing() {
  return (
    <WorkspacePage
      title="Billing"
      description="Enterprise plan — billed per active analyst seat with unlimited scenario launches."
      stats={[
        { label: "Plan", value: "Enterprise" },
        { label: "Active seats", value: "128", delta: "of 150 licensed" },
        { label: "Scenario launches", value: "3,214", delta: "this month", tone: "info" },
        { label: "Next invoice", value: "$18,432", delta: "due Sep 01", tone: "high" },
      ]}
      table={{
        title: "Invoices",
        columns: ["Invoice", "Period", "Seats", "Amount", "Status"],
        rows: invoices.map((i) => [
          <span className="font-mono text-[11px] text-muted-foreground">{i.id}</span>,
          i.period,
          <span className="tabular-nums">{i.seats}</span>,
          <span className="tabular-nums">{i.amount}</span>,
          <span
            className="text-[11px] font-medium"
            style={{ color: i.status === "Paid" ? "var(--success)" : "var(--warning)" }}
          >
            {i.status}
          </span>,
        ]),
      }}
      asides={[
        {
          title: "Seat utilization",
          items: [
            { label: "Analysts", value: "112 / 130", meter: 86 },
            { label: "Instructors", value: "12 / 15", meter: 80 },
            { label: "Administrators", value: "4 / 5", meter: 80 },
          ],
        },
      ]}
    />
  );
}
