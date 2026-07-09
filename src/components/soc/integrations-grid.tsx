const INTEGRATIONS: {
  name: string;
  slug: string;
  color: string;
  soon?: boolean;
}[] = [
  { name: "Microsoft", slug: "microsoft", color: "F25022" },
  { name: "Google Workspace", slug: "googleworkspace", color: "4285F4" },
  { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
  { name: "Azure", slug: "microsoftazure", color: "0078D4" },
  { name: "Okta", slug: "okta", color: "007DC1" },
  { name: "Slack", slug: "slack", color: "4A154B" },
  { name: "CrowdStrike", slug: "crowdstrike", color: "FF0000" },
  { name: "SentinelOne", slug: "sentinelone", color: "6B0AEA", soon: true },
  { name: "Splunk", slug: "splunk", color: "000000" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
];

export function IntegrationsGrid() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#16c784" }}
        >
          Integrations
        </div>
        <h2
          className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[44px]"
          style={{ fontFamily: 'Geist, "Inter", system-ui, sans-serif' }}
        >
          Works with what you already have.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {INTEGRATIONS.map((i) => (
          <div
            key={i.name}
            className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-8 text-center backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-[0_18px_60px_-20px_rgba(22,199,132,0.35)]"
          >
            <div className="relative flex h-10 w-24 items-center justify-center">
              {/* monochrome default */}
              <img
                src={`https://cdn.simpleicons.org/${i.slug}/ffffff`}
                alt={i.name}
                loading="lazy"
                className="max-h-10 max-w-full object-contain opacity-55 transition-opacity duration-200 group-hover:opacity-0"
                style={{ filter: "grayscale(1)" }}
              />
              {/* full color on hover */}
              <img
                src={`https://cdn.simpleicons.org/${i.slug}/${i.color}`}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 m-auto max-h-10 max-w-full object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span
                className="text-[12px] font-medium text-white/70 transition-colors group-hover:text-white"
                style={{ fontFamily: 'Geist, "Inter", system-ui, sans-serif' }}
              >
                {i.name}
              </span>
              {i.soon && (
                <span
                  className="text-[9.5px] uppercase tracking-[0.14em] text-white/40"
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  Coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
