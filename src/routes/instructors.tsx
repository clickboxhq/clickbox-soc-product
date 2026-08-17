import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BookOpen, ClipboardCheck, MessageSquare, Presentation, Users } from "lucide-react";

import { MarketingPage, Section } from "@/components/soc/marketing/page-shell";
import { ExecutiveDashboard } from "@/components/soc/marketing/demos";
import { Reveal, SectionHead, displayFont, monoFont } from "@/components/soc/marketing/atmos";

export const Route = createFileRoute("/instructors")({
  component: InstructorsPage,
  head: () => ({
    meta: [
      { title: "For Instructors — ThreatLens by ClickBox" },
      {
        name: "description",
        content:
          "Rosters, grading overrides, scenario assignment, and cohort progress — the instructor side of ThreatLens.",
      },
    ],
  }),
});

const FEATURES = [
  { icon: Users, name: "Cohort roster", body: "Every learner's status, at a glance — who's stuck, who's ahead." },
  { icon: Presentation, name: "Scenario assignment", body: "Assign scenario sets and deadlines per cohort or per learner." },
  { icon: ClipboardCheck, name: "Grading overrides", body: "Reopen a case with feedback, override a score, keep a history of both." },
  { icon: MessageSquare, name: "Feedback loop", body: "Leave notes on a submission the learner sees the moment they reopen it." },
];

const CODE_SAMPLES: Record<string, string> = {
  REST: `curl https://api.clickbox.io/v1/cohorts/bootcamp-2026/progress \\
  -H "Authorization: Bearer $CLICKBOX_KEY"`,
  Python: `from clickbox import ClickBox

cb = ClickBox(api_key=os.environ["CLICKBOX_KEY"])

progress = cb.cohorts.progress("bootcamp-2026")

print(progress.average_score)   # cohort-wide case score
print(progress.roster)          # per-student breakdown`,
  Node: `import { ClickBox } from "@clickbox/sdk";

const cb = new ClickBox({ apiKey: process.env.CLICKBOX_KEY });

const progress = await cb.cohorts.progress("bootcamp-2026");

console.log(progress.averageScore);  // cohort-wide case score
console.log(progress.roster);        // per-student breakdown`,
};

function InstructorsPage() {
  const [tab, setTab] = useState<keyof typeof CODE_SAMPLES>("REST");
  return (
    <MarketingPage>
      <Section tone="dark" className="!py-20 md:!py-28 text-center">
        <Reveal>
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60 backdrop-blur"
            style={monoFont}
          >
            For instructors
          </div>
        </Reveal>
        <Reveal delay={70}>
          <h1
            className="mx-auto mt-5 max-w-2xl text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]"
            style={displayFont}
          >
            Run a cohort without running a spreadsheet.
          </h1>
        </Reveal>
      </Section>

      <Section tone="light">
        <SectionHead tone="light" eyebrow="Instructor tools" title="Everything you need to run a course, built in." />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.name} delay={i * 60}>
              <div className="h-full glass-card-dark p-5">
                <div className="icon-frame-dark text-white/85">
                  <f.icon className="size-[18px]" />
                </div>
                <h3 className="mt-3.5 text-[14px] font-semibold text-white" style={displayFont}>{f.name}</h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-white/55">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead
          eyebrow="Progress & instructor dashboard"
          title="A whole cohort's progress, at a glance."
          sub="Score trend, technique mastery, and case history — for one learner, or a whole cohort."
        />
        <Reveal className="mt-14">
          <ExecutiveDashboard />
        </Reveal>
      </Section>

      <Section tone="light">
        <SectionHead
          tone="light"
          eyebrow="For instructors"
          title="Rosters and grades — via API too."
          sub="Sync a roster, pull cohort progress into your LMS gradebook, or export certificates. Every instructor action in the console is also an API call."
        />
        <Reveal className="mt-10 overflow-hidden rounded-xl border border-black/8 bg-black/[0.02]">
          <div className="flex items-center gap-1 border-b border-black/8 px-2 py-1.5">
            {(Object.keys(CODE_SAMPLES) as (keyof typeof CODE_SAMPLES)[]).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className="rounded-md px-3 py-1 text-[12px] font-medium transition-colors"
                style={{
                  color: tab === k ? "#0A0C0F" : "rgba(10,12,15,0.5)",
                  background: tab === k ? "rgba(10,12,15,0.08)" : "transparent",
                }}
              >
                {k}
              </button>
            ))}
            <span className="ml-auto flex items-center gap-1.5 rounded-md px-3 py-1 text-[12px] text-black/45">
              <BookOpen className="size-3.5" /> Docs coming soon
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-[12.5px] leading-[1.7] text-black/80" style={monoFont}>
            <code>{CODE_SAMPLES[tab]}</code>
          </pre>
        </Reveal>
      </Section>

      <Section tone="dark" className="text-center">
        <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-white md:text-[34px]" style={displayFont}>
          Setting this up for your program?
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="mailto:hello@clickbox.io" className="btn-primary w-full sm:w-auto">
            Book a demo <ArrowRight className="size-4" />
          </a>
          <Link to="/institutions" className="btn-ghost w-full sm:w-auto">
            For organizations
          </Link>
        </div>
      </Section>
    </MarketingPage>
  );
}
