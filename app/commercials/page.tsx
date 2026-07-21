"use client";

import { useState } from "react";
import Link from "next/link";
import { ACCOUNT } from "@/data/account";
import Nav from "@/components/Nav";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import LineChart from "@/components/LineChart";

export default function CommercialsPage() {
  const { commercials, cta } = ACCOUNT;
  const { summary, callout, charts, accordions } = commercials;
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <div className="min-h-screen" style={{ background: "var(--brand-bg)" }}>
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[42vh] flex flex-col justify-end">
        <div className="absolute inset-0" style={{ background: "var(--brand-bg)" }} />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <circle cx="300" cy="120" r="300" fill="var(--brand-primary)" opacity="0.05" />
          <circle cx="1150" cy="340" r="250" fill="var(--brand-primary)" opacity="0.03" />
        </svg>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 w-full">
          <div className="hero-eyebrow mb-6">
            <span className="eyebrow-pill">Commercials</span>
          </div>
          <h1 className="hero-headline font-display text-5xl sm:text-6xl font-black tracking-tight leading-[0.92] mb-6" style={{ color: "var(--brand-text-heading)" }}>
            {commercials.heading}
          </h1>
          <p className="hero-sub text-lg leading-relaxed max-w-3xl" style={{ color: "var(--brand-text-muted)" }}>
            {commercials.intro}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, var(--brand-bg), transparent)" }} />
      </section>

      {/* Summary comparison table */}
      <section className="border-t" style={{ background: "var(--brand-section-alt)", borderColor: "var(--brand-surface-border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="mb-8">
              <span className="eyebrow-pill-outline">Scenario Comparison</span>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-[var(--brand-radius)] border overflow-hidden" style={{ borderColor: "var(--brand-surface-border)" }}>
              {/* Header */}
              <div className="hidden sm:grid grid-cols-[1.4fr_0.8fr_1.2fr_1fr_1.2fr] px-6 py-4" style={{ background: "var(--brand-surface)" }}>
                {summary.columns.map((c, i) => (
                  <p key={c} className={`text-[0.62rem] font-bold tracking-widest uppercase ${i >= 2 ? "text-right" : ""}`} style={{ color: i >= 2 ? "var(--brand-primary)" : "var(--brand-text-muted)" }}>
                    {c}
                  </p>
                ))}
              </div>
              {summary.rows.map((r, i) => (
                <div
                  key={`${r.scenario}-${r.edition}`}
                  className="grid grid-cols-2 sm:grid-cols-[1.4fr_0.8fr_1.2fr_1fr_1.2fr] px-6 py-4 gap-y-1 border-t items-center"
                  style={{
                    borderColor: "var(--brand-surface-border)",
                    background: r.gbrf ? "color-mix(in srgb, var(--brand-primary) 10%, transparent)" : i % 2 === 0 ? "var(--brand-bg)" : "var(--brand-section-alt)",
                  }}
                >
                  <p className="text-sm sm:text-base" style={{ color: "var(--brand-text-heading)", fontWeight: r.gbrf ? 800 : 600 }}>
                    {r.scenario}
                    {r.gbrf && <span className="ml-2 text-[0.6rem] font-bold tracking-widest uppercase align-middle" style={{ color: "var(--brand-primary)" }}>GBRF</span>}
                  </p>
                  <p className="text-sm" style={{ color: r.gbrf ? "var(--brand-primary)" : "var(--brand-text-muted)", fontWeight: r.gbrf ? 800 : 600 }}>
                    {r.edition}
                  </p>
                  <p className="text-sm sm:text-base sm:text-right tabular-nums" style={{ color: "var(--brand-text-heading)", fontWeight: r.gbrf ? 800 : 500 }}>
                    <span className="sm:hidden text-[0.6rem] font-bold tracking-widest uppercase mr-2" style={{ color: "var(--brand-text-muted)" }}>5-Yr</span>
                    {r.total}
                  </p>
                  <p className="text-sm sm:text-right tabular-nums" style={{ color: r.gbrf ? "var(--brand-text-heading)" : "var(--brand-text-muted)", fontWeight: r.gbrf ? 700 : 500 }}>
                    <span className="sm:hidden text-[0.6rem] font-bold tracking-widest uppercase mr-2" style={{ color: "var(--brand-text-muted)" }}>Yr 1</span>
                    {r.yr1}
                  </p>
                  <p className="text-sm sm:text-right tabular-nums" style={{ color: r.gbrf ? "var(--brand-text-heading)" : "var(--brand-text-muted)", fontWeight: r.gbrf ? 700 : 500 }}>
                    <span className="sm:hidden text-[0.6rem] font-bold tracking-widest uppercase mr-2" style={{ color: "var(--brand-text-muted)" }}>Yr 2–5</span>
                    {r.yr25}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: "var(--brand-text-muted)", opacity: 0.7 }}>{summary.note}</p>
          </FadeIn>
        </div>
      </section>

      {/* GBRF hero callout */}
      <section className="border-t" style={{ background: "var(--brand-bg)", borderColor: "var(--brand-surface-border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeIn>
            <div
              className="rounded-[var(--brand-radius)] p-8 sm:p-10 border"
              style={{
                background: "color-mix(in srgb, var(--brand-primary) 10%, var(--brand-card-bg))",
                borderColor: "color-mix(in srgb, var(--brand-primary) 35%, transparent)",
                boxShadow: "0 8px 30px color-mix(in srgb, var(--brand-primary) 15%, transparent)",
              }}
            >
              <p className="text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: "var(--brand-primary)" }}>
                Recommended for GBRF
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-black leading-tight mb-6 max-w-3xl" style={{ color: "var(--brand-text-heading)" }}>
                {callout.heading}
              </h2>
              <ul className="space-y-4">
                {callout.points.map((p, pi) => (
                  <div key={p} className="contents">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: "var(--brand-primary)" }} />
                      <p className="text-base leading-relaxed" style={{ color: "var(--brand-text)" }}>{p}</p>
                    </li>
                    {/* Value highlight — immediately after the UE 5-year bullet (index 1) */}
                    {pi === 1 && "valueNote" in callout && callout.valueNote && (
                      <li className="list-none">
                        <div
                          className="rounded-[var(--brand-radius)] px-5 py-4 border-l-4"
                          style={{
                            background: "color-mix(in srgb, var(--brand-primary) 16%, var(--brand-bg))",
                            borderColor: "var(--brand-primary)",
                          }}
                        >
                          {"valueBadge" in callout && callout.valueBadge && (
                            <span
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-2 text-[0.6rem] font-black tracking-[0.14em] uppercase"
                              style={{ background: "var(--brand-primary)", color: "var(--brand-text-on-primary)" }}
                            >
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                                <path d="M6 1l1.5 3.2L11 4.7 8.3 7.1 9 10.5 6 8.8 3 10.5l.7-3.4L1 4.7l3.5-.5L6 1z" fill="currentColor" />
                              </svg>
                              {callout.valueBadge}
                            </span>
                          )}
                          <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--brand-text)" }}>
                            {callout.valueNote}
                          </p>
                        </div>
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Line charts — side by side on desktop, stacked on mobile */}
      <section className="border-t" style={{ background: "var(--brand-section-alt)", borderColor: "var(--brand-surface-border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="mb-8">
              <span className="eyebrow-pill-outline">Annual Cost by Year</span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--brand-density-gap)" }}>
            <FadeIn>
              <LineChart
                title={charts.ee.title}
                series={charts.ee.series}
                xLabels={charts.xLabels}
                yLabel={charts.yLabel}
                maxY={charts.maxY}
              />
            </FadeIn>
            <FadeIn delay={100}>
              <LineChart
                title={charts.ue.title}
                series={charts.ue.series}
                xLabels={charts.xLabels}
                yLabel={charts.yLabel}
                maxY={charts.maxY}
              />
            </FadeIn>
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--brand-text-muted)", opacity: 0.7 }}>
            Both charts share a common scale for direct comparison. All figures AUD, ex-tax.
          </p>
        </div>
      </section>

      {/* Detail accordions */}
      <section className="border-t" style={{ background: "var(--brand-bg)", borderColor: "var(--brand-surface-border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="mb-8">
              <span className="eyebrow-pill-outline">The Detail</span>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {accordions.map((a, i) => {
              const isOpen = !!open[a.id];
              return (
                <FadeIn key={a.id} delay={i * 60}>
                  <div className={`rounded-[var(--brand-radius)] border transition-all duration-300 ${isOpen ? "border-[var(--brand-primary)]/40" : ""}`} style={{ borderColor: isOpen ? undefined : "var(--brand-card-border)", background: "var(--brand-card-bg)" }}>
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                      onClick={() => toggle(a.id)}
                      aria-expanded={isOpen}
                    >
                      <div>
                        <p className="font-display text-lg font-black leading-tight" style={{ color: "var(--brand-text-heading)" }}>{a.title}</p>
                        {"summary" in a && a.summary && (
                          <p className="text-xs mt-1" style={{ color: "var(--brand-primary)" }}>{a.summary}</p>
                        )}
                      </div>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} style={{ borderColor: "var(--brand-surface-border)" }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M2 4l4 4 4-4" stroke="var(--brand-text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 border-t pt-5" style={{ borderColor: "var(--brand-surface-border)" }}>
                        {/* Intro (phasing) */}
                        {"intro" in a && a.intro && (
                          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--brand-text-muted)" }}>{a.intro}</p>
                        )}

                        {/* Quote line-items table */}
                        {"lineItems" in a && a.lineItems && (
                          <div className="overflow-x-auto">
                            <div className="min-w-[560px]">
                              <div className="grid grid-cols-[2fr_1.4fr_0.6fr_1fr] px-4 py-2.5 rounded-lg" style={{ background: "var(--brand-surface)" }}>
                                {["Product", "Term", "Qty", "Total (ex-tax)"].map((h, hi) => (
                                  <p key={h} className={`text-[0.6rem] font-bold tracking-widest uppercase ${hi === 3 ? "text-right" : hi === 2 ? "text-right" : ""}`} style={{ color: "var(--brand-text-muted)" }}>{h}</p>
                                ))}
                              </div>
                              {a.lineItems.map((li, li_i) => {
                                const inc = "included" in li && (li as { included?: boolean }).included;
                                return (
                                  <div
                                    key={li_i}
                                    className="grid grid-cols-[2fr_1.4fr_0.6fr_1fr] px-4 py-2.5 border-b items-center"
                                    style={{ borderColor: "var(--brand-surface-border)", background: inc ? "color-mix(in srgb, var(--brand-primary) 8%, transparent)" : undefined }}
                                  >
                                    <p className="text-sm flex items-center gap-2" style={{ color: "var(--brand-text-heading)" }}>
                                      {li.product}
                                      {inc && (
                                        <span className="text-[0.55rem] font-black tracking-[0.12em] uppercase px-1.5 py-0.5 rounded" style={{ background: "color-mix(in srgb, var(--brand-primary) 20%, transparent)", color: "var(--brand-primary)" }}>
                                          UE Standard
                                        </span>
                                      )}
                                    </p>
                                    <p className="text-xs" style={{ color: "var(--brand-text-muted)" }}>{li.term}</p>
                                    <p className="text-sm text-right tabular-nums" style={{ color: "var(--brand-text-muted)" }}>{li.qty}</p>
                                    {inc ? (
                                      <p className="text-right tabular-nums flex items-baseline justify-end gap-1.5">
                                        <span className="text-xs font-bold" style={{ color: "var(--brand-primary)" }}>Included</span>
                                        <span className="text-sm" style={{ color: "var(--brand-text-muted)" }}>· $0</span>
                                      </p>
                                    ) : (
                                      <p className="text-sm text-right tabular-nums" style={{ color: "var(--brand-text-heading)", fontWeight: 600 }}>{li.total}</p>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Annual schedule strip */}
                        {"schedule" in a && a.schedule && (
                          <div className="mt-5">
                            <p className="text-[0.6rem] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--brand-text-muted)" }}>Annual Schedule</p>
                            <div className="flex flex-wrap gap-2">
                              {a.schedule.years.map((yv, yi) => (
                                <div key={yi} className="rounded-lg px-4 py-2 border" style={{ borderColor: "var(--brand-surface-border)", background: "var(--brand-surface)" }}>
                                  <span className="text-[0.6rem] font-bold tracking-widest uppercase mr-2" style={{ color: "var(--brand-text-muted)" }}>Yr {yi + 1}</span>
                                  <span className="text-sm tabular-nums" style={{ color: "var(--brand-text-heading)", fontWeight: 600 }}>{yv}</span>
                                </div>
                              ))}
                              <div className="rounded-lg px-4 py-2 border" style={{ borderColor: "color-mix(in srgb, var(--brand-primary) 35%, transparent)", background: "color-mix(in srgb, var(--brand-primary) 12%, transparent)" }}>
                                <span className="text-[0.6rem] font-bold tracking-widest uppercase mr-2" style={{ color: "var(--brand-primary)" }}>Total</span>
                                <span className="text-sm tabular-nums font-black" style={{ color: "var(--brand-text-heading)" }}>{a.schedule.total}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Renewal Protection note — after the schedule */}
                        {"renewal" in a && a.renewal && (
                          <div
                            className="mt-5 rounded-lg px-4 py-3 border-l-2 flex items-start gap-2.5"
                            style={{ background: "var(--brand-surface)", borderColor: "var(--brand-primary)" }}
                          >
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden>
                              <path d="M8 1.5l5 2v4c0 3.2-2.1 5.5-5 7-2.9-1.5-5-3.8-5-7v-4l5-2z" stroke="var(--brand-primary)" strokeWidth="1.3" strokeLinejoin="round" />
                            </svg>
                            <div>
                              <p className="text-[0.6rem] font-bold tracking-widest uppercase mb-1" style={{ color: "var(--brand-primary)" }}>Renewal Protection</p>
                              <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>{a.renewal}</p>
                            </div>
                          </div>
                        )}

                        {/* Simple bullet list (What's Included) */}
                        {"items" in a && a.items && (
                          <ul className="space-y-3">
                            {a.items.map((it) => (
                              <li key={it} className="flex items-start gap-3">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden>
                                  <circle cx="8" cy="8" r="7" fill="var(--brand-primary)" fillOpacity="0.12" />
                                  <path d="M5 8.5l2 2 4-4" stroke="var(--brand-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>{it}</p>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Phasing table */}
                        {"phasing" in a && a.phasing && (
                          <div className="overflow-x-auto">
                            <div className="min-w-[560px]">
                              <div className="grid grid-cols-[1.6fr_1fr_1fr_1.2fr_1.1fr] px-4 py-2.5 rounded-lg" style={{ background: "var(--brand-surface)" }}>
                                {a.phasing.columns.map((h, hi) => (
                                  <p key={h} className={`text-[0.6rem] font-bold tracking-widest uppercase ${hi >= 2 ? "text-right" : ""}`} style={{ color: "var(--brand-text-muted)" }}>{h}</p>
                                ))}
                              </div>
                              {a.phasing.rows.map((pr, pri) => (
                                <div key={pri} className="grid grid-cols-[1.6fr_1fr_1fr_1.2fr_1.1fr] px-4 py-2.5 border-b items-center" style={{ borderColor: "var(--brand-surface-border)" }}>
                                  <p className="text-sm" style={{ color: "var(--brand-text-heading)", fontWeight: 600 }}>{pr.phase}</p>
                                  <p className="text-sm" style={{ color: "var(--brand-text-muted)" }}>{pr.goLive}</p>
                                  <p className="text-sm text-right tabular-nums" style={{ color: "var(--brand-text-muted)" }}>{pr.newUsers}</p>
                                  <p className="text-sm text-right tabular-nums" style={{ color: "var(--brand-text-muted)" }}>{pr.cumulative}</p>
                                  <p className="text-sm text-right tabular-nums" style={{ color: "var(--brand-text-heading)", fontWeight: 600 }}>{pr.licences}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-link to closing CTA / pilot */}
      <section className="border-t" style={{ background: "var(--brand-section-alt)", borderColor: "var(--brand-surface-border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] uppercase mb-2" style={{ color: "var(--brand-text-muted)" }}>Up Next</p>
            <p className="font-display text-2xl font-black leading-tight" style={{ color: "var(--brand-text-heading)" }}>{cta.secondary.label}</p>
          </div>
          <Link href={cta.secondary.href} className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] font-bold text-base transition-all duration-200 hover:-translate-y-0.5" style={{ color: "var(--brand-text-on-primary)" }}>
            {cta.secondary.label}
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
