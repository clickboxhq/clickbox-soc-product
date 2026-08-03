import { createFileRoute, useParams } from "@tanstack/react-router";
import { Award, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/verify/$id")({
  component: VerifyPage,
  head: () => ({
    meta: [
      { title: "Verify a ClickBox certificate" },
      {
        name: "description",
        content: "Public verification for ClickBox SOC analyst certificates. Confirms holder, track, score and issue date.",
      },
      { property: "og:title", content: "Verify a ClickBox certificate" },
      { property: "og:description", content: "Confirm the authenticity of a ClickBox certificate of completion." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function VerifyPage() {
  const { id } = useParams({ from: "/verify/$id" });
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 py-16">
      <div className="shadow-elev w-full max-w-lg rounded-2xl border border-border bg-card p-8 text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-xl bg-[color:var(--info)]/15 text-[color:var(--info)]">
          <Award className="size-6" />
        </div>
        <h1 className="mt-4 text-xl font-semibold tracking-tight">Certificate verified</h1>
        <p className="mt-1 text-[13px] text-secondary">
          This credential was issued by ClickBox and has not been revoked.
        </p>

        <dl className="mt-6 divide-y divide-border rounded-xl border border-border bg-background text-left text-[12.5px]">
          {[
            ["Credential ID", id],
            ["Holder", "John Doe"],
            ["Track", "SOC Analyst — Tier 2"],
            ["Score", "87 / 100"],
            ["Issued", "24 June 2026"],
            ["Status", "Active"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-4 px-4 py-2.5">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="truncate font-mono">{v}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] text-secondary">
          <CheckCircle2 className="size-3.5 text-[color:var(--success)]" /> Minimal-PII public record
        </p>
      </div>
    </main>
  );
}
