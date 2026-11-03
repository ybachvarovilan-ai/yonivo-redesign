import Link from 'next/link';

export default function ContactPage() {
  const steps = [
    'Share a few details about your store and your goals.',
    'Tell us a little about your store and what you have in mind.',
    'Send us your store’s address with a short note on your goals.'
  ];

  return (
    <div className="min-h-screen bg-bg text-primary pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              Tell us about your store
            </h1>
            <p className="text-xl text-secondary mb-12">
              You talk directly to the developer who’ll do the work. No sales team, no middlemen.
            </p>
            
            <div className="p-8 rounded-3xl bg-surface/60 border border-white/10 backdrop-blur-md mb-10">
              <h3 className="font-display text-xl font-semibold mb-6 text-magento">What happens next</h3>
              <ul className="space-y-6">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-magento/20 text-magento text-sm font-bold font-display">
                      {i + 1}
                    </span>
                    <span className="text-secondary pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 text-secondary">
              <i className="fas fa-envelope text-magento text-xl"></i>
              <div>
                <div className="text-sm font-medium text-white">Prefer email?</div>
                <a href="mailto:office@yonivo.com" className="hover:text-magento transition-colors">office@yonivo.com</a>
              </div>
            </div>
          </div>

          <div className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Store Address / URL</label>
                <input type="text" placeholder="https://yourstore.com" className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-magento transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-magento transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-magento transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">What are your goals?</label>
                <textarea rows={4} placeholder="Tell us a little about your store and what you have in mind..." className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-magento transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="btn btn-magento w-full py-4 text-lg mt-2">
                Send message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}