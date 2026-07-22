import Link from "next/link";
import { ACCOUNT } from "@/data/account";

const allFooterLinks = [
  { href: "/",               slug: "overview",      label: "Overview" },
  { href: "/business-case",  slug: "business-case", label: "Business Case" },
  { href: "/strategy",       slug: "strategy",      label: "Strategy" },
  { href: "/commercials",    slug: "commercials",   label: "Commercials" },
  { href: "/proof",          slug: "proof",         label: "Results" },
  { href: "/account-team",   slug: "account-team",  label: "Account Team" },
];

const footerLinks = allFooterLinks.filter(
  ({ slug }) => slug === "overview" || ACCOUNT.pages.includes(slug)
);

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: "var(--brand-bg)", borderColor: "var(--brand-surface-border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6">
        <div className="flex flex-wrap gap-1">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:bg-[var(--brand-surface)]"
              style={{ color: "var(--brand-text-muted)", opacity: 0.65 }}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4" style={{ borderTop: "1px solid var(--brand-surface-border)" }}>
          <p className="font-display text-sm font-black" style={{ color: "var(--brand-text-muted)", opacity: 0.5 }}>{ACCOUNT.company}</p>
          <p className="text-[0.6rem] font-bold tracking-widest uppercase" style={{ color: "var(--brand-text-muted)", opacity: 0.3 }}>
            Prepared by the Salesforce Account Team
          </p>
        </div>
      </div>
    </footer>
  );
}
