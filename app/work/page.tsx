import Link from 'next/link';

export default function WorkPage() {
  const clients = [
    { name: 'Lazer Lamps', markets: 'UK, EU, DE, FR, PL, SE, NO, DK, FI, US, AU', desc: 'British manufacturer of LED driving lights, light bars and work lights, with motorsport roots.', link: '#' },
    { name: 'Hobbex', markets: 'SE, NO, DK, FI', desc: 'Swedish retailer of RC models, airsoft and hobby gear, selling online and in its own shops.', link: '#' },
    { name: 'Klejch', markets: 'AT, EU', desc: 'Vienna’s fly-fishing and fly-tying specialist. Tackle from brands such as Orvis, Simms and Patagonia, plus bookable courses and fishing day tickets.', link: '#' },
    { name: 'Flooring Hut', markets: 'UK', desc: 'UK online retailer of carpets, luxury vinyl, laminate and wood flooring, selling to homeowners and trade customers.', link: '#' },
  ];

  const moreClients = [
    'Nolina', 'Above The Rest', 'NastAuto', 'Stoikov Stroi', 'Door Mats', 'BulWealth', 'Eversocks', 'Riva Fishing', 'Beltomarine', 'Markoni Group', 'Pueblo Smartshop', 'Folio4car', 'KP Build', 'Grosh', 'BG Sensor', 'Alibi', 'Vi Wellness Physio', 'Tracia Fighting Championship', 'World Kickboxing Network', 'B1B Action Television', 'Bigger is Better', 'Elcommerce Vyara', 'Evelina Toncheva law office'
  ];

  return (
    <div className="min-h-screen text-primary pt-24 pb-32 backdrop-blur-md bg-bg/40">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
          Work
        </h1>
        <p className="text-xl text-secondary max-w-2xl mb-16 drop-shadow-md">
          Magento stores we work on for retailers and brands. Between them, they sell in 11 countries.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {clients.map((client) => (
            <div key={client.name} className="group rounded-3xl overflow-hidden border border-white/10 bg-surface/60 backdrop-blur-md hover:border-magento/50 transition-colors duration-300">
              <div className="h-48 bg-surface/80 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-magento/10 to-transparent opacity-50 group-hover:scale-105 transition-transform duration-500" />
                 <i className="fas fa-store text-5xl text-white/10" />
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl font-bold text-white mb-2">{client.name}</h2>
                <div className="text-magento text-xs font-semibold tracking-wide uppercase mb-4 flex flex-wrap gap-1">
                  {client.markets.split(', ').map(m => <span key={m} className="bg-magento/10 px-2 py-1 rounded">{m}</span>)}
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-6">{client.desc}</p>
                <div className="text-sm text-gray-400">
                  <span className="text-white font-medium">What we do:</span> Full-stack Magento support, hosting, and continuous development.
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-16">
          <h2 className="font-display text-3xl font-bold text-white mb-8 drop-shadow-md">More clients</h2>
          <p className="text-secondary mb-8">Online stores, websites and design work for businesses in Bulgaria and beyond.</p>
          <div className="flex flex-wrap gap-3">
            {moreClients.map((c, i) => (
              <span key={i} className="px-4 py-2 bg-surface/50 backdrop-blur-md border border-white/5 rounded-full text-sm text-secondary hover:text-white transition-colors cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center bg-surface/60 backdrop-blur-md rounded-3xl p-12 border border-white/10">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Your store could be next</h2>
          <p className="text-secondary mb-8">Send your store URL and what isn’t working. We’ll come back with a plan and a time for a free call.</p>
          <Link href="/contact" className="btn btn-magento text-lg px-8 py-4">
            Book a free consultation <i className="fas fa-arrow-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}