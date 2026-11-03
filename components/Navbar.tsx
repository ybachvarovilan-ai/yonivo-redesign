'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { servicesData } from '@/lib/services-data';

const mainLinks = [
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const magento = servicesData.filter(s => s.category === 'Magento');
  const servers = servicesData.filter(s => s.category === 'Servers and security');
  const beyond = servicesData.filter(s => s.category === 'Beyond Magento');

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-colors duration-300',
        scrolled ? 'bg-bg/95' : 'bg-[#131722]/90'
      )}
    >
      <nav className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-3xl font-bold tracking-tight text-white flex items-center gap-2">
          <i className="fas fa-code text-magento"></i>
          yonivo<span className="text-magento">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          
          {/* Mega Menu Dropdown */}
          <div className="relative group">
            <button className="font-display text-white transition-colors hover:text-magento flex items-center gap-1.5 py-2 border-b-2 border-transparent group-hover:border-magento">
              Services
              <i className="fas fa-chevron-down text-[0.6rem] transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Content */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-[850px] rounded-2xl border border-white/10 bg-[#131722] p-8 shadow-2xl flex gap-8">
                
                {/* Columns */}
                <div className="flex-1 grid grid-cols-3 gap-8">
                  
                  {/* Col 1 - Magento */}
                  <div>
                    <h4 className="font-display text-white font-semibold mb-4 flex items-start gap-2 h-12">
                      <i className="fas fa-layer-group text-magento text-sm mt-1"></i> 
                      <span className="leading-tight">Magento</span>
                    </h4>
                    <ul className="space-y-4">
                      {magento.map(s => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="block group/item hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <div className="text-white font-medium text-sm group-hover/item:text-magento transition-colors leading-snug">{s.title}</div>
                            <div className="text-secondary text-xs mt-1 line-clamp-2 leading-relaxed">{s.subtitle}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 2 - Servers and security */}
                  <div>
                    <h4 className="font-display text-white font-semibold mb-4 flex items-start gap-2 h-12">
                      <i className="fas fa-server text-magento text-sm mt-1"></i> 
                      <span className="leading-tight">Servers and<br/>security</span>
                    </h4>
                    <ul className="space-y-4">
                      {servers.map(s => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="block group/item hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <div className="text-white font-medium text-sm group-hover/item:text-magento transition-colors leading-snug">{s.title}</div>
                            <div className="text-secondary text-xs mt-1 line-clamp-2 leading-relaxed">{s.subtitle}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 3 - Beyond Magento */}
                  <div>
                    <h4 className="font-display text-white font-semibold mb-4 flex items-start gap-2 h-12">
                      <i className="fas fa-rocket text-magento text-sm mt-1"></i> 
                      <span className="leading-tight">Beyond<br/>Magento</span>
                    </h4>
                    <ul className="space-y-4">
                      {beyond.map(s => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="block group/item hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <div className="text-white font-medium text-sm group-hover/item:text-magento transition-colors leading-snug">{s.title}</div>
                            <div className="text-secondary text-xs mt-1 line-clamp-2 leading-relaxed">{s.subtitle}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Right Callout Box */}
                <div className="w-[240px] bg-[#1a2130] rounded-xl p-6 border border-white/5 flex flex-col justify-center">
                  <h4 className="font-display text-white font-semibold mb-2">Not sure where to start?</h4>
                  <p className="text-secondary text-sm mb-6 leading-relaxed">Describe the problem and we'll tell you where it sits and what fixing it involves.</p>
                  <Link href="/services/all" className="text-white font-medium text-sm border-b border-magento pb-1 inline-block w-fit hover:text-magento transition-colors">
                    See all services
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} className="font-display text-white hover:text-magento transition-colors">
              {l.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-3 text-sm font-display text-secondary ml-4 border-l border-white/10 pl-6">
            <span className="text-white cursor-pointer">EN</span>
            <span className="hover:text-white cursor-pointer transition-colors">BG</span>
          </div>

          <a href="/contact" className="btn bg-magento text-white hover:bg-magento-light px-6 py-2.5 rounded-md font-medium shadow-lg ml-2">
            Book a free consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white text-xl" onClick={() => setMobileOpen(!mobileOpen)}>
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#131722] px-6 py-4 space-y-4 h-screen overflow-y-auto">
          <div className="font-display text-sm font-semibold text-magento mb-2">Services</div>
          {servicesData.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block pl-4 text-white hover:text-magento transition-colors text-sm py-1"
            >
              {s.title}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-4 flex flex-col">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-magento transition-colors font-display text-lg"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn bg-magento text-white mt-2">
              Book a free consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}