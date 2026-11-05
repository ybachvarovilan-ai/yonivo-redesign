export default function Services() {
  const services = [
    {
      icon: 'fa-shopping-bag',
      title: 'Magento Development',
      desc: 'Custom modules, theme builds, and full-stack features tailored to your business logic.',
      items: ['Custom modules & extensions', 'Hyvä theme builds & migration', '2.4 upgrades & patches'],
    },
    {
      icon: 'fa-network-wired',
      title: 'Integrations',
      desc: 'ERP, CRM, payment, and logistics sync that actually works — no stalled cron jobs.',
      items: ['ERP / CRM / PIM integration', 'Payment & shipping gateways', 'API & middleware sync'],
    },
    {
      icon: 'fa-database',
      title: 'Servers & Infrastructure',
      desc: 'We manage the server layer so your store stays fast, secure, and online.',
      items: ['Server updates & monitoring', 'Cloudflare, firewall & access rules', 'Caching & database tuning'],
    },
    {
      icon: 'fa-headset',
      title: 'Ongoing Support',
      desc: "Proactive care for stores that can't afford downtime. Developers who know your code.",
      items: ['Security patches & version upgrades', 'Bug fixes & troubleshooting', 'Speed checks on caching & CWV'],
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden border-t border-white/5 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="section-title">
              <span className="accent-underline">Everything your Magento store needs</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-secondary">From the code to the infrastructure. One partner, zero handoffs.</p>
          </div>
          <a href="/services/all" className="text-accent hover:opacity-80 font-display font-medium flex items-center gap-2 whitespace-nowrap">
            See all services <i className="fas fa-arrow-right text-sm"></i>
          </a>
        </div>
        
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="card bg-surface/60 backdrop-blur-md border-white/10 group hover:border-magento transition-colors duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_30px_-15px_rgba(242,99,34,0.2)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-magento/10 text-2xl text-magento transition-transform group-hover:scale-110">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="font-display text-xl font-semibold group-hover:text-magento transition-colors">{s.title}</h3>
              <p className="mt-2 text-sm text-secondary">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-secondary">
                    <i className="fas fa-check-circle text-[0.7rem] text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-magento to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}