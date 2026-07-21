import type { Metadata } from "next";
import { ACCOUNT } from "@/data/account";
import Nav from "@/components/Nav";
import AccountTeam from "@/components/AccountTeam";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Account Team",
};

export default function AccountTeamPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--brand-bg)" }}>
      <Nav />

      {/* Hero with brand gradient */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 10% 0%, color-mix(in srgb, var(--brand-primary) 22%, transparent) 0%, transparent 70%)",
              "radial-gradient(ellipse 50% 40% at 90% 100%, color-mix(in srgb, var(--brand-primary) 10%, transparent) 0%, transparent 70%)",
            ].join(", "),
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
          <div className="mb-5">
            <span className="eyebrow-pill">Salesforce Account Team</span>
          </div>
          <h1
            className="font-display text-5xl sm:text-6xl font-black tracking-tight leading-[0.92] mb-4 max-w-2xl"
            style={{ color: "var(--brand-text-heading)" }}
          >
            Your Salesforce team.
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
            Key contacts across sales, technical, and customer success — the people behind this briefing.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="border-t" style={{ background: "var(--brand-bg)", borderColor: "var(--brand-surface-border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <AccountTeam members={ACCOUNT.team} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
