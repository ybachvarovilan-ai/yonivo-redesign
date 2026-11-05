export default function Maintenance() {
  const careItems = [
    'Security patches and version upgrades',
    'Extension and PHP compatibility checks',
    'Bug fixes and troubleshooting',
    'Server updates and resource monitoring',
    'Cloudflare, firewall and access rules',
    'Speed checks on caching, database and Core Web Vitals',
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">
              <span className="accent-underline">Already on Magento?<br/>We’ll keep it healthy.</span>
            </h2>
            <p className="mt-6 text-lg text-secondary">
              Ongoing care for stores that can’t afford downtime, handled by developers who know your code and your server.
            </p>
            <a href="contact" className="btn btn-magento mt-8">
              Request a maintenance plan <i className="fas fa-arrow-right" />
            </a>
          </div>
          <div className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10">
            <ul className="space-y-4">
              {careItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-secondary">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <i className="fas fa-check text-xs" />
                  </div>
                  <span className="text-[1.05rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}