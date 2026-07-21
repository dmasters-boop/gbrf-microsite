import Link from "next/link";
import Image from "next/image";
import { ACCOUNT } from "@/data/account";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  variant?: "home" | "act";
  stats?: { value: string; label: string }[];
}

export default function Hero({ eyebrow, headline, subheadline, ctaPrimary, ctaSecondary, variant = "act", stats }: HeroProps) {
  const isHome = variant === "home";
  const heroLayout = ACCOUNT.brand.heroLayout ?? "centered";
  const heroImage = ACCOUNT.brand.heroImage;

  // Act pages always use centered; only home page respects heroLayout
  const layout = isHome ? heroLayout : "centered";

  const bgDecoration = isHome ? (
    <>
      {heroImage ? (
        <>
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden
          />
          {/* Dark overlay + brand tint */}
          <div className="absolute inset-0 bg-[var(--brand-bg)]/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-bg)] via-[var(--brand-bg)]/40 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/20 via-[var(--brand-bg)] to-[var(--brand-bg)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-bg)] via-[var(--brand-bg)]/60 to-transparent" />
        </>
      )}
    </>
  ) : (
    <>
      <div className="absolute inset-0 bg-[var(--brand-bg)]" />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path d="M-100 380 Q200 220 500 300 Q800 380 1100 200 Q1300 100 1600 260" stroke="var(--brand-primary)" strokeWidth="200" strokeLinecap="round" fill="none" opacity="0.05"/>
        <path d="M-100 500 Q200 340 500 420 Q800 500 1100 320 Q1300 220 1600 380" stroke="var(--brand-primary)" strokeWidth="80" strokeLinecap="round" fill="none" opacity="0.03"/>
      </svg>
    </>
  );

  const ctaBlock = (ctaPrimary || ctaSecondary) && (
    <div className="hero-ctas flex flex-wrap gap-4">
      {ctaPrimary && (
        <Link
          href={ctaPrimary.href}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] font-bold text-base transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
          style={{ color: "white" }}
        >
          {ctaPrimary.label}
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      )}
      {ctaSecondary && (
        <Link
          href={ctaSecondary.href}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-[var(--brand-surface-border)] hover:border-[var(--brand-primary)] bg-transparent font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
          style={{ color: "var(--brand-text)" }}
        >
          {ctaSecondary.label}
        </Link>
      )}
    </div>
  );

  // ── Minimal — compact header, no decorative elements ─────────────────────
  if (layout === "minimal") {
    return (
      <section className="relative overflow-hidden">
        {bgDecoration}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
          {eyebrow && (
            <div className="hero-eyebrow mb-5">
              <span className="eyebrow-pill">{eyebrow}</span>
            </div>
          )}
          <h1
            className="hero-headline font-display font-black tracking-tight leading-[0.92] mb-5 max-w-3xl text-5xl sm:text-6xl"
            style={{ whiteSpace: "pre-line", color: "var(--brand-text-heading)" }}
          >
            {headline}
          </h1>
          <p className="hero-sub text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "var(--brand-text-muted)" }}>
            {subheadline}
          </p>
          {ctaBlock}
        </div>
      </section>
    );
  }

  // ── Split — text left, stat grid right ───────────────────────────────────
  if (layout === "split") {
    return (
      <section className="relative overflow-hidden min-h-[72vh] flex flex-col justify-center">
        {bgDecoration}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {eyebrow && (
                <div className="hero-eyebrow mb-6">
                  <span className="eyebrow-pill">{eyebrow}</span>
                </div>
              )}
              <h1
                className="hero-headline font-display font-black tracking-tight leading-[0.92] mb-6 text-5xl sm:text-6xl"
                style={{ whiteSpace: "pre-line", color: "var(--brand-text-heading)" }}
              >
                {headline}
              </h1>
              <p className="hero-sub text-xl leading-relaxed mb-10" style={{ color: "var(--brand-text-muted)" }}>
                {subheadline}
              </p>
              {ctaBlock}
            </div>

            {stats && stats.length > 0 && (
              <div className="hero-ctas grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[var(--brand-radius)] p-6 border"
                    style={{ background: "var(--brand-surface)", borderColor: "var(--brand-surface-border)" }}
                  >
                    <p className="font-display text-4xl font-black tabular-nums mb-2" style={{ color: "var(--brand-primary)" }}>
                      {stat.value}
                    </p>
                    <p className="text-sm leading-snug" style={{ color: "var(--brand-text-muted)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // ── Centered (default) ────────────────────────────────────────────────────
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex flex-col justify-end">
      {bgDecoration}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-28 w-full">
        {eyebrow && (
          <div className="hero-eyebrow mb-6">
            <span className="eyebrow-pill">{eyebrow}</span>
          </div>
        )}
        <h1
          className={`hero-headline font-display font-black tracking-tight leading-[0.92] mb-6 max-w-4xl ${isHome ? "text-7xl sm:text-[5.5rem]" : "text-6xl sm:text-7xl"}`}
          style={{ whiteSpace: "pre-line", color: "var(--brand-text-heading)" }}
        >
          {headline}
        </h1>
        <p className="hero-sub text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--brand-text-muted)" }}>
          {subheadline}
        </p>
        {ctaBlock}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--brand-bg), transparent)" }}
      />
    </section>
  );
}
