import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  FileSearch,
  Gavel,
  Laptop,
  Lightbulb,
  NotebookPen,
  ScrollText,
} from "lucide-react";

import { Mark, BrandLockup } from "@/components/soc/marketing/brand";
import { displayFont, monoFont } from "@/components/soc/marketing/atmos";
import { useSoc } from "@/lib/store";

export const Route = createFileRoute("/welcome")({
  component: WelcomePage,
  head: () => ({
    meta: [
      { title: "Welcome — ThreatLens" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

const STEPS = [
  { icon: FileSearch, label: "Review the evidence" },
  { icon: Lightbulb, label: "Investigate the signals" },
  { icon: ScrollText, label: "Build the timeline" },
  { icon: NotebookPen, label: "Form your findings" },
  { icon: Gavel, label: "Submit your verdict" },
  { icon: BarChart3, label: "Receive your score" },
];

function WelcomePage() {
  const navigate = useNavigate();
  const completeOnboarding = useSoc((s) => s.completeOnboarding);
  const onboardingCompleted = useSoc((s) => s.onboardingCompleted);

  // Returning users who somehow land back here (bookmark, back-button) skip straight through.
  useEffect(() => {
    if (onboardingCompleted) navigate({ to: "/app" });
  }, [onboardingCompleted, navigate]);

  const enter = () => {
    completeOnboarding();
    navigate({ to: "/app" });
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-black px-6 py-12 text-[#EDEDED]">
      <Link to="/" className="flex items-center gap-2.5" style={displayFont}>
        <Mark />
        <BrandLockup />
      </Link>

      <div className="flex flex-1 items-center">
        <div className="w-full max-w-lg">
          <div
            className="text-center text-[11px] uppercase tracking-[0.2em] text-white/40"
            style={monoFont}
          >
            You're in
          </div>
          <h1
            className="mt-4 text-center text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-white md:text-[36px]"
            style={displayFont}
          >
            Welcome to ThreatLens
          </h1>
          <p className="mt-2 text-center text-[14px] text-white/50">
            Real incidents. Real investigation. Real skills.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/85">
                <Laptop className="size-4" />
              </div>
              <div>
                <div className="text-[13.5px] font-semibold text-white">
                  Recommended: desktop or laptop
                </div>
                <p className="mt-1 text-[12.5px] leading-[1.65] text-white/50">
                  ThreatLens is built around detailed investigation
                  workflows, evidence timelines, and analyst workspaces.
                  The platform is responsive, but you'll get the best
                  investigation experience on a larger screen.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/35" style={monoFont}>
              What you'll do
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {STEPS.map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/8 bg-white/[0.02] p-3"
                >
                  <div className="flex items-center gap-2">
                    <s.icon className="size-3.5 text-white/50" />
                    <span className="text-[10px] text-white/35" style={monoFont}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-1.5 text-[12px] leading-[1.4] text-white/75">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={enter}
            className="btn-primary mt-9 w-full justify-center py-3"
          >
            Continue to ThreatLens <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
