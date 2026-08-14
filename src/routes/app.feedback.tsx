import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionHeader } from "@/components/soc/primitives";

export const Route = createFileRoute("/app/feedback")({
  component: FeedbackCenter,
  head: () => ({
    meta: [
      { title: "ClickBox · Feedback Center" },
      { name: "description", content: "Instructor feedback on investigation conclusions, evidence handling, and reporting." },
      { property: "og:title", content: "ClickBox · Feedback Center" },
      { property: "og:description", content: "Per-investigation instructor feedback and improvement guidance." },
    ],
  }),
});

const feedback = [
  {
    inv: "INV-3181",
    title: "Business Email Compromise",
    from: "Jonas Weber · SOC Manager",
    when: "18m ago",
    grade: 94,
    body:
      "Strong scoping. You identified the inbox rule before the supplier message went out, which is the pivot that matters. Next time attach the raw message trace rather than the summary view — graders need the header chain.",
  },
  {
    inv: "INV-3182",
    title: "Impossible Travel Investigation",
    from: "Priya Nair · Incident Responder",
    when: "2h ago",
    grade: 81,
    body:
      "Correct verdict, but the conditional-access evaluation was skipped. An MFA-satisfied sign-in from an unfamiliar ASN is not benign on its own; check the policy that allowed it before closing.",
  },
  {
    inv: "INV-3177",
    title: "Data Exfiltration to Cloud Account",
    from: "Marcus Chen · Threat Hunter",
    when: "yesterday",
    grade: 88,
    body:
      "Good use of the cloud audit trail. Your ATT&CK mapping listed T1537 but omitted the collection step that preceded it — map the full chain, not just the terminal technique.",
  },
];

function FeedbackCenter() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      <SectionHeader
        title="Feedback Center"
        description="Instructor review of your conclusions, evidence handling, and reporting quality."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {feedback.map((f) => (
          <Panel key={f.inv}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10.5px] text-muted-foreground">{f.inv}</span>
                  <span className="text-[13.5px] font-medium">{f.title}</span>
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  {f.from} · {f.when}
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold tabular-nums text-[color:var(--success)]">{f.grade}%</div>
                <div className="text-[10px] text-muted-foreground">graded</div>
              </div>
            </div>
            <p className="mt-3 border-t border-border pt-3 text-[12.5px] leading-relaxed text-secondary">{f.body}</p>
          </Panel>
        ))}
      </div>
    </div>
  );
}
