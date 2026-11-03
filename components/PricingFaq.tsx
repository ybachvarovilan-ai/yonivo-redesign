const faqs = [
  { q: 'Can you take over a store another agency built?', a: 'Yes. We start with an audit of the code, extensions and hosting, fix anything urgent, then plan the rest with you.' },
  { q: 'Do you build with Hyvä?', a: 'Yes. We build new Hyvä themes and move existing Luma or Custom stores to Hyvä when the speed gain is worth it.' },
  { q: 'Which Magento versions do you work with?', a: 'Magento Open Source and Adobe Commerce 2.4. We also upgrade stores still running older 2.x versions.' },
  { q: 'Where are you based?', a: 'In Varna, Bulgaria: inside the EU and one hour ahead of Central European Time. We work with clients around the world, in English.' },
];

export default function PricingFaq() {
  return (
    <section id="pricing" className="relative overflow-hidden border-t border-white/5 py-24">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="section-title text-3xl">
            <span className="accent-underline">Transparent pricing</span>
          </h2>
          <p className="mt-4 text-secondary">Flexible support and project work.</p>
          <div className="card mt-8 bg-surface/50 backdrop-blur-md border-white/10">
            <span className="rounded-full bg-accent/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">Ongoing care</span>
            <div className="mt-4 font-display text-5xl font-bold text-accent">
              €1,500 <small className="text-base font-normal text-secondary">/ month</small>
            </div>
            <p className="mt-1 text-sm text-secondary">Monthly plan with no long-term commitment.</p>
            <ul className="mt-6 space-y-2">
              {['Security patches & upgrades', 'Server monitoring & updates', 'Bug fixes & troubleshooting', 'Speed & Core Web Vitals checks'].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-secondary">
                  <i className="fas fa-check text-accent" /> {i}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="font-display text-2xl font-semibold">
                €85 <small className="text-sm font-normal text-secondary">/ hour</small>
              </div>
              <p className="text-sm text-secondary">Ad-hoc work, no commitment.</p>
            </div>
            <a href="#contact" className="btn btn-magento mt-6 w-full">Request a quote</a>
          </div>
        </div>
        <div>
          <h2 className="section-title text-3xl">
            <span className="accent-underline">Common questions</span>
          </h2>
          <p className="mt-4 text-secondary">Straight answers.</p>
          <div className="mt-8 divide-y divide-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <p className="font-display font-medium text-primary">{f.q}</p>
                <p className="mt-1 text-sm text-secondary">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}