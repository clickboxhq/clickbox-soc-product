import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { MarketingPage, Section } from "@/components/soc/marketing/page-shell";
import { CorrelationEngine } from "@/components/soc/marketing/demos";
import { Correlation } from "@/components/soc/marketing/narrative";
import { Reveal, SectionHead, displayFont, monoFont } from "@/components/soc/marketing/atmos";

export const Route = createFileRoute("/correlation")({
  component: CorrelationPage,
  head: () => ({
    meta: [
      { title: "Correlation — ThreatLens by ClickBox" },
      {
        name: "description",
        content:
          "Isolated signals become one attack path only once you join them. Practice reading the evidence graph in ThreatLens.",
      },
    ],
  }),
});

function CorrelationPage() {
  return (
    <MarketingPage>
      <Section tone="dark" className="!py-20 md:!py-28 text-center">
        <Reveal>
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60 backdrop-blur"
            style={monoFont}
          >
            Reading the graph
          </div>
        </Reveal>
        <Reveal delay={70}>
          <h1
            className="mx-auto mt-5 max-w-2xl text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]"
            style={displayFont}
          >
            Isolated signals become one attack path — once you join them.
          </h1>
        </Reveal>
      </Section>

      <Section tone="dark">
        <Correlation />
      </Section>

      <Section tone="dark">
        <SectionHead
          eyebrow="Correlation practice"
          title="The graph is real. The connecting is yours."
          sub="Identity, endpoint, email, cloud and network events sit there until you connect them. Learn to read the graph, not just the alert list — that's the actual job."
        />
        <Reveal className="mt-14">
          <CorrelationEngine />
        </Reveal>
      </Section>

      <Section tone="light" className="text-center">
        <h2
          className="text-[26px] font-semibold tracking-[-0.02em] text-[#0A0C0F] md:text-[34px]"
          style={displayFont}
        >
          See how a full case comes together.
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/investigations" className="btn-primary w-full sm:w-auto">
            The investigation workflow <ArrowRight className="size-4" />
          </Link>
          <Link to="/signup" className="btn-ghost-light w-full sm:w-auto">
            Get started — free
          </Link>
        </div>
      </Section>
    </MarketingPage>
  );
}
