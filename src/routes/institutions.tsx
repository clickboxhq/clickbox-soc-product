import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, FileText, Users, Wrench } from "lucide-react";

import { MarketingPage, Section } from "@/components/soc/marketing/page-shell";
import { Reveal, SectionHead, displayFont, monoFont } from "@/components/soc/marketing/atmos";

export const Route = createFileRoute("/institutions")({
  component: InstitutionsPage,
  head: () => ({
    meta: [
      { title: "For Organizations — ThreatLens by ClickBox" },
      {
        name: "description",
        content:
          "Universities, bootcamps, enterprises, government agencies, MSSPs, and workforce development programs — cohort-based SOC investigation training.",
      },
    ],
  }),
});

const SEGMENTS = [
  { t: "Universities & bootcamps", b: "Cybersecurity programs that need hands-on labs, not another slide deck." },
  { t: "Enterprises", b: "Onboarding new hires or leveling up junior analysts, at their own pace." },
  { t: "Government agencies", b: "Workforce-ready SOC training without standing up a live range." },
  { t: "Workforce development programs", b: "Measurable outcomes for public and nonprofit training initiatives." },
  { t: "Training providers & MSSPs", b: "A lab component you don't have to build or maintain yourselves." },
  { t: "Accelerators & incubators", b: "Practical security training as part of a founder or cohort curriculum." },
];

const FEATURES = [
  { icon: Users, name: "Cohorts & rosters", body: "Group learners, assign scenario sets, track deadlines." },
  { icon: Wrench, name: "Instructor tools", body: "Grading overrides, reopen-with-feedback, scenario builder." },
  { icon: BarChart3, name: "Training analytics", body: "Cohort comparison, technique mastery heatmaps, MTTR-equivalent." },
  { icon: FileText, name: "Reporting & certificates", body: "Exportable reports per learner and per cohort, verifiable certificates." },
];

function InstitutionsPage() {
  return (
    <MarketingPage>
      <Section tone="dark" className="!py-20 md:!py-28 text-center">
        <Reveal>
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60 backdrop-blur"
            style={monoFont}
          >
            For organizations
          </div>
        </Reveal>
        <Reveal delay={70}>
          <h1
            className="mx-auto mt-5 max-w-2xl text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]"
            style={displayFont}
          >
            A lab component you don't have to build yourselves.
          </h1>
        </Reveal>
        <Reveal delay={130}>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-white/55">
            Cohort rostering, instructor tools, and reporting — for programs
            that need to prove the training actually worked.
          </p>
        </Reveal>
        <Reveal delay={190}>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:hello@clickbox.io" className="btn-primary w-full sm:w-auto">
              Book a demo <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </Section>

      <Section tone="light">
        <SectionHead tone="light" eyebrow="Who this is for" title="Every kind of training program." />
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/8 bg-black/[0.04] md:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((s) => (
            <div key={s.t} className="bg-white p-6">
              <h3 className="text-[15px] font-semibold text-[#0A0C0F]" style={displayFont}>{s.t}</h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-black/55">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead eyebrow="What you get" title="Everything a program needs to run at scale." />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.name} delay={i * 60}>
              <div className="h-full rounded-xl border border-white/8 bg-[#080B0F] p-5">
                <div className="flex size-9 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] text-white/85">
                  <f.icon className="size-[18px]" />
                </div>
                <h3 className="mt-3.5 text-[14px] font-semibold text-white" style={displayFont}>{f.name}</h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-white/55">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light" className="text-center">
        <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-[#0A0C0F] md:text-[34px]" style={displayFont}>
          Running the cohort yourself?
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/instructors" className="btn-primary w-full sm:w-auto">
            For instructors <ArrowRight className="size-4" />
          </Link>
          <a href="mailto:hello@clickbox.io" className="btn-ghost-light w-full sm:w-auto">
            Book a demo
          </a>
        </div>
      </Section>
    </MarketingPage>
  );
}
