import Link from 'next/link';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-bg text-primary pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          Our Work
        </h1>
        <p className="text-xl text-secondary max-w-2xl mb-16">
          We partner with retailers, manufacturers, and service businesses around the globe. Here are some of the stores and systems we run.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Example Project 1 */}
          <div className="group rounded-3xl overflow-hidden border border-white/10 bg-surface/60 backdrop-blur-md">
            <div className="h-64 bg-slate-800 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-magento/20 to-transparent opacity-50 group-hover:scale-105 transition-transform duration-500" />
               <i className="fas fa-store text-6xl text-white/20" />
            </div>
            <div className="p-8">
              <div className="text-magento text-sm font-semibold mb-2">B2B Retail</div>
              <h2 className="font-display text-2xl font-bold text-white mb-3">Global Industrial Supplies</h2>
              <p className="text-secondary text-sm">A Hyvä migration for a multi-store B2B supplier, reducing page load times by 60% and simplifying complex tier pricing.</p>
            </div>
          </div>

          {/* Example Project 2 */}
          <div className="group rounded-3xl overflow-hidden border border-white/10 bg-surface/60 backdrop-blur-md">
            <div className="h-64 bg-slate-800 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50 group-hover:scale-105 transition-transform duration-500" />
               <i className="fas fa-box text-6xl text-white/20" />
            </div>
            <div className="p-8">
              <div className="text-magento text-sm font-semibold mb-2">Fashion & Apparel</div>
              <h2 className="font-display text-2xl font-bold text-white mb-3">Nordic Menswear Brand</h2>
              <p className="text-secondary text-sm">Custom ERP integration syncing stock across 4 countries in real-time, paired with a custom checkout flow to reduce cart abandonment.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <Link href="/contact" className="btn btn-magento text-lg px-8 py-4">
            Start your project <i className="fas fa-arrow-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}