import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/lib/services-data';

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg text-primary pt-10 pb-24">
      
      {/* Breadcrumb / Back Link */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <Link href="/" className="text-sm font-medium text-secondary hover:text-magento flex items-center gap-2 transition-colors">
          <i className="fas fa-arrow-left"></i> Back to home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-magento/10 text-3xl text-magento mb-6">
          <i className={`fas ${service.icon}`} />
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
          {service.title}
        </h1>
        <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-3xl">
          {service.intro}
        </p>
      </section>

      {/* Signs you need this section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="font-display text-2xl font-semibold mb-8 text-white">Signs you need this</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.signs.map((sign, i) => (
            <div key={i} className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-white mb-2">{sign.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{sign.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we build / do Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="font-display text-2xl font-semibold mb-8 text-white">What we build</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {service.whatWeBuild.map((item, i) => (
            <div key={i} className="bg-bg/50 border border-white/5 rounded-xl p-5 hover:border-magento/50 transition-colors">
              <h3 className="font-display font-medium text-magento mb-2">{item.title}</h3>
              <p className="text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Text Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-surface/80 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
          {/* FIXED: Now correctly targeting .title and .content */}
          <h2 className="font-display text-2xl font-semibold mb-4 text-white">{service.deepDive.title}</h2>
          <p className="text-lg text-secondary leading-relaxed">
            {service.deepDive.content}
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <h2 className="font-display text-2xl font-semibold mb-8 text-white">Common questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h3 className="font-display font-medium text-lg text-white mb-2">{faq.q}</h3>
                <p className="text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pricing Callout */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-[#131722] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-1">See pricing</h3>
            <p className="text-secondary text-sm">Same rates for every service. Monthly plans from €1,500, or €85 an hour with no commitment.</p>
          </div>
          <Link href="/pricing" className="btn bg-white text-black hover:bg-gray-200 px-6 py-2 whitespace-nowrap font-medium">
            View pricing
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-6">
          Need help with {service.title.toLowerCase()}?
        </h2>
        <Link href="/contact" className="btn btn-magento text-lg px-8 py-4 shadow-xl">
          Book a free consultation <i className="fas fa-arrow-right ml-2" />
        </Link>
      </section>

    </div>
  );
}