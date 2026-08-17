import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Gauge,
  ListTree,
  NotebookPen,
  ShieldQuestion,
} from "lucide-react";

import { MarketingPage, Section } from "@/components/soc/marketing/page-shell";
import { InvestigationWorkspace } from "@/components/soc/marketing/demos";
import { Schematic } from "@/components/soc/marketing/art";
import { Reveal, SectionHead, displayFont, monoFont } from "@/components/soc/marketing/atmos";

export const Route = createFileRoute("/investigations")({
  component: InvestigationsPage,
  head: () => ({
    meta: [
      { title: "Investigations — ThreatLens by ClickBox" },
      {
        name: "description",
        content:
          "Evidence review, hypotheses, notes, timeline, and findings — a walk through what actually happens when you investigate a case in ThreatLens.",
      },
    ],
  }),
});

const STAGES = [
  { icon: FileSearch, title: "Evidence review", body: "Work the alert timeline across identity, endpoint, email, and cloud. Pin what matters — nothing is pre-selected for you." },
  { icon: ShieldQuestion, title: "Hypotheses", body: "Form a theory of what happened, then look for evidence that would prove it wrong. Decoys are seeded on purpose." },
  { icon: NotebookPen, title: "Notes", body: "Write your reasoning as you go. Your case notes are what gets graded, alongside your evidence." },
  { icon: ListTree, title: "Timeline", body: "Assemble the events you've pinned into an ordered narrative — the story of the incident, in your words." },
  { icon: CheckCircle2, title: "Findings & verdict", body: "Call it: true positive, false positive, or benign. State the required response actions for the case." },
  { icon: Gauge, title: "Scoring", body: "Graded against a hidden ground truth — see the full rubric." },
];

function InvestigationsPage() {
  return (
    <MarketingPage>
      <Section tone="dark" className="!py-20 md:!py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Schematic opacity={0.3} />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60 backdrop-blur"
              style={monoFont}
            >
              How it actually works
            </div>
          </Reveal>
          <Reveal delay={70}>
            <h1
              className="mt-5 text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]"
              style={displayFont}
            >
              An investigation is six things you do. None of them are automated.
            </h1>
          </Reveal>
          <Reveal delay={130}>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-white/55">
              Review evidence, form a hypothesis, write your notes, build the
              timeline, call your verdict — then get scored on all of it, not
              just whether the answer matches.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="h-full glass-card-dark p-5">
                <div className="icon-frame-dark text-white/85">
                  <s.icon className="size-[18px]" />
                </div>
                <h3 className="mt-3.5 text-[14px] font-semibold text-white" style={displayFont}>
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-white/55">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead
          eyebrow="Evidence review"
          title="The workspace, not a screenshot of one."
          sub="This is the same console you'll work a live case in — timeline, evidence, and your notes, side by side."
        />
        <Reveal className="mt-12">
          <InvestigationWorkspace />
        </Reveal>
      </Section>

      <Section tone="light" className="text-center">
        <h2
          className="text-[26px] font-semibold tracking-[-0.02em] text-[#0A0C0F] md:text-[34px]"
          style={displayFont}
        >
          Want to see how it's graded?
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/scoring" className="btn-primary w-full sm:w-auto">
            See the scoring rubric <ArrowRight className="size-4" />
          </Link>
          <Link to="/signup" className="btn-ghost-light w-full sm:w-auto">
            Get started — free
          </Link>
        </div>
      </Section>
    </MarketingPage>
  );
}
