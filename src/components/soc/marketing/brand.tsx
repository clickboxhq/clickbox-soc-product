import { useId } from "react";
import { MousePointer2 } from "lucide-react";

/** The ClickBox mark — a cursor, filled and beveled like glass. */
export function Mark({ className = "size-7" }: { className?: string }) {
  const gradientId = `mark-gradient-${useId()}`;
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[7px] bg-black ${className}`}
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#C7CDD4" />
          </linearGradient>
        </defs>
      </svg>
      <MousePointer2
        className="size-[62%] -translate-x-px translate-y-px"
        style={{
          fill: `url(#${gradientId})`,
          stroke: "rgba(255,255,255,0.9)",
          strokeWidth: 1.5,
          strokeLinejoin: "round",
        }}
      />
    </span>
  );
}

/** Nav/footer wordmark lockup: "ClickBox | ThreatLens". */
export function BrandLockup({ size = "nav" }: { size?: "nav" | "footer" }) {
  const big = size === "nav";
  return (
    <span
      className={`flex items-center gap-2 font-semibold tracking-[-0.02em] ${big ? "text-[15px] gap-2.5" : "text-[14px] gap-1.5"}`}
    >
      ClickBox
      <span className={`${big ? "h-3.5" : "h-3"} w-px bg-white/15`} aria-hidden />
      <span className="font-normal text-white/70">ThreatLens</span>
    </span>
  );
}
