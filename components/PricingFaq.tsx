export default function PricingFaq() {
  const faqs = [
    { q: 'Can you take over a store another agency built?', a: 'Yes. We start with an audit of the code, extensions and hosting, fix anything urgent, then plan the rest with you.' },
    { q: 'Do you build with Hyvä?', a: 'Yes. We build new Hyvä themes and move existing Luma or Custom stores to Hyvä when the speed gain is worth it.' },
    { q: 'Which Magento versions do you work with?', a: 'Magento Open Source and Adobe Commerce 2.4. We also upgrade stores still running older 2.x versions.' },
    { q: 'How do you price work?', a: 'Projects get a written estimate before we start, with no hidden costs. Ongoing work runs on monthly plans from €1,500, or €85 an hour with no commitment.' },
    { q: 'Where are you based?', a: 'In Varna, Bulgaria: inside the EU and one hour ahead of Central European Time. We work with clients around the world, in English.' },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden border-t border-white/5 py-24 bg-bg/50 backdrop-blur-sm">
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <div className="flex items-end justify-between mb-4">
            <h2 className="section-title text-3xl">
              <span className="accent-underline">Transparent pricing</span>
            </h2>
          </div>
          <p className="text-secondary mb-8">Flexible support and project work.</p>
          
          <div className="card bg-surface/80 backdrop-blur-md border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-magento/10 blur-3xl" />
            
            <span className="rounded-full bg-magento/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-magento">Ongoing care</span>
            <div className="mt-4 font-display text-5xl font-bold text-primary">
              €1,500 <small className="text-base font-normal text-secondary">/ month</small>
            </div>
            <p className="mt-2 text-sm text-secondary">Monthly plan with no long-term commitment.</p>
            
            <ul className="mt-8 space-y-3">
              {['Security patches & upgrades', 'Server monitoring & updates', 'Bug fixes & troubleshooting', 'Speed & Core Web Vitals checks'].map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-secondary">
                  <i className="fas fa-check text-accent" /> {i}
                </li>
              ))}
            </ul>
            
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="font-display text-2xl font-semibold">
                €85 <small className="text-sm font-normal text-secondary">/ hour</small>
              </div>
              <p className="text-sm text-secondary">Ad-hoc work, no commitment.</p>
            </div>
            <a href="#contact" className="btn btn-magento mt-8 w-full">Request a quote</a>
          </div>
        </div>

        <div>
          <h2 className="section-title text-3xl mb-4">
            <span className="accent-underline">Common questions</span>
          </h2>
          <p className="text-secondary mb-8">Straight answers.</p>
          
          <div className="divide-y divide-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <p className="font-display font-medium text-lg text-primary">{f.q}</p>
                <p className="mt-2 text-secondary leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-6 rounded-2xl bg-surface/50 border border-white/10">
            <h4 className="font-display font-semibold text-lg mb-2">Still have a question?</h4>
            <p className="text-secondary text-sm mb-4">Write to us and we’ll answer it directly.</p>
            <a href="mailto:office@yonivo.com" className="inline-flex items-center gap-2 font-medium text-accent hover:opacity-80">
              <i className="fas fa-envelope" /> office@yonivo.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}