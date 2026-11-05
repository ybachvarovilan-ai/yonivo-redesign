'use client';

import Link from 'next/link';

export default function Footer() {
  const steps = [
    'Share a few details about your store and your goals.',
    'Tell us a little about your store and what you have in mind.',
    'Send us your store’s address with a short note on your goals.'
  ];

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/5 pt-24 pb-8 mt-auto backdrop-blur-sm">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="section-title text-4xl md:text-5xl">
              <span className="accent-underline">Tell us about your store</span>
            </h2>
            <p className="mt-6 text-xl text-secondary">
              You talk directly to the developer who’ll do the work.
            </p>
            
            <div className="mt-12 p-8 rounded-3xl bg-surface/60 border border-white/10 backdrop-blur-md">
              <h3 className="font-display text-xl font-semibold mb-4 text-magento">What happens next</h3>
              <ul className="space-y-4">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-magento/20 text-magento text-sm font-bold font-display">
                      {i + 1}
                    </span>
                    <span className="text-secondary text-sm pt-0.5">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">Store Address / URL</label>
                <input type="text" placeholder="https://yourstore.com" className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-primary placeholder-secondary/50 focus:outline-none focus:border-magento transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-primary placeholder-secondary/50 focus:outline-none focus:border-magento transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-primary placeholder-secondary/50 focus:outline-none focus:border-magento transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">What are your goals?</label>
                <textarea rows={4} placeholder="Tell us a little about your store and what you have in mind..." className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-primary placeholder-secondary/50 focus:outline-none focus:border-magento transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="btn btn-magento w-full py-4 text-lg mt-2">
                Send message <i className="fas fa-paper-plane ml-2"></i>
              </button>
              <p className="text-center text-xs text-secondary mt-4">
                Or email us directly at <a href="mailto:office@yonivo.com" className="text-accent hover:underline">office@yonivo.com</a>
              </p>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-secondary">
          <span>© 2025 Yonivo. Magento 2 experts — Varna, Bulgaria.</span>
          <div className="flex gap-6">
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}