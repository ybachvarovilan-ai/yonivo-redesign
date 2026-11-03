'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b border-border backdrop-blur-xl transition-colors duration-300',
        scrolled ? 'bg-bg/95' : 'bg-bg/80'
      )}
    >
      <nav className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-3xl font-bold tracking-tight text-primary">
          yonivo<span className="text-accent">.</span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-display text-secondary transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary !px-6 !py-2.5">
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}