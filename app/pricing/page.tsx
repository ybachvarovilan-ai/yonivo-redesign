import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Care 20',
      price: '€1,500',
      hours: '20 hours a month at €75 an hour',
      features: ['Extra hours at €85 an hour', 'Up to 4 unused hours carry over', 'Security audit every quarter', 'Response by the next working day', 'Critical issues at weekends and holidays within 48 hours'],
      recommended: false,
    },
    {
      name: 'Care 40',
      price: '€2,800',
      hours: '40 hours a month at €70 an hour',
      features: ['Extra hours at €80 an hour', 'Up to 8 unused hours carry over', 'Security audit every month', 'Response within 8 working hours', 'Critical issues at weekends and holidays within 24 hours'],
      recommended: true,
    },
    {
      name: 'Part-time developer',
      price: '€4,800',
      hours: '80 hours a month at €60 an hour',
      features: ['4 hours every working day', 'Extra hours at €70 an hour', 'Security audit every month', 'Response within 4 working hours', 'Critical issues at weekends and holidays within 8 hours'],
      recommended: false,
    },
    {
      name: 'Dedicated developer',
      price: '€8,000',
      hours: '160 hours a month at €50 an hour',
      features: ['A full-time developer on your store', 'Extra hours at €60 an hour', 'Security audit every month', 'Response within working hours', 'Critical issues at weekends and holidays within 6 hours'],
      recommended: false,
    }
  ];

  return (
    <div className="min-h-screen bg-bg text-primary pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">Pricing</h1>
          <p className="text-xl text-secondary mb-6">
            One set of rates for every service, from Magento development to server management. Choose a monthly plan, or pay as you go.
          </p>
          <div className="inline-block bg-surface/60 border border-white/10 rounded-xl p-4 text-sm text-secondary">
            <p className="mb-2"><strong className="text-white">Good Magento support starts before anything breaks.</strong></p>
            <p>Every monthly plan includes monitoring around the clock, daily backups, and security patches within 2 working days.</p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col p-8 rounded-3xl border backdrop-blur-md ${plan.recommended ? 'bg-surface/90 border-magento shadow-[0_0_30px_rgba(242,99,34,0.15)]' : 'bg-surface/50 border-white/10'}`}>
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-magento text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}
              <h3 className="font-display text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <div className="font-display text-4xl font-bold text-white mb-2">{plan.price}<span className="text-sm text-secondary font-normal"> / month</span></div>
              <p className="text-sm text-magento mb-8 pb-8 border-b border-white/10">{plan.hours}</p>
              
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-secondary">
                    <i className="fas fa-check text-accent mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`btn w-full py-3 text-center ${plan.recommended ? 'btn-magento' : 'border border-white/20 text-white hover:bg-white/10'}`}>
                Choose {plan.name.split(' ')[0]}
              </Link>
            </div>
          ))}
        </div>

        {/* Flexible Plan Callout */}
        <div className="bg-[#131722] border border-white/10 rounded-2xl p-8 mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white mb-2">Flexible</h3>
            <p className="text-secondary">€85 an hour with no commitment, for occasional fixes and small changes. Response within 2 working days.</p>
            <p className="text-sm text-gray-500 mt-2">Monitoring, backups and patching are part of monthly plans only.</p>
          </div>
          <Link href="/contact" className="btn bg-white text-black hover:bg-gray-200 px-8 py-3 whitespace-nowrap">Request a quote</Link>
        </div>

        {/* Comparison Table */}
        <div className="mb-24">
          <h2 className="font-display text-2xl font-semibold text-white mb-6">Compare plans</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-surface/40">
            <table className="w-full text-left text-sm text-secondary">
              <thead className="bg-surface/80 text-white border-b border-white/10">
                <tr>
                  <th className="p-4 font-medium">Plan detail</th>
                  <th className="p-4 font-medium">Flexible</th>
                  <th className="p-4 font-medium">Care 20</th>
                  <th className="p-4 font-medium">Care 40</th>
                  <th className="p-4 font-medium">Part-time dev</th>
                  <th className="p-4 font-medium">Dedicated dev</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['Hours a month', 'As needed', '20', '40', '80', '160'],
                  ['Hourly rate', '€85', '€75', '€70', '€60', '€50'],
                  ['Monthly price', 'Billed per hour', '€1,500', '€2,800', '€4,800', '€8,000'],
                  ['Extra hours', 'Not applicable', '€85', '€80', '€70', '€60'],
                  ['Unused hours', 'Not applicable', 'Up to 4 carry over', 'Up to 8 carry over', 'Reserved time', 'Reserved time'],
                  ['Response (working days)', 'Within 2 days', 'Next working day', 'Within 8 hours', 'Within 4 hours', 'Within working hours'],
                  ['Critical (weekends)', 'Best effort', 'Within 48h', 'Within 24h', 'Within 8h', 'Within 6h'],
                  ['Security audit', 'Not included', 'Every quarter', 'Every month', 'Every month', 'Every month'],
                  ['Monitoring & backups', 'Not included', 'Included', 'Included', 'Included', 'Included'],
                  ['Monthly report', 'Not included', 'Included', 'Included', 'Included', 'Included'],
                  ['Commitment', 'None', '30 days notice', '30 days notice', '3 months min', '3 months min'],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className={`p-4 ${j === 0 ? 'font-medium text-white' : ''}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-8 text-white text-center">Questions about pricing</h2>
          <div className="space-y-6">
            {[
              { q: 'Do the same rates apply to every service?', a: 'Yes. Plan hours cover all our work, from Magento development and integrations to server management, design and marketing.' },
              { q: 'What counts as a critical issue?', a: 'Your store is down, checkout or payments don’t work, or there’s a security incident. Other requests are handled during working hours.' },
              { q: 'What happens to unused hours?', a: 'On Care plans, up to 20% of your monthly hours carry over to the next month. On developer plans the time is reserved for you, so it doesn’t carry over.' },
              { q: 'How is extra work billed?', a: 'In 15-minute steps, at your plan rate plus €10 an hour. We check with you before going over your plan.' },
              { q: 'Do you work with businesses outside the EU?', a: 'Not at the moment. Our plans are available to businesses registered in the EU.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h3 className="font-display font-medium text-lg text-white mb-2">{faq.q}</h3>
                <p className="text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}