'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Maintenance from '@/components/Maintenance';
import Process from '@/components/Process';
import PricingFaq from '@/components/PricingFaq';
import Footer from '@/components/Footer';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

const stats = [
  { value: '11', label: 'countries' },
  { value: '25+', label: 'brands served' },
  { value: 'B2C & B2B', label: 'retail & trade' },
];

const pills = [
  { icon: 'fa-code', label: 'Custom modules' },
  { icon: 'fa-sync', label: 'ERP / CRM sync' },
  { icon: 'fa-server', label: 'Server ops' },
  { icon: 'fa-tachometer-alt', label: 'Speed & Core Web Vitals' },
  { icon: 'fa-shield-alt', label: 'Security patches' },
  { icon: 'fa-cloud', label: 'Cloudflare & firewall' },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0">
          <HeroScene />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Certified Hyvä Theme Experts
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl drop-shadow-2xl">
              One team, from the{' '}
              <span className="relative text-accent after:absolute after:-bottom-1 after:left-0 after:h-1.5 after:w-full after:rounded after:bg-accent/20 after:content-['']">
                storefront
              </span>{' '}
              to the{' '}
              <span className="relative text-magento after:absolute after:-bottom-1 after:left-0 after:h-1.5 after:w-full after:rounded after:bg-magento/20 after:content-['']">
                server
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-secondary drop-shadow-lg">
              We build, integrate, and run Magento 2 stores for retailers and brands around the globe — from custom modules to the
              servers underneath.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-magento text-lg px-8 py-4">
                Start a project <i className="fas fa-arrow-right" />
              </a>
              <a href="#services" className="btn btn-outline text-lg px-8 py-4 bg-bg/50 backdrop-blur-sm border-white/20 hover:border-accent">Explore services</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label} className="drop-shadow-lg">
                  <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                  <div className="text-sm text-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute -left-16 -top-16 h-64 w-64 animate-pulse-glow rounded-full bg-magento/20 blur-3xl" />
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <i className="fas fa-cubes text-magento" /> Full-stack Magento care
            </h3>
            <div className="my-6 flex flex-wrap gap-2">
              {pills.map((p) => (
                <span key={p.label} className="pill hover:border-magento hover:text-magento transition-colors cursor-default bg-surface/80">
                  <i className={`fas ${p.icon} text-[0.7rem] text-magento`} /> {p.label}
                </span>
              ))}
            </div>
            <p className="border-l-2 border-magento pl-4 text-sm italic text-secondary">
              “Most Magento problems sit between layers — checkout slowed by cache rules, ERP sync stalled on cron, extensions breaking
              after upgrades. We fix it without bouncing between suppliers.”
            </p>
          </motion.div>
        </div>
      </section>

      <TrustBar />
      <Services />
      <Clients />
      <Maintenance />
      <Process />
      <PricingFaq />
      <Footer />
    </>
  );
}