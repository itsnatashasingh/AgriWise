'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Leaf,
  Menu,
  MessageCircle,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sprout,
  X,
} from 'lucide-react'

const navItems = [
  ['About', '#about'],
  ['Services', '#services'],
  ['How it works', '#how-it-works'],
  ['Features', '#features'],
  ['Contact', '#contact'],
]

const services = [
  { icon: BarChart3, title: 'Soil intelligence', text: 'Turn soil readings into a clear picture of what your field needs next.', tone: 'mint' },
  { icon: Sprout, title: 'Crop recommendations', text: 'Get practical crop suggestions matched to your soil, season, and goals.', tone: 'blue' },
  { icon: ScanLine, title: 'Disease detection', text: 'Spot plant health issues early with a quick photo and AI-powered analysis.', tone: 'yellow' },
]

const features = ['Personalized field insights', 'Early disease warnings', 'Simple, actionable explanations', 'Recommendations for every season']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight" aria-label="AgriWise home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Leaf className="size-5" /></span>
            <span className="text-lg">Agri<span className="text-primary">Wise</span></span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={label} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:flex">Talk to an advisor <ArrowRight className="size-4" /></a>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-medium">{label}</a>)}</nav>}
      </header>

      <section id="home" className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3 py-1.5 text-xs font-semibold text-primary"><span className="size-1.5 rounded-full bg-primary" /> Smarter farming starts here</div>
            <h1 className="max-w-2xl text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.055em] md:text-6xl lg:text-7xl">Grow with <span className="text-primary">confidence.</span></h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">AgriWise turns your field data into clear, practical advice so you can make better decisions, protect your crops, and grow more sustainably.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Explore our services <ArrowRight className="size-4" /></a><a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 font-semibold transition-colors hover:bg-muted">See how it works <ChevronDown className="size-4" /></a></div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Built for real fields</span><span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Easy to understand</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:mr-0">
            <div className="absolute -right-8 -top-8 size-40 rounded-full bg-accent/70 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-xl shadow-primary/10 sm:p-6">
              <div className="flex items-center justify-between"><div><p className="text-xs font-medium text-muted-foreground">FIELD SNAPSHOT</p><h2 className="mt-1 text-xl font-semibold">North field · Today</h2></div><span className="flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary"><span className="size-1.5 rounded-full bg-primary" /> Healthy</span></div>
              <div className="mt-6 grid grid-cols-3 gap-2"><div className="rounded-xl bg-muted p-3"><p className="text-xs text-muted-foreground">Moisture</p><p className="mt-2 text-xl font-semibold">62<span className="text-sm">%</span></p></div><div className="rounded-xl bg-muted p-3"><p className="text-xs text-muted-foreground">pH level</p><p className="mt-2 text-xl font-semibold">6.8</p></div><div className="rounded-xl bg-muted p-3"><p className="text-xs text-muted-foreground">Nitrogen</p><p className="mt-2 text-xl font-semibold">Good</p></div></div>
              <div className="mt-4 rounded-2xl bg-primary p-5 text-primary-foreground"><div className="flex items-start justify-between"><div><p className="text-sm font-medium opacity-80">AI recommendation</p><p className="mt-2 max-w-xs text-lg font-semibold leading-snug">Your field is ready for maize planting.</p></div><Sprout className="size-8 opacity-80" /></div><div className="mt-5 flex items-center justify-between border-t border-primary-foreground/20 pt-3 text-xs"><span>Based on 12 data points</span><span className="font-semibold">View details →</span></div></div>
              <div className="mt-5 flex items-center gap-3 rounded-xl border border-border p-3"><div className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary"><ShieldCheck className="size-5" /></div><div><p className="text-sm font-semibold">Your crops are protected</p><p className="text-xs text-muted-foreground">No disease detected in latest scan</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-muted/40"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-20"><div><p className="eyebrow">About AgriWise</p><h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight md:text-4xl">Technology that speaks your field&apos;s language.</h2></div><div className="max-w-2xl"><p className="text-lg leading-8 text-muted-foreground">Farming is full of decisions. We make the important ones easier. AgriWise combines soil science, agricultural knowledge, and artificial intelligence in one simple advisor built to support farmers at every step.</p><p className="mt-5 leading-7 text-muted-foreground">Whether you are preparing a new field or checking on a crop, our goal is to give you useful insight without the complicated dashboards.</p></div></div></section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">What we do</p><h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Your field. A little more understood.</h2></div><p className="max-w-sm text-muted-foreground">One connected toolkit for healthier crops and more confident decisions.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{services.map(({ icon: Icon, title, text, tone }) => <article key={title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"><div className={`service-icon ${tone}`}><Icon className="size-6" /></div><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a></article>)}</div></section>

      <section id="how-it-works" className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><div className="max-w-xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">How it works</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">From field data to your next best decision.</h2></div><div className="mt-12 grid gap-8 md:grid-cols-3">{[['01', 'Share your data', 'Add soil readings, crop details, or a photo of a plant.'], ['02', 'Let AI do the thinking', 'Our model connects the dots using agricultural patterns and insight.'], ['03', 'Take action', 'Get a clear recommendation you can use in the field today.']].map(([number, title, text]) => <div key={number} className="border-t border-primary-foreground/25 pt-5"><p className="font-mono text-sm opacity-60">{number}</p><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 max-w-xs leading-7 opacity-75">{text}</p></div>)}</div></div></section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid items-center gap-14 lg:grid-cols-2"><div><p className="eyebrow">Designed for the real world</p><h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">More insight. Less guesswork.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">No agricultural degree or data team required. AgriWise gives you the context behind every recommendation, so you stay in control.</p><ul className="mt-8 grid gap-4">{features.map((feature) => <li key={feature} className="flex items-center gap-3 font-medium"><span className="flex size-6 items-center justify-center rounded-full bg-accent text-primary"><Check className="size-4" /></span>{feature}</li>)}</ul></div><div className="rounded-[2rem] border border-border bg-muted/50 p-5 sm:p-8"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Microscope className="size-5" /></div><div><p className="font-semibold">Field health overview</p><p className="text-xs text-muted-foreground">Updated just now</p></div></div><div className="mt-8 flex items-end gap-2"><span className="text-5xl font-semibold tracking-tight">84</span><span className="mb-2 text-sm text-muted-foreground">/ 100 field score</span></div><div className="mt-5 h-3 overflow-hidden rounded-full bg-border"><div className="h-full w-[84%] rounded-full bg-primary" /></div><div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-xl bg-card p-4"><p className="text-xs text-muted-foreground">Crop fit</p><p className="mt-2 font-semibold text-primary">Excellent</p></div><div className="rounded-xl bg-card p-4"><p className="text-xs text-muted-foreground">Risk level</p><p className="mt-2 font-semibold">Low</p></div></div></div></div></section>

      <section id="contact" className="mx-5 mb-20 overflow-hidden rounded-[2rem] bg-accent lg:mx-auto lg:max-w-7xl"><div className="grid gap-10 px-6 py-12 sm:px-12 lg:grid-cols-[1fr_.8fr] lg:px-16 lg:py-16"><div><p className="eyebrow">Start growing smarter</p><h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight md:text-4xl">Have a question about your field?</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Tell us what you are working on and we&apos;ll help you find the right next step.</p><div className="mt-8 flex items-center gap-3 text-sm font-semibold text-primary"><MessageCircle className="size-5" /> hello@agriwise.ai</div></div><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="rounded-2xl bg-card p-5 shadow-sm sm:p-6"><label className="text-sm font-medium" htmlFor="email">Your email</label><input id="email" type="email" required placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" /><label className="mt-5 block text-sm font-medium" htmlFor="message">How can we help?</label><textarea id="message" required rows={3} placeholder="Tell us a little about your farm..." className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" /><button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-semibold text-primary-foreground">{submitted ? 'Message received' : 'Send message'} <ArrowRight className="size-4" /></button></form></div></section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-2 font-semibold text-foreground"><span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Leaf className="size-4" /></span>AgriWise</div><p>Making every field decision count.</p><p>© 2025 AgriWise AI</p></div></footer>
    </main>
  )
}

// The service tones keep icon backgrounds distinct while staying within the compact palette.
