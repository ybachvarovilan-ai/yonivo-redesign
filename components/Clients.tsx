export default function Clients() {
  const clients = [
    { title: 'Across the globe', desc: 'Working with clients in 11 countries on three continents.', icon: 'fa-globe' },
    { title: 'B2C and B2B', desc: 'Shops for consumers, trade buyers or both at once.', icon: 'fa-store' },
    { title: '25+ brands', desc: 'Retailers, manufacturers, service businesses and events.', icon: 'fa-tags' },
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 bg-bg/50 backdrop-blur-sm">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-3xl md:text-4xl">
            <span className="accent-underline">Our clients</span>
          </h2>
          <p className="mt-6 text-lg text-secondary">
            We work with businesses at every stage, from growing local companies to established brands with stores in several countries. 
            Our clients include B2C retailers, B2B suppliers and companies that serve both, and whatever their size or market, the goal is the same: <strong className="text-primary font-medium">a fast, reliable store that’s easy to run.</strong>
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {clients.map((c) => (
            <div key={c.title} className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:border-accent transition-colors">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-2xl text-accent mb-6">
                <i className={`fas ${c.icon}`} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-secondary text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}