import { useEffect, useRef, useState } from "react";

/* ── Intersection Observer hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Animated counter ── */
function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, visible } = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1600;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return (
    <div ref={ref} className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
      <span>{prefix}{val.toLocaleString()}{suffix}</span>
    </div>
  );
}

/* ── Icons ── */
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);
const IconCamera = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);
const IconGps = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>
  </svg>
);
const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconSparkle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/><path d="M17 3a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2z"/>
  </svg>
);
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);
const IconFile = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);
const IconBarChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconX = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
// Navigation arrow icons (reserved for future carousel use)

/* ── Data ── */
const features = [
  {
    badge: "Evidence",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: <IconCamera />,
    iconBg: "bg-emerald-50 text-emerald-600",
    title: "GPS-Verified Photo Capture",
    desc: "Every photo timestamped, geotagged and cryptographically fingerprinted. Tamper-proof evidence that stands up to deposit scheme adjudication.",
    span: "lg:col-span-4",
  },
  {
    badge: "AI Analysis",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
    icon: <IconSparkle />,
    iconBg: "bg-violet-50 text-violet-600",
    title: "AI-Powered Condition Reports",
    desc: "Draft reports generated from your inspection photos. Review, edit and share — no more writing from scratch.",
    span: "lg:col-span-4",
  },
  {
    badge: "Compliance",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    icon: <IconShield />,
    iconBg: "bg-sky-50 text-sky-600",
    title: "Compliance Tracking & Alerts",
    desc: "Gas safety, EICR, EPC and deposit protection deadlines tracked automatically with expiry reminders.",
    span: "lg:col-span-4",
  },
  {
    badge: "Inspections",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    icon: <IconCheck />,
    iconBg: "bg-amber-50 text-amber-600",
    title: "Guided Mobile Inspections",
    desc: "Check-in, mid-term and check-out inspections with step-by-step prompts on any device, fully offline-capable.",
    span: "lg:col-span-6",
  },
  {
    badge: "Reports",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    icon: <IconFile />,
    iconBg: "bg-rose-50 text-rose-600",
    title: "Branded PDF Reports",
    desc: "Professional outputs formatted for TDS, DPS or MyDeposits. White-label with your agency branding.",
    span: "lg:col-span-6",
  },
];

const testimonials = [
  {
    quote: "Finally, a platform that makes deposit disputes a thing of the past. The evidence is so clear that our tenants and landlords reach fair agreements without the stress.",
    name: "James Wilson",
    role: "Director, Premier Lettings Ltd",
    initial: "J",
  },
  {
    quote: "We switched from paper inventories to Fair Let Inventory and our dispute rate dropped by 80%. The AI comparison alone saved us dozens of hours per month.",
    name: "Sarah Mitchell",
    role: "Property Manager, City Estates",
    initial: "S",
  },
  {
    quote: "As a tenant I finally have proof of how I left the property. No more 'he said she said'. The GPS timestamps mean everything is verifiable.",
    name: "David Okonkwo",
    role: "Tenant, London",
    initial: "D",
  },
];

const aiPills = [
  "AI condition analysis", "Damage detection", "Cleanliness scoring (1–10)", "Fair wear assessment",
  "Check-in vs check-out comparison", "Smart meter OCR", "AI damage heatmaps", "Room-by-room summaries",
  "Smart Test Mode for fixtures", "DIY tips & repair estimates", "AI-powered chat (Tobby)",
  "Voice-to-text inspection notes", "Multi-language report translation", "Trend analysis across portfolio",
  "Predictive maintenance alerts", "Natural language evidence search", "Auto-generated repair estimates",
  "Evidence quality scoring", "Smart photo suggestions", "Anomaly detection in meter readings",
];

const steps = [
  { n: "01", title: "Create your property", body: "Add the property address and invite any co-inspectors or tenants. Takes under a minute." },
  { n: "02", title: "Conduct the inspection", body: "Use the guided mobile flow room by room. Capture photos in-app — GPS and timestamp are applied automatically." },
  { n: "03", title: "AI drafts your report", body: "Our AI analyses the photos and generates a structured condition report ready for your review." },
  { n: "04", title: "Share & archive", body: "Send a tamper-proof PDF to tenants, landlords or deposit schemes. Everything stored immutably in the cloud." },
];

