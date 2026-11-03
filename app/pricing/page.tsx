import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bg text-primary pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-secondary">
            Same rates for every service. No hidden costs. Choose ongoing care or ad-hoc work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          
          {/* Monthly Plan */}
          <div className="card bg-surface/80 backdrop-blur-xl border-white/10 shadow-2xl relative overflow-hidden p-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-magento/10 blur-3xl" />
            <h2 className="font-display text-2xl font-semibold text-white mb-2">Ongoing Care</h2>
            <p className="text-secondary mb-8">Monthly plan with no long-term commitment.</p>
            
            <div className="font-display text-6xl font-bold text-white mb-2">
              €1,500 <span className="text-xl font-normal text-secondary">/ month</span>
            </div>
            <p className="text-sm text-magento mb-8">Includes 20 hours of development time.</p>
            
            <ul className="space-y-4 mb-10">
              {['Security patches & upgrades', 'Server monitoring & updates', 'Bug fixes & troubleshooting', 'Speed & Core Web Vitals checks', 'Daily backups & monitoring'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-secondary">
                  <i className="fas fa-check text-accent" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-magento w-full py-4 text-lg">Start a monthly plan</Link>
          </div>

          {/* Hourly Plan */}
          <div className="card bg-surface/80 backdrop-blur-xl border-white/10 shadow-2xl relative overflow-hidden p-10">
            <h2 className="font-display text-2xl font-semibold text-white mb-2">Ad-hoc Work</h2>
            <p className="text-secondary mb-8">Perfect for one-off fixes or small features.</p>
            
            <div className="font-display text-6xl font-bold text-white mb-2">
              €85 <span className="text-xl font-normal text-secondary">/ hour</span>
            </div>
            <p className="text-sm text-secondary mb-8">Billed monthly, no minimum commitment.</p>
            
            <ul className="space-y-4 mb-10">
              {['Magento development', 'Integrations & API work', 'Server troubleshooting', 'Performance audits', 'Hyvä theme tweaks'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-secondary">
                  <i className="fas fa-check text-accent" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn border border-white/20 text-white hover:bg-white/10 w-full py-4 text-lg">Request a quote</Link>
          </div>

        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-8 text-white text-center">Questions about pricing</h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="font-display font-medium text-lg text-white mb-2">How do you price projects?</h3>
              <p className="text-secondary">Projects get a written estimate before we start, with no hidden costs. We audit your store first to ensure the estimate fits.</p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="font-display font-medium text-lg text-white mb-2">Can we upgrade our plan later?</h3>
              <p className="text-secondary">Yes. Many clients start with ad-hoc work and move to a monthly plan once they see the benefits of ongoing support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}