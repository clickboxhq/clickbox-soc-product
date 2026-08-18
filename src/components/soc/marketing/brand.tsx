/** The ClickBox / ThreatLens mark. */
export function Mark({ className = "size-7" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[7px] bg-black ${className}`}
    >
      <img
        src="/brand-mark.png"
        alt="ClickBox"
        className="size-full object-cover"
        draggable={false}
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