/* ─────────────── MAIN APP ─────────────── */
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const heroRef = useInView(0.01);
  const featRef = useInView(0.05);
  const evidenceRef = useInView(0.1);
  const statsRef = useInView(0.1);
  const stepsRef = useInView(0.1);
  const testimonialsRef = useInView(0.1);
  const aiRef = useInView(0.1);
  const ctaRef = useInView(0.1);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.98)",
          borderBottom: scrolled ? "1px solid #f3f4f6" : "1px solid transparent",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between" style={{ height: 64 }}>
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: "linear-gradient(135deg, #059669, #10b981)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0
            }}>
              <IconShield />
            </div>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              Fair Let Inventory
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "Pricing", "About"].map(item => (
              <a key={item} href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="nav-link">{item}</a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="nav-link">Sign In</a>
            <a href="#" className="btn-primary" style={{ padding: "9px 20px", fontSize: 13 }}>Start Free Trial</a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#0a0a0a", padding: 4 }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #f3f4f6", padding: "20px 24px 24px" }}>
            {["Features", "How It Works", "Pricing", "About"].map(item => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                style={{ display: "block", padding: "10px 0", fontSize: 15, color: "#374151", textDecoration: "none", borderBottom: "1px solid #f9fafb" }}
              >{item}</a>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
              <a href="#" className="btn-outline" style={{ justifyContent: "center" }}>Sign In</a>
              <a href="#" className="btn-primary" style={{ justifyContent: "center" }}>Start Free Trial</a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        ref={heroRef.ref}
        style={{ paddingTop: 140, paddingBottom: 80, background: "#fff", position: "relative", overflow: "hidden" }}
      >
        {/* subtle grid background */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "linear-gradient(#f3f4f6 1px, transparent 1px), linear-gradient(90deg, #f3f4f6 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.5
        }} />
        {/* emerald glow */}
        <div style={{
          position: "absolute", top: -100, right: -100, width: 600, height: 600,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0
        }} />

        <div className="mx-auto max-w-6xl px-6" style={{ position: "relative", zIndex: 1 }}>
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div
              className={heroRef.visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: "0s", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "#d1fae5", color: "#065f46", borderRadius: 100,
                padding: "5px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em"
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669", display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite" }} />
                UK's #1 Property Inventory Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              className={heroRef.visible ? "animate-fade-up" : "opacity-0"}
              style={{
                animationDelay: "0.08s",
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(42px, 6vw, 76px)",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              One record{" "}
              <span style={{ fontStyle: "italic", color: "#059669" }}>everyone</span>
              <br />
              trusts.
            </h1>

            {/* Subheadline */}
            <p
              className={heroRef.visible ? "animate-fade-up" : "opacity-0"}
              style={{
                animationDelay: "0.16s",
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 400,
                color: "#6b7280",
                marginTop: 16,
                lineHeight: 1.3,
              }}
            >
              From check-in to check-out.
            </p>

            {/* Body */}
            <p
              className={heroRef.visible ? "animate-fade-up" : "opacity-0"}
              style={{
                animationDelay: "0.22s",
                fontSize: 17, fontWeight: 300, lineHeight: 1.7,
                color: "#6b7280", marginTop: 24, maxWidth: 540,
              }}
            >
              GPS-verified, timestamped and tamper-proof property inspections.
              Trusted by landlords, agents, contractors and tenants across the UK.
            </p>

            {/* CTAs */}
            <div
              className={heroRef.visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: "0.28s", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 40 }}
            >
              <a href="#" className="btn-primary" style={{ padding: "14px 32px", fontSize: 15 }}>
                Start Free Trial
              </a>
              <a href="#" className="btn-outline" style={{ padding: "14px 32px", fontSize: 15 }}>
                See How It Works
              </a>
            </div>

            {/* Trust signals */}
            <div
              className={heroRef.visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: "0.34s", display: "flex", alignItems: "center", gap: 20, marginTop: 36, flexWrap: "wrap" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#f59e0b" }}><IconStar /></span>
                ))}
                <span style={{ fontSize: 13, color: "#6b7280", marginLeft: 6 }}>Rated 4.9/5</span>
              </div>
              <span style={{ width: 1, height: 16, background: "#e5e7eb" }} />
              <span style={{ fontSize: 13, color: "#6b7280" }}>No credit card required</span>
              <span style={{ width: 1, height: 16, background: "#e5e7eb" }} />
              <span style={{ fontSize: 13, color: "#6b7280" }}>Free 14-day trial</span>
            </div>
          </div>

          {/* Dashboard mock */}
          <div
            className={heroRef.visible ? "animate-fade-up" : "opacity-0"}
            style={{ animationDelay: "0.4s", marginTop: 72 }}
          >
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* ── SCHEME LOGOS ── */}
      <section style={{ borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6", background: "#f9fafb", padding: "28px 24px" }}>
        <div className="mx-auto max-w-6xl">
          <p style={{ textAlign: "center", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 20 }}>
            Evidence packs accepted by
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {["TDS", "DPS", "myDeposits"].map(scheme => (
              <div key={scheme} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconShield />
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>{scheme}</span>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 13, color: "#9ca3af" }}>+ all UK deposit schemes</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        ref={featRef.ref}
        style={{ padding: "96px 24px", background: "#fff" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className={featRef.visible ? "animate-fade-up" : "opacity-0"} style={{ marginBottom: 56 }}>
            <div className="label-tag" style={{ marginBottom: 16 }}>
              <span style={{ width: 24, height: 1.5, background: "#059669", display: "inline-block" }} />
              Platform Capabilities
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400, letterSpacing: "-0.03em",
              color: "#0a0a0a", margin: 0, lineHeight: 1.1
            }}>
              Everything you need<br />
              <span style={{ fontStyle: "italic", color: "#6b7280" }}>for fair tenancies.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`${f.span} card-feature ${featRef.visible ? "animate-scale-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.06 * i}s` }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}
                    className={f.iconBg}
                  >
                    {f.icon}
                  </div>
                  <span className={`pill-tag ${f.badgeColor}`} style={{ fontSize: 11, letterSpacing: "0.06em" }}>
                    {f.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.2 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: "#6b7280", lineHeight: 1.7, marginBottom: 20 }}>
                  {f.desc}
                </p>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: "#059669", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
                  onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
                >
                  Learn more <IconArrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVIDENCE DEEP-DIVE ── */}
      <section
        ref={evidenceRef.ref}
        style={{ padding: "96px 24px", background: "#f9fafb", borderTop: "1px solid #f3f4f6" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className={evidenceRef.visible ? "animate-fade-up" : "opacity-0"}>
              <div className="label-tag" style={{ marginBottom: 16 }}>
                <span style={{ width: 24, height: 1.5, background: "#059669", display: "inline-block" }} />
                Forensic-Grade Evidence
              </div>
              <h2 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 46px)",
                fontWeight: 400, letterSpacing: "-0.03em",
                color: "#0a0a0a", lineHeight: 1.1, margin: "0 0 8px"
              }}>
                Not just photos.
              </h2>
              <h2 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(28px, 3.5vw, 46px)",
                fontWeight: 400, letterSpacing: "-0.03em",
                color: "#059669", lineHeight: 1.1, margin: "0 0 28px"
              }}>
                Tamper-proof evidence.
              </h2>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { icon: <IconCamera />, label: "In-app capture only — no gallery uploads" },
                  { icon: <IconGps />, label: "GPS-geotagged to exact property location" },
                  { icon: <IconClock />, label: "Timestamped with cryptographically verified time" },
                  { icon: <IconLock />, label: "SHA-256 checksum fingerprinting on every file" },
                  { icon: <IconFile />, label: "Immutable storage — no edits or deletions" },
                  { icon: <IconShield />, label: "Export-ready for TDS, DPS and MyDeposits" },
                ].map((item, i) => (
                  <div key={i} className="check-item">
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: "#d1fae5", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 300, color: "#374151", lineHeight: 1.5 }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="btn-primary" style={{ marginTop: 36, display: "inline-flex" }}>
                Explore evidence features <IconArrow />
              </a>
            </div>

            {/* Mock capture UI */}
            <div className={evidenceRef.visible ? "animate-scale-up" : "opacity-0"} style={{ animationDelay: "0.12s" }}>
              <CaptureUIMock />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        ref={statsRef.ref}
        style={{ padding: "80px 24px", background: "#0a0a0a" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { prefix: "", target: 170000, suffix: "+", label: "Deposit disputes raised every year in the UK" },
              { prefix: "", target: 62, suffix: "%", label: "Of tenants report unfair deductions at end of tenancy" },
              { prefix: "£", target: 360, suffix: "M+", label: "Lost annually to poor or incomplete property evidence" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "48px 40px",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  textAlign: "center"
                }}
              >
                <div style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(40px, 6vw, 64px)",
                  fontWeight: 400, letterSpacing: "-0.04em",
                  color: "#fff", lineHeight: 1
                }}>
                  {statsRef.visible ? (
                    <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} />
                  ) : (
                    <span style={{ opacity: 0 }}>0</span>
                  )}
                </div>
                <p style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.45)", marginTop: 12, maxWidth: 200, margin: "12px auto 0", lineHeight: 1.6 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        ref={stepsRef.ref}
        style={{ padding: "96px 24px", background: "#fff" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className={stepsRef.visible ? "animate-fade-up" : "opacity-0"} style={{ marginBottom: 64 }}>
            <div className="label-tag" style={{ marginBottom: 16 }}>
              <span style={{ width: 24, height: 1.5, background: "#059669", display: "inline-block" }} />
              How It Works
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400, letterSpacing: "-0.03em",
              color: "#0a0a0a", margin: 0, lineHeight: 1.1
            }}>
              Up and running<br />
              <span style={{ fontStyle: "italic", color: "#6b7280" }}>in minutes.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={stepsRef.visible ? "animate-fade-up" : "opacity-0"}
                style={{ animationDelay: `${0.08 * i}s` }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: i === 0 ? "#059669" : "#f3f4f6",
                  color: i === 0 ? "#fff" : "#6b7280",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 600, marginBottom: 20
                }}>
                  {s.n}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: 8 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: "#6b7280", lineHeight: 1.7 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        ref={testimonialsRef.ref}
        style={{ padding: "96px 24px", background: "#f9fafb", borderTop: "1px solid #f3f4f6" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className={testimonialsRef.visible ? "animate-fade-up" : "opacity-0"} style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="label-tag" style={{ justifyContent: "center", marginBottom: 16 }}>
              <span style={{ width: 24, height: 1.5, background: "#059669", display: "inline-block" }} />
              Testimonials
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 400, letterSpacing: "-0.03em",
              color: "#0a0a0a", margin: 0
            }}>
              What people say
            </h2>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`testimonial-card ${testimonialsRef.visible ? "animate-scale-up" : "opacity-0"}`}
                style={{
                  animationDelay: `${0.1 * i}s`,
                  border: activeTestimonial === i ? "1.5px solid #059669" : undefined,
                  boxShadow: activeTestimonial === i ? "0 4px 24px rgba(5,150,105,0.08)" : undefined,
                }}
                onMouseEnter={() => setActiveTestimonial(i)}
              >
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "#f59e0b" }}><IconStar /></span>
                  ))}
                </div>
                <p style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontStyle: "italic", fontWeight: 400,
                  fontSize: 17, lineHeight: 1.6, color: "#1f2937",
                  marginBottom: 24
                }}>
                  "{t.quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "linear-gradient(135deg, #059669, #10b981)",
                    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, fontWeight: 600, flexShrink: 0
                  }}>
                    {t.initial}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, marginTop: 2 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: activeTestimonial === i ? 24 : 8, height: 8,
                  borderRadius: 4,
                  background: activeTestimonial === i ? "#059669" : "#e5e7eb",
                  border: "none", cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── AI MARQUEE ── */}
      <section
        ref={aiRef.ref}
        style={{ padding: "80px 0", background: "#fff", borderTop: "1px solid #f3f4f6", overflow: "hidden" }}
      >
        <div className="mx-auto max-w-6xl px-6" style={{ marginBottom: 36 }}>
          <div className={aiRef.visible ? "animate-fade-up" : "opacity-0"} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="label-tag" style={{ marginBottom: 12 }}>
                <span style={{ width: 24, height: 1.5, background: "#059669", display: "inline-block" }} />
                AI-Powered
              </div>
              <h2 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400, letterSpacing: "-0.03em",
                color: "#0a0a0a", margin: 0, lineHeight: 1.1
              }}>
                Intelligence at{" "}
                <span style={{ fontStyle: "italic", color: "#6b7280" }}>every step.</span>
              </h2>
            </div>
            <p style={{ fontSize: 14, color: "#9ca3af", maxWidth: 260, lineHeight: 1.6, fontWeight: 300 }}>
              AI suggestions only. Human review always required.
            </p>
          </div>
        </div>

        {/* Marquee rows */}
        {[0, 1].map(rowIdx => (
          <div key={rowIdx} style={{ overflow: "hidden", marginBottom: 10 }}>
            <div
              className={rowIdx % 2 === 0 ? "marquee-fwd" : "marquee-rev"}
              style={{ display: "flex", gap: 10, width: "max-content", animationDuration: rowIdx % 2 === 0 ? "35s" : "42s" }}
            >
              {[...aiPills, ...aiPills].map((pill, i) => (
                <span key={i} className="pill-marquee">{pill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── FOR WHO ── */}
      <section style={{ padding: "80px 24px", background: "#f9fafb", borderTop: "1px solid #f3f4f6" }}>
        <div className="mx-auto max-w-6xl">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="label-tag" style={{ justifyContent: "center", marginBottom: 16 }}>
              <span style={{ width: 24, height: 1.5, background: "#059669", display: "inline-block" }} />
              Built For Everyone
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400, letterSpacing: "-0.03em",
              color: "#0a0a0a", lineHeight: 1.1
            }}>
              One platform, four perspectives
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <IconUsers />, label: "Landlords", color: "bg-emerald-50 text-emerald-700", desc: "Protect your investment with bulletproof evidence." },
              { icon: <IconBarChart />, label: "Letting Agents", color: "bg-sky-50 text-sky-700", desc: "Branded reports and portfolio-wide compliance tracking." },
              { icon: <IconCheck />, label: "Tenants", color: "bg-violet-50 text-violet-700", desc: "Prove your condition record at check-out. Fairly." },
              { icon: <IconFile />, label: "Contractors", color: "bg-amber-50 text-amber-700", desc: "Log visits, capture evidence, raise accurate quotes." },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#fff", border: "1.5px solid #f3f4f6", borderRadius: 12,
                  padding: "28px 24px", transition: "all 0.2s",
                  cursor: "pointer"
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#d1fae5";
                  el.style.boxShadow = "0 4px 20px rgba(5,150,105,0.06)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#f3f4f6";
                  el.style.boxShadow = "none";
                  el.style.transform = "none";
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}
                  className={item.color}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: 8 }}>{item.label}</h3>
                <p style={{ fontSize: 13, fontWeight: 300, color: "#6b7280", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef.ref}
        style={{ padding: "100px 24px", background: "#0a0a0a", position: "relative", overflow: "hidden" }}
      >
        {/* Green glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(5,150,105,0.12) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div className="mx-auto max-w-3xl" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div
            className={ctaRef.visible ? "animate-fade-up" : "opacity-0"}
          >
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(32px, 4.5vw, 58px)",
              fontWeight: 400, letterSpacing: "-0.03em",
              color: "#fff", lineHeight: 1.1, margin: "0 0 16px"
            }}>
              Property evidence<br />
              <span style={{ fontStyle: "italic", color: "#10b981" }}>should be fair.</span>
            </h2>
            <p style={{ fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.5)", marginBottom: 40, lineHeight: 1.6 }}>
              Join thousands of landlords, agents and tenants using Fair Let Inventory.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a href="#" className="btn-emerald" style={{ padding: "15px 36px", fontSize: 15 }}>
                Start Free Trial — No Card Needed
              </a>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "15px 28px", borderRadius: 6, fontSize: 15,
                background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)",
                border: "1.5px solid rgba(255,255,255,0.1)", textDecoration: "none",
                transition: "all 0.2s"
              }}>
                Talk to Sales
              </a>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 24 }}>
              14-day free trial · No credit card · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "56px 24px 40px" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12" style={{ marginBottom: 48 }}>
            {/* Brand */}
            <div style={{ gridColumn: "span 2" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #059669, #10b981)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconShield />
                </div>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>Fair Let Inventory</span>
              </div>
              <p style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 240 }}>
                The UK's forensic-grade property inventory and evidence platform. Trusted by landlords, agents and tenants.
              </p>
            </div>

            {/* Links */}
            {[
              { title: "Product", links: ["Features", "How It Works", "Pricing", "Changelog"] },
              { title: "Company", links: ["About", "Contact", "Help", "Blog"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
            ].map(col => (
              <div key={col.title}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                  {col.title}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" style={{ fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>
              © 2026 Fair Let Inventory Ltd. Registered in England & Wales No. 16916919.
            </p>
            <p style={{ fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.2)" }}>
              Not a government-authorised deposit scheme. Reports support, not replace, adjudicator processes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Dashboard Mock Component ─── */
function DashboardMock() {
  return (
    <div style={{
      background: "#fff",
      border: "1.5px solid #f3f4f6",
      borderRadius: 16,
      boxShadow: "0 20px 80px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)",
      overflow: "hidden",
      maxWidth: "100%"
    }}>
      {/* Browser chrome */}
      <div style={{ background: "#f9fafb", borderBottom: "1px solid #f3f4f6", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#fca5a5", display: "inline-block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#fde68a", display: "inline-block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#a7f3d0", display: "inline-block" }} />
        <div style={{ flex: 1, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 4, padding: "4px 12px", fontSize: 11, color: "#9ca3af", marginLeft: 8 }}>
          app.fairletinventory.co.uk
        </div>
      </div>

      {/* App layout */}
      <div style={{ display: "flex", height: 420 }}>
        {/* Sidebar */}
        <div style={{ width: 200, background: "#0a0a0a", padding: "20px 0", flexShrink: 0 }}>
          <div style={{ padding: "0 16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, #059669, #10b981)" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>Fair Let</span>
            </div>
          </div>
          <div style={{ padding: "16px 12px", display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { label: "Dashboard", active: true },
              { label: "Properties", active: false },
              { label: "Inspections", active: false },
              { label: "Reports", active: false },
              { label: "Compliance", active: false },
            ].map(item => (
              <div key={item.label} style={{
                padding: "8px 10px", borderRadius: 6, fontSize: 12, fontWeight: item.active ? 500 : 400,
                background: item.active ? "rgba(5,150,105,0.15)" : "transparent",
                color: item.active ? "#10b981" : "rgba(255,255,255,0.4)",
                cursor: "pointer"
              }}>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: 24, background: "#fff", overflow: "hidden" }}>
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: 0, fontWeight: 300 }}>Good morning, James</p>
              <p style={{ fontSize: 17, fontWeight: 600, color: "#0a0a0a", margin: "2px 0 0", letterSpacing: "-0.02em" }}>Dashboard</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ padding: "6px 14px", borderRadius: 6, background: "#059669", color: "#fff", fontSize: 11, fontWeight: 500, cursor: "pointer" }}>
                + New Inspection
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
            {[
              { label: "Active Properties", val: "24", change: "+2", up: true },
              { label: "Inspections This Month", val: "47", change: "+12%", up: true },
              { label: "Open Disputes", val: "0", change: "↓3 resolved", up: true },
            ].map(s => (
              <div key={s.label} style={{ background: "#f9fafb", border: "1.5px solid #f3f4f6", borderRadius: 10, padding: "14px 16px" }}>
                <p style={{ fontSize: 10, color: "#9ca3af", margin: "0 0 6px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</p>
                <p style={{ fontSize: 22, fontWeight: 700, color: "#0a0a0a", margin: 0, letterSpacing: "-0.03em" }}>{s.val}</p>
                <p style={{ fontSize: 10, color: "#059669", margin: "4px 0 0" }}>{s.change}</p>
              </div>
            ))}
          </div>

          {/* Recent inspections table */}
          <div style={{ border: "1.5px solid #f3f4f6", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", background: "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>Recent Inspections</p>
            </div>
            {[
              { addr: "14 Maple Street, London", type: "Check-In", status: "Completed", dot: "#059669" },
              { addr: "8 Oak Avenue, Manchester", type: "Mid-Term", status: "In Progress", dot: "#f59e0b" },
              { addr: "22 Elm Road, Birmingham", type: "Check-Out", status: "Pending Review", dot: "#6b7280" },
            ].map((row, i) => (
              <div key={i} className="mock-row" style={{ padding: "10px 16px" }}>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "#0a0a0a", margin: 0 }}>{row.addr}</p>
                  <p style={{ fontSize: 11, color: "#9ca3af", margin: "2px 0 0", fontWeight: 300 }}>{row.type}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#374151" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: row.dot, display: "inline-block" }} />
                  {row.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Camera Capture Mock ─── */
function CaptureUIMock() {
  return (
    <div style={{
      background: "#0a0a0a",
      borderRadius: 24,
      overflow: "hidden",
      boxShadow: "0 24px 80px rgba(0,0,0,0.12)",
      border: "1.5px solid #f3f4f6",
      maxWidth: 360,
      margin: "0 auto"
    }}>
      {/* Phone notch */}
      <div style={{ background: "#0a0a0a", height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 80, height: 20, background: "#1a1a1a", borderRadius: 20 }} />
      </div>

      {/* Camera viewfinder */}
      <div style={{ background: "#111", position: "relative", height: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "33.33% 33.33%"
        }} />
        {/* Corner guides */}
        {[
          { top: 20, left: 20 }, { top: 20, right: 20 },
          { bottom: 20, left: 20 }, { bottom: 20, right: 20 },
        ].map((pos, idx) => (
          <div key={idx} style={{
            position: "absolute", ...pos,
            width: 20, height: 20,
            borderTop: idx < 2 ? "2px solid #059669" : "none",
            borderBottom: idx >= 2 ? "2px solid #059669" : "none",
            borderLeft: idx % 2 === 0 ? "2px solid #059669" : "none",
            borderRight: idx % 2 === 1 ? "2px solid #059669" : "none",
          }} />
        ))}
        {/* Focus ring */}
        <div style={{
          width: 60, height: 60, borderRadius: "50%",
          border: "1.5px solid #059669",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", zIndex: 1
        }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#059669" }} />
        </div>
        {/* GPS overlay */}
        <div style={{
          position: "absolute", top: 16, left: 16, right: 16,
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <div style={{
            background: "rgba(5,150,105,0.9)", color: "#fff",
            borderRadius: 4, padding: "3px 8px", fontSize: 10, fontWeight: 500,
            display: "flex", alignItems: "center", gap: 4
          }}>
            <IconGps /> GPS Lock
          </div>
          <div style={{
            background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.8)",
            borderRadius: 4, padding: "3px 8px", fontSize: 10, fontWeight: 400
          }}>
            51.5074°N, 0.1278°W
          </div>
        </div>
        {/* Timestamp overlay */}
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
          <div style={{
            background: "rgba(0,0,0,0.65)", color: "rgba(255,255,255,0.7)",
            borderRadius: 4, padding: "4px 10px", fontSize: 10, fontWeight: 400,
            display: "flex", alignItems: "center", gap: 6
          }}>
            <IconClock />
            <span>2025-07-14 · 09:32:41 UTC · SHA-256 verified</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ background: "#0a0a0a", padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconFile />
        </div>
        <button style={{
          width: 64, height: 64, borderRadius: "50%",
          background: "#fff", border: "4px solid rgba(255,255,255,0.2)",
          cursor: "pointer", transition: "transform 0.15s"
        }} aria-label="Capture" />
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>AI</span>
        </div>
      </div>

      {/* Evidence badge */}
      <div style={{
        background: "#d1fae5", padding: "10px 20px",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8
      }}>
        <IconLock />
        <span style={{ fontSize: 11, fontWeight: 600, color: "#065f46", letterSpacing: "0.04em" }}>
          TAMPER-PROOF · IMMUTABLE RECORD
        </span>
      </div>
    </div>
  );
}
