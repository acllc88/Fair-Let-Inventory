import { useState, useEffect, useRef } from 'react';
import { FLILogoIcon, FLILogoMono } from './components/FLILogos';
import {
  ShieldCheck, CheckMark, VerifiedDoc, Checklist, MagnifyingGlass,
  Report, Analytics, LocationPin, House, Building, HouseLocation,
  ApprovedBadge, MapMarker, GlobalLocation, Apartment, PropertyDetails
} from './components/IconSystem';

/* ───────── useInView hook ───────── */
function useInView(opts: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15, ...opts });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ───────── Animated counter ───────── */
function Counter({ end, prefix = '', suffix = '', duration = 2000 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const { ref, visible } = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = end / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(id); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [visible, end, duration]);
  return <span ref={ref} className="stat-number">{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* ───────── Header ───────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Evidence', href: '#evidence' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className={`sticky top-0 z-50 header-blur border-b transition-all duration-300 ${scrolled ? 'header-scrolled border-gray-200/80' : 'border-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fli-red to-fli-red-dark shadow-md shadow-fli-red/20 transition-transform group-hover:scale-105">
              <FLILogoIcon size={24} className="absolute inset-0 m-auto" />
            </div>
            <span className="text-[15px] font-semibold text-fli-dark tracking-tight whitespace-nowrap">Fair Let Inventory</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-fli-gray hover:text-fli-dark transition-colors">{l.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://app.fairletinventory.co.uk/login" target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center h-9 px-4 text-sm font-medium text-fli-gray hover:text-fli-dark transition-colors">
              Sign In
            </a>
            <a href="https://app.fairletinventory.co.uk/signup" target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex items-center h-9 px-5 rounded-lg text-sm font-medium">
              Start Free Trial
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-fli-gray hover:text-fli-dark" aria-label="Menu">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={mobileOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-fli-gray hover:text-fli-dark">{l.label}</a>
          ))}
          <div className="pt-3 border-t border-gray-100 flex gap-2">
            <a href="https://app.fairletinventory.co.uk/login" target="_blank" rel="noopener noreferrer"
              className="btn-secondary flex-1 text-center py-2.5 rounded-lg text-sm font-medium">Sign In</a>
            <a href="https://app.fairletinventory.co.uk/signup" target="_blank" rel="noopener noreferrer"
              className="btn-primary flex-1 text-center py-2.5 rounded-lg text-sm font-medium">Free Trial</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-8 sm:px-6 sm:pt-28 md:pt-36 lg:px-8">
      <div className="absolute inset-0 dot-grid" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-fli-green/30 bg-fli-green/5 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fli-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fli-green"></span>
            </span>
            <span className="text-xs font-medium text-fli-green-dark tracking-wide">Now accepting early access applications</span>
          </div>
        </div>

        <h1 className="animate-fade-in-up delay-100 text-[40px] leading-[1.08] font-medium tracking-[-0.03em] text-fli-dark sm:text-[56px] lg:text-[68px]">
          One record everyone<br className="hidden sm:block" /> trusts
        </h1>
        <p className="animate-fade-in-up delay-200 mt-3 font-display text-[26px] leading-[1.15] font-normal tracking-[-0.02em] text-fli-gray italic sm:text-[40px] lg:text-[50px]">
          from check-in to check-out
        </p>
        <p className="animate-fade-in-up delay-300 mx-auto mt-6 max-w-2xl text-base leading-relaxed font-light text-fli-gray sm:text-lg">
          Fair Let Inventory is the UK's inventory and evidence infrastructure for property inspections.
          GPS-verified, timestamped and tamper-proof. Trusted by landlords, agents, contractors and tenants alike.
        </p>

        <div className="animate-fade-in-up delay-400 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="https://app.fairletinventory.co.uk/signup" target="_blank" rel="noopener noreferrer"
            className="btn-primary h-12 px-8 rounded-xl text-base font-medium inline-flex items-center gap-2">
            Start Free Trial
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h8m0 0l-4-4m4 4l-4 4" /></svg>
          </a>
          <a href="#how-it-works" className="btn-secondary h-12 px-8 rounded-xl text-base font-medium inline-flex items-center gap-2">
            See How It Works
          </a>
        </div>

        {/* Dashboard preview */}
        <div className="animate-fade-in-up delay-500 mt-16 sm:mt-20">
          <div className="relative mx-auto aspect-[16/10] max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-fli-dark/5 ring-1 ring-black/5">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Dashboard Preview illustration ───────── */
