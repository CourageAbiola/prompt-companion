import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/ex/Logo";
import { SectionLabel } from "@/components/ex/SectionLabel";
import { ScoreRing } from "@/components/ex/ScoreRing";
import { ProgressBar } from "@/components/ex/ProgressBar";
import { mockBusiness, fmtGBPk } from "@/lib/mock";
import heroImage from "@/assets/hero-acquisition.png";

export const Route = createFileRoute("/")({ component: Landing });

function Landing() {
  return (
    <div className="bg-[var(--bg-dark)] text-[var(--text-on-dark)] min-h-screen">
      <Nav />
      <Hero />
      <HowItWorks />
      <ScorePreview />
      <PainPoints />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="border-b border-[var(--border-dark)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Logo onDark />
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--text-on-dark-secondary)]">
          <a href="#process" className="hover:text-[var(--text-on-dark)] transition-colors">Process</a>
          <a href="#pricing" className="hover:text-[var(--text-on-dark)] transition-colors">Pricing</a>
          <Link to="/login" className="hover:text-[var(--text-on-dark)] transition-colors">Sign in</Link>
        </nav>
        <Link to="/signup" className="btn-primary text-sm">Get Your Exit Score</Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-[var(--border-dark)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel gold>Pre-Exit Intelligence for E-commerce</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display mt-6 text-[40px] sm:text-[56px] md:text-[68px] leading-[0.98] tracking-tight text-[var(--text-on-dark)]"
          >
            You're leaving money on the table.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display italic text-[var(--accent-on-dark)] text-2xl md:text-3xl mt-5"
          >
            Find out exactly how much.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-[16px] md:text-[17px] text-[var(--text-on-dark-secondary)] max-w-xl leading-relaxed"
          >
            ExitEcom is the operating system e-commerce founders use before selling. Get your Exit Score, understand your valuation, and increase what buyers will pay.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8"
          >
            <Link to="/signup" className="btn-primary">Get Your Free Exit Score <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <img
            src={heroImage}
            alt="3D illustration of business acquisition: handshake merging into rising charts and gold coins"
            width={1024}
            height={1024}
            className="w-full max-w-[560px] h-auto drop-shadow-[0_30px_60px_rgba(147,197,253,0.15)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Connect Your Business", d: "Link Shopify, ad accounts and financials in minutes." },
    { n: "02", t: "Receive Your Exit Score", d: "AI analysis across 9 buyer-critical dimensions." },
    { n: "03", t: "Understand What's Suppressing Value", d: "Buyer-grade risk intelligence — not vanity metrics." },
    { n: "04", t: "Fix It. Exit Higher.", d: "Actionable roadmap with £ uplift per action." },
  ];
  return (
    <section id="process" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-28">
        <SectionLabel>The Process</SectionLabel>
        <h2 className="font-display mt-4 text-4xl md:text-5xl max-w-3xl leading-tight">
          From business to buyer-ready asset.
        </h2>
        <div className="mt-16 grid md:grid-cols-4 gap-px bg-[var(--border-warm)]">
          {steps.map((s, i) => (
            <div key={s.n} className="bg-[var(--bg-primary)] p-8">
              <div className="font-display text-[var(--accent)] text-3xl">{s.n}</div>
              <div className="mt-6 h-px w-12 bg-[var(--text-primary)]" />
              <h3 className="font-display mt-5 text-[22px] leading-tight">{s.t}</h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">{s.d}</p>
              <div className="mt-6 text-xs text-[var(--text-muted)]">Step {i + 1} of 4</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScorePreview() {
  return (
    <section className="border-y border-[var(--border-dark)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel gold>What a Buyer Sees</SectionLabel>
          <h2 className="font-display mt-5 text-4xl md:text-5xl text-[var(--text-on-dark)] leading-tight">
            This is what a real buyer<br /> sees when they audit your business.
          </h2>
          <p className="mt-6 text-[var(--text-on-dark-secondary)] text-[16px] leading-relaxed max-w-md">
            Not a vanity score. A buyer-grade assessment across nine dimensions that decide whether they offer 0.9x or 2.4x.
          </p>
        </div>

        <div className="bg-[var(--bg-dark-secondary)] border border-[var(--border-dark)] rounded-lg p-10">
          <SectionLabel dark>Exit Readiness Score</SectionLabel>
          <div className="mt-6 flex items-center gap-8">
            <ScoreRing score={68} />
            <div>
              <div className="font-display text-[var(--accent-on-dark)] text-4xl">{fmtGBPk(220000)}</div>
              <div className="text-xs text-[var(--text-on-dark-secondary)] mt-1">Fair market value</div>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 border border-[var(--accent-on-dark)] rounded-sm">
                <span className="text-[var(--accent-on-dark)] text-[10px] tracking-[0.18em] uppercase">Strong Asset</span>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {mockBusiness.scoreBreakdown.slice(0, 5).map((c) => (
              <div key={c.key} className="flex items-center gap-4">
                <div className="text-xs text-[var(--text-on-dark-secondary)] w-44 truncate">{c.name}</div>
                <div className="flex-1">
                  <ProgressBar value={(c.score / c.max) * 100} track="rgba(247,245,240,0.08)" />
                </div>
                <div className="font-display text-[var(--text-on-dark)] text-sm w-12 text-right">{c.score}/{c.max}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const pains = [
    { t: "No clean financials", d: "Buyers discount or walk away the moment they see messy books." },
    { t: "Owner runs everything", d: "Kills transferability. Buyers see a job, not an asset." },
    { t: "One product, one channel", d: "Looks fragile. Multiples compress by 0.3x or more." },
    { t: "No valuation clarity", d: "You're guessing what to accept and leaving money on the table." },
    { t: "No data room", d: "Due diligence kills momentum. Deals die in week three." },
    { t: "No exit narrative", d: "Looks like a job, not an asset. Buyers can't picture themselves running it." },
  ];
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-28">
        <SectionLabel>The Six Failure Modes</SectionLabel>
        <h2 className="font-display mt-4 text-4xl md:text-5xl max-w-3xl leading-tight">
          Most sellers fail before<br /> the conversation starts.
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-[var(--border-warm)]">
          {pains.map((p) => (
            <div key={p.t} className="bg-[var(--bg-primary)] p-8">
              <div className="w-1 h-6 bg-[var(--risk-critical)] mb-5" />
              <h3 className="font-display text-2xl leading-tight">{p.t}</h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { name: "Free", price: "£0", desc: "Get a teaser of your value.", features: ["Exit Score across 9 dimensions", "Valuation teaser range", "Top 3 buyer concerns"], cta: "Get Free Score", featured: false },
    { name: "Professional", price: "£199", per: "/mo", desc: "The full pre-exit operating system.", features: ["Full ExitOS dashboard", "Risk Scanner & Valuation Engine", "Optimization Plan with £ uplift", "Investment Memo & Data Room", "AI recommendations"], cta: "Start Professional", featured: true },
    { name: "Success", price: "Low %", desc: "Only on matched buyer deals.", features: ["Curated buyer matching", "M&A advisor support", "Negotiation playbook", "Transaction documentation"], cta: "Talk to Advisor", featured: false },
  ];
  return (
    <section id="pricing" className="bg-[var(--bg-primary)] text-[var(--text-primary)] border-t border-[var(--border-warm)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-28">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="font-display mt-4 text-4xl md:text-5xl">Three ways to start.</h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-sm">Cancel anytime. No setup fees. Your data stays yours.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`p-8 rounded-lg border transition-colors ${t.featured ? "bg-[var(--bg-dark)] text-[var(--text-on-dark)] border-[var(--accent-on-dark)]" : "bg-[var(--bg-primary)] border-[var(--border-warm)]"}`}>
              <div className={t.featured ? "label-caps-gold" : "label-caps"}>{t.name}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl" style={{ color: t.featured ? "var(--accent-on-dark)" : "var(--text-primary)" }}>{t.price}</span>
                {t.per && <span className={t.featured ? "text-[var(--text-on-dark-secondary)]" : "text-[var(--text-secondary)]"}>{t.per}</span>}
              </div>
              <p className={`mt-3 text-sm ${t.featured ? "text-[var(--text-on-dark-secondary)]" : "text-[var(--text-secondary)]"}`}>{t.desc}</p>
              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${t.featured ? "text-[var(--text-on-dark)]" : "text-[var(--text-primary)]"}`}>
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.featured ? "text-[var(--accent-on-dark)]" : "text-[var(--accent)]"}`} strokeWidth={1.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/signup" className={`mt-8 w-full justify-center ${t.featured ? "btn-primary" : "btn-ghost-light"}`}>
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[var(--bg-dark)] border-t border-[var(--border-dark)]">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 py-32 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-[var(--text-on-dark)] leading-[1.05]">
          The best time to prepare<br /> was two years ago.
        </h2>
        <p className="font-display italic mt-5 text-3xl md:text-4xl text-[var(--accent-on-dark)]">
          The second best time is now.
        </p>
        <div className="mt-12">
          <Link to="/signup" className="btn-primary">Get Your Exit Score — Free <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border-dark)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--text-on-dark-secondary)]">
        <Logo onDark size="sm" />
        <div>© {new Date().getFullYear()} ExitEcom. Bank-grade encryption. Your business data is never shared.</div>
      </div>
    </footer>
  );
}
