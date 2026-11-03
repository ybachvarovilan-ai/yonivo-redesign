import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg text-primary pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-8 text-white">
          One team, from the storefront to the server.
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-secondary">
          <p className="text-xl text-white font-medium mb-8">
            We build, integrate, and run Magento 2 stores for retailers and brands around the globe.
          </p>
          
          <p className="mb-6">
            Most Magento problems sit between layers: a checkout slowed by a cache rule, an ERP sync stalled on a cron job, an extension that breaks after an upgrade. Because we work on every layer — from the PHP code to the Linux server underneath — a fix never bounces between three different suppliers.
          </p>

          <p className="mb-10">
            We are based in Varna, Bulgaria (inside the EU, one hour ahead of Central European Time), but we work with clients around the world, entirely in English. Whether you are a B2C retailer, a B2B supplier, or both, our goal is the same: a fast, reliable store that is easy to run.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 py-10 border-y border-white/10 mb-12">
          <div>
            <div className="font-display text-4xl font-bold text-magento mb-1">11</div>
            <div className="text-sm text-secondary">Countries served</div>
          </div>
          <div>
            <div className="font-display text-4xl font-bold text-magento mb-1">25+</div>
            <div className="text-sm text-secondary">Brands supported</div>
          </div>
          <div>
            <div className="font-display text-4xl font-bold text-magento mb-1">100%</div>
            <div className="text-sm text-secondary">In-house team</div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/contact" className="btn btn-magento text-lg px-8 py-4">
            Work with us <i className="fas fa-arrow-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}