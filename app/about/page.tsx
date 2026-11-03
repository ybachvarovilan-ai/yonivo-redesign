import Link from 'next/link';

export default function AboutPage() {
  const timeline = [
    { year: '2010', desc: 'Founded in Varna as IDM Designs.' },
    { year: '2013', desc: 'Search engine optimisation joins our services.' },
    { year: '2016', desc: 'Digital marketing for clients on Facebook and Instagram.' },
    { year: '2018', desc: 'We start supporting and fixing existing websites and online stores.' },
    { year: '2021', desc: 'IDM Designs becomes Yonivo.' },
    { year: '2022', desc: 'Work with Hobbex begins.' },
    { year: '2024', desc: 'Work with Lazer Lamps begins: stores in 11 countries.' }
  ];

  return (
    <div className="min-h-screen bg-bg text-primary pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-8 text-white">
          About Yonivo
        </h1>
        
        <p className="text-2xl text-white font-medium mb-12 leading-relaxed">
          A Magento development studio in Varna, Bulgaria, building for the web since 2010. You work directly with the developer who writes your code.
        </p>

        {/* CEO Profile */}
        <div className="bg-surface/60 border border-white/10 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row gap-8 items-start">
          <div className="w-24 h-24 rounded-full bg-magento/20 flex items-center justify-center shrink-0">
             <i className="fas fa-user-tie text-4xl text-magento"></i>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-1">Ivan Dimitrov</h2>
            <div className="text-magento font-medium mb-4">CEO and full-stack developer</div>
            <p className="text-secondary mb-4">
              I founded Yonivo, then called IDM Designs, in 2010 and have built for the web ever since. Today almost all of my work is Magento 2: custom modules, Hyvä storefronts, integrations and the servers they run on.
            </p>
            <p className="text-secondary">
              When you work with Yonivo, you talk to me directly. The person who reviews your store is the person who writes the code, so nothing gets lost between an account manager and a developer.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-y border-white/10 mb-20">
          <div>
            <div className="font-display text-4xl font-bold text-white mb-1">11 countries</div>
            <div className="text-sm text-secondary">Clients selling across Europe, the US and Australia.</div>
          </div>
          <div>
            <div className="font-display text-4xl font-bold text-white mb-1">Magento 2</div>
            <div className="text-sm text-secondary">Modules, storefronts, integrations and servers.</div>
          </div>
          <div>
            <div className="font-display text-4xl font-bold text-white mb-1">Since 2010</div>
            <div className="text-sm text-secondary">Sixteen years of building for the web, from Varna.</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-white mb-8">From local studio to Magento specialists</h2>
          <p className="text-secondary mb-10">
            We started in 2010 as IDM Designs, building websites and online stores for businesses in Bulgaria. As our clients grew, so did the work: integrations, servers, security and, above all, Magento.
          </p>
          
          <div className="space-y-8 border-l-2 border-white/10 ml-4 pl-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-magento border-4 border-bg" />
                <div className="font-display font-bold text-magento text-lg mb-1">{item.year}</div>
                <div className="text-white">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expectations */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-white mb-8">What you can expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Magento first', desc: 'Most of the work is Magento 2, so your store gets a developer who knows its internals.' },
              { title: 'The whole stack', desc: 'Code, integrations and servers handled by one developer, with no hand-offs between suppliers.' },
              { title: 'Based in the EU', desc: 'Bulgaria, one hour ahead of Central European Time, working in English.' },
              { title: 'Direct contact', desc: 'You talk to the developer, not an account manager, from the first call to launch.' }
            ].map((item, i) => (
              <div key={i} className="bg-surface/40 border border-white/5 rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-6">Work with us</h2>
          <Link href="/contact" className="btn btn-magento text-lg px-8 py-4">
            Book a free consultation <i className="fas fa-arrow-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}