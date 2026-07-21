"use client";

// Lightweight, dependency-free SVG line chart — matches the project's hand-built
// SVG convention and brand palette. Highlights the "hero" series.

export interface ChartSeries {
  name: string;
  values: number[];
  hero?: boolean;
}

interface LineChartProps {
  title: string;
  series: ChartSeries[];
  xLabels: string[];
  yLabel?: string;
  maxY: number;
}

// Non-hero series colours — reef-palette accents that read on the dark canvas.
const SERIES_COLORS = ["rgba(255,255,255,0.38)", "#F5B841"];
const HERO_COLOR = "var(--brand-primary)";

function fmtAxis(v: number): string {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `$${Math.round(v / 1_000)}k`;
  return `$${v}`;
}

export default function LineChart({ title, series, xLabels, yLabel, maxY }: LineChartProps) {
  // viewBox coordinate space
  const W = 520;
  const H = 340;
  const padL = 58;
  const padR = 18;
  const padT = 20;
  const padB = 44;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const n = xLabels.length;
  const x = (i: number) => padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const y = (v: number) => padT + plotH - (Math.min(v, maxY) / maxY) * plotH;

  const gridLevels = 4; // → 5 lines including 0
  const ticks = Array.from({ length: gridLevels + 1 }, (_, k) => (maxY / gridLevels) * k);

  // Order non-hero colours consistently, hero always brand-primary.
  let nonHeroIdx = 0;
  const colored = series.map((s) => {
    if (s.hero) return { ...s, color: HERO_COLOR };
    const color = SERIES_COLORS[nonHeroIdx % SERIES_COLORS.length];
    nonHeroIdx += 1;
    return { ...s, color };
  });

  return (
    <div
      className="rounded-[var(--brand-radius)] border p-6 h-full flex flex-col"
      style={{ background: "var(--brand-card-bg)", borderColor: "var(--brand-card-border)", boxShadow: "var(--brand-card-shadow)" }}
    >
      <p className="font-display text-lg font-black mb-1 leading-tight" style={{ color: "var(--brand-text-heading)" }}>
        {title}
      </p>
      {yLabel && (
        <p className="text-[0.65rem] font-bold tracking-widest uppercase mb-4" style={{ color: "var(--brand-text-muted)" }}>
          {yLabel}
        </p>
      )}

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={title}>
        {/* Horizontal gridlines + Y labels */}
        {ticks.map((t, k) => (
          <g key={k}>
            <line
              x1={padL}
              y1={y(t)}
              x2={W - padR}
              y2={y(t)}
              stroke="var(--brand-surface-border)"
              strokeWidth={1}
            />
            <text
              x={padL - 8}
              y={y(t) + 3}
              textAnchor="end"
              fontSize="10"
              fill="var(--brand-text-muted)"
            >
              {fmtAxis(t)}
            </text>
          </g>
        ))}

        {/* X labels */}
        {xLabels.map((lbl, i) => (
          <text
            key={lbl}
            x={x(i)}
            y={H - padB + 20}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="var(--brand-text-muted)"
          >
            {lbl}
          </text>
        ))}

        {/* Non-hero series first, hero on top */}
        {colored
          .slice()
          .sort((a, b) => Number(a.hero) - Number(b.hero))
          .map((s) => {
            const pts = s.values.map((v, i) => `${x(i)},${y(v)}`).join(" ");
            return (
              <g key={s.name}>
                <polyline
                  points={pts}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={s.hero ? 3.5 : 1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={s.hero ? undefined : "0"}
                  opacity={s.hero ? 1 : 0.9}
                />
                {s.hero &&
                  s.values.map((v, i) => (
                    <circle key={i} cx={x(i)} cy={y(v)} r={4} fill={s.color} stroke="var(--brand-bg)" strokeWidth={1.5} />
                  ))}
              </g>
            );
          })}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
        {colored.map((s) => (
          <div key={s.name} className="flex items-center gap-2">
            <span
              className="inline-block rounded-full shrink-0"
              style={{
                width: s.hero ? 14 : 10,
                height: s.hero ? 4 : 3,
                background: s.color,
              }}
            />
            <span
              className="text-xs"
              style={{
                color: s.hero ? "var(--brand-primary)" : "var(--brand-text-muted)",
                fontWeight: s.hero ? 700 : 500,
              }}
            >
              {s.name}
              {s.hero && " — recommended"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