function DashboardPreview() {
  return (
    <div className="absolute inset-0 p-4 sm:p-6 bg-gradient-to-br from-fli-offwhite to-white">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-3">
          <FLILogoIcon size={28} />
          <div className="hidden sm:block">
            <div className="h-2.5 w-24 bg-fli-dark/10 rounded" />
            <div className="h-2 w-16 bg-fli-dark/5 rounded mt-1" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-7 rounded-full bg-fli-green/15 flex items-center justify-center">
            <CheckMark size={14} />
          </div>
          <div className="h-7 w-7 rounded-full bg-fli-blue/15 flex items-center justify-center">
            <LocationPin size={14} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3 sm:gap-4 h-[calc(100%-52px)]">
        {/* Sidebar */}
        <div className="col-span-3 hidden sm:flex flex-col gap-2">
          {['Properties', 'Inspections', 'Reports', 'Compliance'].map((t, i) => (
            <div key={t} className={`h-8 rounded-lg flex items-center gap-2 px-2.5 text-[10px] font-medium ${i === 0 ? 'bg-fli-red/10 text-fli-red' : 'text-fli-gray/50'}`}>
              {i === 0 && <House size={12} />}
              {i === 1 && <MagnifyingGlass size={12} />}
              {i === 2 && <Report size={12} />}
              {i === 3 && <ShieldCheck size={12} />}
              <span className="hidden lg:inline">{t}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="col-span-12 sm:col-span-9 space-y-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { label: 'Active Properties', val: '24', icon: <House size={16} />, color: 'bg-fli-blue/10' },
              { label: 'Reports This Month', val: '12', icon: <VerifiedDoc size={16} />, color: 'bg-fli-green/10' },
              { label: 'Compliance Score', val: '98%', icon: <ShieldCheck size={16} />, color: 'bg-fli-red/10' },
            ].map(s => (
              <div key={s.label} className={`${s.color} rounded-xl p-2.5 sm:p-3`}>
                <div className="flex items-center gap-1.5 mb-1">{s.icon}<span className="text-[9px] text-fli-gray/60 hidden sm:inline">{s.label}</span></div>
                <p className="text-sm sm:text-lg font-semibold text-fli-dark">{s.val}</p>
              </div>
            ))}
          </div>

          {/* Property list preview */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden flex-1">
            <div className="px-3 py-2 border-b border-gray-50 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-fli-dark">Recent Inspections</span>
              <span className="text-[9px] text-fli-green font-medium flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-fli-green" /> All verified
              </span>
            </div>
            {[1, 2, 3].map(i => (
              <div key={i} className="px-3 py-2 border-b border-gray-50/50 flex items-center gap-2.5 last:border-0">
                <div className="h-6 w-6 rounded-lg bg-fli-offwhite flex items-center justify-center shrink-0">
                  <House size={12} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`h-2 rounded bg-fli-dark/8 ${i === 1 ? 'w-32' : i === 2 ? 'w-24' : 'w-28'}`} />
                  <div className="h-1.5 w-16 rounded bg-fli-dark/4 mt-1" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[8px] text-fli-green font-medium">Verified</span>
                  <CheckMark size={10} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── Trust Bar ───────── */
function TrustBar() {
  return (
    <section className="relative z-10 border-y border-gray-100 bg-fli-offwhite/80 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-center text-xs font-medium tracking-widest text-fli-gray/60 uppercase">
          Evidence packs formatted for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {['TDS', 'DPS', 'MyDeposits'].map((name, i) => (
            <div key={name} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="h-10 w-10 rounded-xl bg-fli-dark/5 flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-fli-dark">{name}</p>
                <p className="text-[10px] text-fli-gray/60">
                  {name === 'TDS' ? 'Tenancy Deposit Scheme' : name === 'DPS' ? 'Deposit Protection Service' : 'Deposit Protection'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Features ───────── */
function Features() {
  const { ref, visible } = useInView();
  const features = [
    { tag: 'Evidence', tagColor: 'bg-emerald-50 text-emerald-700', title: 'GPS-verified photo capture', desc: 'Every photo timestamped, geotagged and fingerprinted. Tamper-proof evidence that stands up to deposit scheme scrutiny.', icon: <LocationPin size={32} />, span: 'lg:col-span-7' },
    { tag: 'AI Analysis', tagColor: 'bg-violet-50 text-violet-700', title: 'AI-powered condition reports', desc: 'Draft reports generated from your inspection photos. Review, edit and share. No more writing from scratch.', icon: <Analytics size={32} />, span: 'lg:col-span-5' },
    { tag: 'Journal', tagColor: 'bg-amber-50 text-amber-700', title: 'Tenancy timeline & journal', desc: 'Every message, issue and evidence entry in one chronological, tamper-evident timeline.', icon: <VerifiedDoc size={32} />, span: 'lg:col-span-5' },
    { tag: 'Compliance', tagColor: 'bg-sky-50 text-sky-700', title: 'Compliance tracking & alerts', desc: 'Gas safety, EICR, EPC and deposit protection deadlines tracked automatically with expiry reminders.', icon: <ShieldCheck size={32} />, span: 'lg:col-span-7' },
    { tag: 'Inspections', tagColor: 'bg-rose-50 text-rose-700', title: 'Guided mobile inspections', desc: 'Check-in, mid-term and check-out inspections with step-by-step prompts on any device.', icon: <Checklist size={32} />, span: 'lg:col-span-7' },
    { tag: 'Reports', tagColor: 'bg-teal-50 text-teal-700', title: 'Branded PDF reports', desc: 'Professional outputs formatted for TDS, DPS or MyDeposits. White-label with your agency branding.', icon: <Report size={32} />, span: 'lg:col-span-5' },
  ];

  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className={`transition-all duration-700 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-fli-dark">
            Everything you need for fair tenancies
          </h2>
          <p className="mt-3 max-w-xl text-lg font-light text-fli-gray">
            Six integrated tools that work together to protect every party in a tenancy.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
          {features.map((f, i) => (
            <div key={f.title} className={`feature-card flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 ${f.span} ${visible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${200 + i * 100}ms` }}>
              <div>
                <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase ${f.tagColor}`}>
                  {f.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-fli-dark sm:text-2xl">{f.title}</h3>
                <p className="mt-2 leading-relaxed font-light text-fli-gray">{f.desc}</p>
              </div>
              <div className="mt-6 aspect-video rounded-xl bg-gradient-to-br from-fli-offwhite to-white border border-gray-100 flex items-center justify-center feature-icon-wrapper transition-transform">
                {f.icon}
              </div>
              <a href="#" className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fli-red hover:text-fli-red-dark transition-colors">
                Learn more
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h8m-4-4l4 4-4 4" /></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Evidence Section ───────── */
function Evidence() {
  const { ref, visible } = useInView();
  const checks = [
    'In-app capture only — no gallery uploads',
    'GPS-geotagged to exact location',
    'Timestamped with verified server time',
    'Checksum verification (SHA-256)',
    'Immutable — no edits or deletions possible',
    'Export-ready for TDS, DPS, MyDeposits',
  ];

  return (
    <section id="evidence" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div className={`${visible ? 'animate-slide-left' : 'opacity-0'}`}>
            <p className="text-xs font-semibold tracking-[0.15em] text-fli-red uppercase mb-4">Forensic-grade evidence</p>
            <h2 className="text-[30px] leading-[1.12] font-medium tracking-tight text-fli-dark sm:text-[40px] lg:text-[48px]">
              Not just photos.{' '}
              <span className="font-display font-normal text-fli-gray italic">Tamper-proof evidence.</span>
            </h2>
            <ul className="mt-8 space-y-3.5">
              {checks.map((c, i) => (
                <li key={i} className="evidence-item flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-fli-green/10 flex items-center justify-center shrink-0">
                    <CheckMark size={14} />
                  </div>
                  <span className="font-light text-fli-gray">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right illustration */}
          <div className={`${visible ? 'animate-slide-right delay-200' : 'opacity-0'}`}>
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-fli-dark to-fli-dark-deeper p-6 sm:p-8 overflow-hidden">
              {/* Floating evidence cards */}
              <div className="animate-float space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <LocationPin size={20} />
                    <span className="text-xs text-white/70 font-mono">51.5074° N, 0.1278° W</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-fli-green/20 text-fli-green px-2 py-0.5 rounded-full font-medium">GPS Verified</span>
                    <span className="text-[10px] bg-fli-blue/20 text-fli-blue px-2 py-0.5 rounded-full font-medium">SHA-256</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <VerifiedDoc size={20} />
                    <span className="text-xs text-white/70">Check-in Report</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ApprovedBadge size={16} />
                    <span className="text-[10px] text-fli-green font-medium">Tamper-proof · Immutable</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10 flex items-center gap-3">
                  <MagnifyingGlass size={20} />
                  <div>
                    <span className="text-xs text-white/70 font-mono block">2025-06-15 14:32:07 UTC</span>
                    <span className="text-[10px] text-white/40">Server-verified timestamp</span>
                  </div>
                </div>
              </div>

              {/* Decorative shield */}
              <div className="absolute bottom-4 right-4 opacity-10">
                <ShieldCheck size={120} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Stats ───────── */
function Stats() {
  const { ref, visible } = useInView();
  return (
    <section className="border-y border-gray-100 bg-fli-offwhite px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-16 lg:gap-28">
          {[
            { end: 30000, suffix: '+', label: 'Deposit disputes raised every year in the UK', icon: <Report size={24} /> },
            { end: 36, suffix: '%', label: 'Of tenants report unfair deductions', icon: <ShieldCheck size={24} /> },
            { end: 400, prefix: '£', suffix: 'M+', label: 'Lost annually to poor or incomplete evidence', icon: <Analytics size={24} /> },
          ].map((s, i) => (
            <div key={i} className={`text-center ${visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
              <div className="flex justify-center mb-3 opacity-40">{s.icon}</div>
              <p className="font-display text-4xl font-medium tracking-tight text-fli-dark sm:text-5xl">
                <Counter end={s.end} prefix={s.prefix || ''} suffix={s.suffix} />
              </p>
              <p className="mt-2 max-w-[200px] mx-auto text-sm font-light text-fli-gray">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── How It Works ───────── */
function HowItWorks() {
  const { ref, visible } = useInView();
  const steps = [
    { num: '01', title: 'Create Property', desc: 'Add your property details, rooms and key areas. Set up in minutes.', icon: <House size={36} /> },
    { num: '02', title: 'Inspect & Capture', desc: 'Use guided prompts to capture GPS-verified, timestamped photos room by room.', icon: <MagnifyingGlass size={36} /> },
    { num: '03', title: 'AI Analysis', desc: 'Our AI drafts condition notes, detects damage, and scores cleanliness automatically.', icon: <Analytics size={36} /> },
    { num: '04', title: 'Generate Report', desc: 'Export professional PDF reports ready for deposit scheme submission.', icon: <VerifiedDoc size={36} /> },
  ];

  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs font-semibold tracking-[0.15em] text-fli-red uppercase mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-fli-dark">
            Four steps to tamper-proof evidence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className={`relative ${visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${200 + i * 120}ms` }}>
              {i < 3 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%-8px)] w-[calc(100%-56px)] h-px bg-gradient-to-r from-fli-red/30 to-transparent z-0" />
              )}
              <div className="relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-fli-red/20 hover:shadow-lg hover:shadow-fli-red/5 transition-all duration-300">
                <span className="text-[11px] font-bold text-fli-red/40 tracking-wider">{s.num}</span>
                <div className="mt-3 mb-4 h-14 w-14 rounded-xl bg-fli-offwhite flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-fli-dark">{s.title}</h3>
                <p className="mt-2 text-sm font-light text-fli-gray leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials ───────── */
function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useInView();
  const testimonials = [
    { quote: "Finally, a platform that makes deposit disputes a thing of the past. The evidence is so clear that our tenants and landlords reach fair agreements without the stress.", author: 'James Wilson', role: 'Director, Premier Lettings Ltd' },
    { quote: "We switched from paper inventories to Fair Let Inventory and our dispute rate dropped by 80%. The AI comparison alone saved us dozens of hours per month.", author: 'Sarah Mitchell', role: 'Property Manager, City Estates' },
    { quote: "As a tenant I finally have proof of how I left the property. No more 'he said she said'. The GPS timestamps mean everything is verifiable.", author: 'David Okonkwo', role: 'Tenant, London' },
  ];

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="bg-fli-dark px-4 py-20 sm:px-6 sm:py-28 lg:px-8 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-4xl">
        <h2 className={`mb-14 text-center text-3xl font-medium tracking-tight text-white sm:text-4xl ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          What people say
        </h2>

        <div className="relative min-h-[220px] sm:min-h-[200px]">
          {testimonials.map((t, i) => (
            <div key={i} className={`absolute inset-0 transition-all duration-700 ${i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
              <div className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-fli-red" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote>
                  <p className="font-display text-2xl leading-relaxed font-normal tracking-tight text-white italic sm:text-3xl lg:text-[34px]">
                    "{t.quote}"
                  </p>
                </blockquote>
                <footer className="mt-8">
                  <p className="text-base font-medium text-white">— {t.author}</p>
                  <p className="mt-1 text-sm text-white/50">{t.role}</p>
                </footer>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── AI Marquee ───────── */
function AIMarquee() {
  const rows = [
    ['AI condition analysis', 'Damage detection', 'Cleanliness scoring (1–10)', 'Fair wear assessment', 'Check-in vs check-out comparison'],
    ['Smart Test Mode for fixtures', 'DIY tips and repair estimates', 'Smart meter OCR', 'AI-powered chat support (Tobby)', 'Room-by-room summaries'],
    ['AI damage heatmaps', 'Automatic floorplan generation', 'Enhanced mould detection', 'Deposit scheme API integrations'],
    ['Predictive maintenance alerts', 'Natural language evidence search', 'Automated compliance checking', 'Smart scheduling recommendations'],
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mb-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-sm text-fli-red font-medium mb-3">
          <Analytics size={18} />
          AI-Powered
        </div>
        <h2 className="font-display text-4xl font-normal tracking-tight text-fli-dark italic sm:text-5xl lg:text-6xl">
          Intelligence at every step
        </h2>
      </div>

      <div className="flex flex-col items-center gap-3" style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)' }}>
        {/* Mobile: wrapped pills */}
        <div className="flex flex-wrap justify-center gap-2.5 px-4 md:hidden">
          {rows[0].concat(rows[1].slice(0, 3)).map(t => (
            <span key={t} className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm whitespace-nowrap text-fli-gray">{t}</span>
          ))}
        </div>

        {/* Desktop: marquee rows */}
        {rows.map((row, ri) => (
          <div key={ri} className={`marquee-row mx-auto hidden w-full max-w-7xl overflow-hidden md:block ${ri % 2 === 1 ? 'marquee-reverse' : ''}`}>
            <div className="marquee-track flex w-max will-change-transform" style={{ ['--duration' as string]: `${50 + ri * 5}s` } as React.CSSProperties}>
              {[0, 1].map(copy => (
                <div key={copy} className="flex shrink-0 gap-2.5 pr-2.5" aria-hidden={copy === 1}>
                  {[...row, ...row].map((t, i) => (
                    <span key={`${t}-${i}`} className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm whitespace-nowrap text-fli-gray hover:border-fli-red/30 hover:text-fli-dark transition-colors">{t}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 px-4 text-center text-xs text-fli-gray/50 sm:px-6">
        All AI outputs are suggestions only. Human review required. Cost estimates are indicative, not quotes or legal advice.
      </p>
    </section>
  );
}

/* ───────── Icon Showcase ───────── */
function IconShowcase() {
  const { ref, visible } = useInView();
  const categories = [
    { name: 'Verification', color: 'bg-fli-green/10 text-fli-green-dark', icons: [
      { Icon: CheckMark, label: 'Check Mark' }, { Icon: ApprovedBadge, label: 'Approved' },
      { Icon: ShieldCheck, label: 'Protected' }, { Icon: VerifiedDoc, label: 'Verified Doc' },
    ]},
    { name: 'Location', color: 'bg-fli-blue/10 text-fli-blue-dark', icons: [
      { Icon: LocationPin, label: 'Location' }, { Icon: MapMarker, label: 'Map Marker' },
      { Icon: HouseLocation, label: 'Property Pin' }, { Icon: GlobalLocation, label: 'Global' },
    ]},
    { name: 'Property', color: 'bg-fli-red/10 text-fli-red', icons: [
      { Icon: House, label: 'House' }, { Icon: Building, label: 'Building' },
      { Icon: Apartment, label: 'Apartment' }, { Icon: PropertyDetails, label: 'Details' },
    ]},
    { name: 'Inspection', color: 'bg-amber-50 text-amber-700', icons: [
      { Icon: MagnifyingGlass, label: 'Search' }, { Icon: Checklist, label: 'Checklist' },
      { Icon: Report, label: 'Report' }, { Icon: Analytics, label: 'Analytics' },
    ]},
  ];

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 bg-fli-offwhite border-y border-gray-100">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className={`text-center mb-14 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs font-semibold tracking-[0.15em] text-fli-red uppercase mb-3">Visual System</p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-fli-dark">
            Purpose-built icon library
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-base font-light text-fli-gray">
            16 custom icons designed for consistency across every touchpoint — from dashboards to PDF reports.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <div key={cat.name} className={`${visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${200 + ci * 100}ms` }}>
              <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase mb-4 ${cat.color}`}>
                {cat.name}
              </span>
              <div className="grid grid-cols-2 gap-3">
                {cat.icons.map(({ Icon, label }) => (
                  <div key={label} className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center gap-2 hover:border-fli-red/20 hover:shadow-md transition-all duration-300 group">
                    <div className="transition-transform group-hover:scale-110">
                      <Icon size={36} />
                    </div>
                    <span className="text-[10px] font-medium text-fli-gray/60 text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Final CTA ───────── */
function FinalCTA() {
  const { ref, visible } = useInView();
  return (
    <section className="bg-fli-red px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <div className={`${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-6">
            <FLILogoMono className="h-14 w-auto" color="white" />
          </div>
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
            Property evidence should be fair.
          </h2>
          <p className="mt-3 font-display text-xl font-normal text-white/70 italic sm:text-2xl">
            Let's make it fair.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://app.fairletinventory.co.uk/signup" target="_blank" rel="noopener noreferrer"
              className="btn-white h-12 px-8 rounded-xl text-base font-medium inline-flex items-center gap-2">
              Start Free Trial
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h8m0 0l-4-4m4 4l-4 4" /></svg>
            </a>
            <a href="#features" className="h-12 px-8 rounded-xl text-base font-medium inline-flex items-center gap-2 text-white/80 border border-white/20 hover:bg-white/10 transition-all">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="bg-fli-dark-deeper px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="shrink-0">
            <div className="flex items-center gap-2.5">
              <FLILogoIcon size={32} />
              <span className="text-sm font-semibold text-white tracking-tight">Fair Let Inventory</span>
            </div>
            <p className="mt-3 text-sm text-white/50 max-w-xs">
              The UK's inventory and evidence infrastructure for property inspections.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-3 space-y-2">
                {['About', 'Help', 'Contact'].map(l => (
                  <li key={l}><a href={`/${l.toLowerCase()}`} className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Legal</h4>
              <ul className="mt-3 space-y-2">
                <li><a href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Product</h4>
              <ul className="mt-3 space-y-2">
                {['Features', 'How It Works', 'Pricing'].map(l => (
                  <li key={l}><a href={`/${l.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">© 2026 Fair Let Inventory Ltd. All rights reserved.</p>
          <p className="mx-auto mt-4 max-w-3xl text-xs text-white/30 leading-relaxed">
            Fair Let Inventory Ltd is an independent evidence platform for property inspections. We are not a government-authorised
            tenancy deposit protection scheme, a dispute resolution service, or a provider of legal advice. Reports produced by Fair
            Let Inventory are designed to support, not replace, the processes of TDS, DPS, MyDeposits and any appointed adjudicator.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-xs text-white/20">
            Fair Let Inventory Ltd, registered in England and Wales, company number 16916919.
            Registered office: 128 City Road, London, EC1V 2NX. Contact: support@fairletinventory.co.uk
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════ App ═══════════════════ */
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Evidence />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <AIMarquee />
        <IconShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
