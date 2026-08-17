import { createFileRoute } from "@tanstack/react-router";
import { Fingerprint, KeyRound, Lock, ScrollText, ShieldCheck, Timer } from "lucide-react";

import { MarketingPage, Section } from "@/components/soc/marketing/page-shell";
import { SectionHead, displayFont, monoFont } from "@/components/soc/marketing/atmos";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: "Security — ThreatLens by ClickBox" },
      {
        name: "description",
        content: "How ThreatLens is architected to handle authentication, authorization, tenant isolation, and data protection.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

const PRINCIPLES = [
  { icon: KeyRound, title: "Authentication", body: "Email+password (argon2id) or SSO (SAML/OIDC) for enterprise tenants. Short-lived access tokens with rotating refresh tokens, never stored in localStorage." },
  { icon: Fingerprint, title: "Role-based access control", body: "Four roles — student, instructor, org admin, platform admin — each mapped to an explicit capability matrix, enforced by shared middleware rather than ad hoc checks." },
  { icon: Lock, title: "Tenant isolation", body: "Every tenant-scoped query is required to carry an organization filter at the query-builder layer, so an unscoped query is a build-time error, not a runtime leak." },
  { icon: ShieldCheck, title: "Ground-truth protection", body: "The answer key behind every scenario is read only by the scoring engine's internal path — session and scenario read endpoints are built from an explicit column allow-list, never a raw select." },
  { icon: Timer, title: "Rate limiting", body: "Per-IP and per-user limits at the API layer, with tighter limits specifically on auth endpoints and on evidence/note endpoints to blunt scripted solving." },
  { icon: ScrollText, title: "Audit logging", body: "Every mutating action is logged and hash-chained, so tampering with the log itself is detectable." },
];

function SecurityPage() {
  return (
    <MarketingPage>
      <Section tone="dark" className="!py-20 md:!py-28">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60 backdrop-blur"
          style={monoFont}
        >
          Security
        </div>
        <h1
          className="mt-5 max-w-2xl text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-[42px]"
          style={displayFont}
        >
          Designed in from the architecture up.
        </h1>
        <p className="mt-4 max-w-xl text-[14.5px] leading-[1.7] text-white/55">
          ThreatLens handles synthetic training telemetry, not real customer
          security data — but the platform is architected with the same
          discipline as the enterprise tools it's modeled on. This page
          describes that architecture, not a compliance certification.
        </p>
      </Section>

      <Section tone="light">
        <SectionHead tone="light" eyebrow="Principles" title="What the architecture is built around." />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="h-full glass-card-dark p-5">
              <div className="icon-frame-dark text-white/85">
                <p.icon className="size-[18px]" />
              </div>
              <h3 className="mt-3.5 text-[14px] font-semibold text-white" style={displayFont}>{p.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.6] text-white/55">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <p className="max-w-2xl text-[13.5px] leading-[1.8] text-white/55">
          Secrets are never committed to the repository and are rotated on
          any suspected exposure. Data in transit is encrypted with TLS;
          higher-sensitivity fields (SSO configuration, MFA secrets) get an
          additional layer of application-level encryption at rest. Every
          request body is validated at the boundary before it reaches
          business logic, and dependencies are scanned continuously for
          known vulnerabilities.
        </p>
        <p className="mt-4 max-w-2xl text-[13.5px] leading-[1.8] text-white/40">
          Have a specific security question? Reach us at{" "}
          <a href="mailto:security@clickbox.io" className="text-white underline underline-offset-2">
            security@clickbox.io
          </a>
          .
        </p>
      </Section>
    </MarketingPage>
  );
}
