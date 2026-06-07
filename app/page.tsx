'use client';

import React, { useState } from 'react';
import {
  Menu,
  X,
  Play,
  ArrowRight,
  Palette,
  TrendingUp,
  BarChart3,
  Check,
  Zap,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

/* ──────────────────────────────────────────
   Ascend — Premium Meta Ads Agency Landing Page
   Single-file, self-contained Next.js page
   ────────────────────────────────────────── */

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: '', url: '', spend: '' });

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* ═══════════════════════════════════════════
          1. STICKY NAVIGATION
         ═══════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-[#111111]">
                ASCEND
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#111111] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-gray-600 hover:text-[#111111] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-2.5 bg-[#111111] text-white text-sm font-semibold rounded-lg"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════════
          2. HERO SECTION
         ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/60 text-emerald-700 text-sm font-medium mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Now accepting Q3 brand partners
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111111] leading-[1.1]">
              Scale your brand on Meta{' '}
              <span className="relative inline-block">
                with mathematical
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8C50 2 100 2 150 5C200 8 250 8 298 4" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              precision.
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We engineer data-driven creative, obsessively optimize ROAS, and deploy
              algorithmic media buying systems that turn ad spend into predictable revenue.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white text-base font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-[#111111] text-base font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-current" />
                See How It Works
              </a>
            </div>

            {/* Quick social proof strip */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                $40M+ in tracked revenue
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                90-day payback guarantee
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                Avg. 3.8x ROAS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. SERVICES GRID
         ═══════════════════════════════════════════ */}
      <section id="services" className="py-24 sm:py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Precision-engineered for Meta performance
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Three integrated disciplines. One relentless focus: turning every impression into profit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group p-8 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.15)]">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <Palette className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                Creative Engineering
              </h3>
              <p className="text-gray-500 leading-relaxed">
                High-converting Meta ad hooks, scroll-stopping video iterations, and
                iterative creative testing frameworks built for scale.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-xl border border-gray-200 hover:border-sky-300 transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(14,165,233,0.15)]">
              <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-6 group-hover:bg-sky-100 transition-colors">
                <TrendingUp className="w-6 h-6 text-sky-500" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                Algorithmic Scaling
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Expert media buying, pixel configuration, and custom lookalike architectures
                that compound performance as you grow.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.15)]">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                Attribution Modeling
              </h3>
              <p className="text-gray-500 leading-relaxed">
                First-party data tracking, server-side API integrations, and transparent
                ROI dashboards so you see every dollar at work.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. SOCIAL PROOF / TESTIMONIALS
         ═══════════════════════════════════════════ */}
      <section id="testimonials" className="py-24 sm:py-28 border-t border-gray-100 bg-gray-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Numbers that speak louder than pitches
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Verified results from brands we partner with month over month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Metric Card 1 */}
            <div className="p-8 rounded-xl bg-white border border-gray-200">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight">
                4.2x
              </div>
              <div className="mt-1 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                ROAS — E-commerce Brand
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                "Ascend restructured our entire Meta funnel. Within 6 weeks we went from
                unprofitable spend to a 4.2x blended ROAS."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-bold text-emerald-700">
                  JM
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111111]">Jordan M.</div>
                  <div className="text-xs text-gray-400">CMO, Lumen Athletics</div>
                </div>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="p-8 rounded-xl bg-white border border-gray-200">
              <div className="text-4xl sm:text-5xl font-extrabold text-sky-500 tracking-tight">
                312%
              </div>
              <div className="mt-1 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Revenue Increase — SaaS
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                "Their creative testing engine is relentless. We scaled from $5K/day to
                $40K/day while improving our CPA by 34%."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sm font-bold text-sky-700">
                  SK
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111111]">Sarah K.</div>
                  <div className="text-xs text-gray-400">VP Growth, Finova</div>
                </div>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="p-8 rounded-xl bg-white border border-gray-200">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight">
                $2.1M
              </div>
              <div className="mt-1 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Tracked Revenue — DTC Skincare
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                "Transparent dashboards, first-party tracking, and a team that actually
                understands attribution. Game changer."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-bold text-emerald-700">
                  AR
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111111]">Ava R.</div>
                  <div className="text-xs text-gray-400">Founder, Purely Botanical</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. PRICING & TIERS
         ═══════════════════════════════════════════ */}
      <section id="pricing" className="py-24 sm:py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Transparent pricing, elite execution
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              No hidden fees. No surprise retainers. Just performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Starter */}
            <div className="p-8 rounded-xl border border-gray-200 bg-white">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Starter Retainer
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#111111]">$3,500</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                For brands spending up to $15K/mo on Meta ads.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  '2 fresh creative hooks per week',
                  'Campaign setup & daily monitoring',
                  'Weekly optimization sprints',
                  'Basic pixel & event tracking',
                  'Monthly performance report',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 block w-full text-center px-6 py-3 border border-gray-300 text-[#111111] text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Scale — Featured */}
            <div className="relative p-8 rounded-xl bg-white">
              {/* Gradient border via wrapper */}
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-emerald-400 via-sky-400 to-emerald-500" />
              <div className="absolute inset-[1px] rounded-[11px] bg-white" />

              <div className="relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide mb-4">
                  Most Popular
                </div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Scale Tier
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#111111]">$6,500</span>
                  <span className="text-gray-400">/mo</span>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  For growth-stage brands spending $15K–$75K/mo.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Everything in Starter',
                    '5 creative hooks + video iterations',
                    'Custom lookalike & LLA architectures',
                    'Server-side API & CAPI setup',
                    'Bi-weekly strategy calls',
                    'Dedicated account lead',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 block w-full text-center px-6 py-3 bg-[#111111] text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Book a Strategy Call
                </a>
              </div>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-xl border border-gray-200 bg-white">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                Enterprise Growth
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#111111]">$12,000</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                For established brands spending $75K+/mo at scale.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Everything in Scale',
                  'Unlimited creative iterations',
                  'Full-funnel attribution modeling',
                  'Custom dashboard & real-time reporting',
                  'Weekly strategy calls + Slack support',
                  'Creative director involvement',
                  'Quarterly business reviews',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 block w-full text-center px-6 py-3 border border-gray-300 text-[#111111] text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. FOOTER CTA SECTION
         ═══════════════════════════════════════════ */}
      <section id="contact" className="bg-[#111111] text-white py-24 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to turn ad spend into a growth engine?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Tell us about your brand. We will audit your current Meta setup and show you exactly
            where the revenue is hiding — no pitch, no pressure.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto"
          >
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full sm:flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
            />
            <input
              type="url"
              placeholder="Brand URL"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              className="w-full sm:flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
            />
            <input
              type="text"
              placeholder="Monthly Ad Spend"
              value={form.spend}
              onChange={(e) => setForm({ ...form, spend: e.target.value })}
              className="w-full sm:flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-500 transition-colors whitespace-nowrap"
            >
              Get My Audit
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            We typically respond within 24 hours. No spam, ever.
          </p>
        </div>

        {/* Footer bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-bold tracking-tight">ASCEND</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>© {new Date().getFullYear()} Ascend Media</span>
          </div>
        </div>
      </section>
    </main>
  );
}
