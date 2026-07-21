import { ACCOUNT } from "@/data/account";

interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowVariant?: "filled" | "outline";
  headline: string;
  subtext?: string;
  maxWidthClass?: string;
}

export default function SectionHeader({
  eyebrow,
  eyebrowVariant = "filled",
  headline,
  subtext,
  maxWidthClass = "max-w-2xl",
}: SectionHeaderProps) {
  const align = ACCOUNT.brand.headerAlign ?? "left";
  const isCentered = align === "center";

  return (
    <div className={`mb-12 ${isCentered ? "text-center mx-auto" : ""} ${maxWidthClass}`}>
      {eyebrow && (
        <div className="mb-5">
          {eyebrowVariant === "outline" ? (
            <span className="eyebrow-pill-outline">{eyebrow}</span>
          ) : (
            <span className="eyebrow-pill">{eyebrow}</span>
          )}
        </div>
      )}
      <h2
        className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-[0.95] mb-4"
        style={{ color: "var(--brand-text-heading)" }}
      >
        {headline}
      </h2>
      {subtext && (
        <p className="text-lg leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
          {subtext}
        </p>
      )}
    </div>
  );
}
