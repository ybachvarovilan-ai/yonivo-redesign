import Link from 'next/link';
import { servicesData } from '@/lib/services-data';

export default function AllServicesPage() {
  const categories = ['Magento', 'Servers and security', 'Beyond Magento'];

  return (
    <div className="min-h-screen text-primary pt-24 pb-32 backdrop-blur-md bg-bg/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl text-secondary drop-shadow-md">
            From the storefront to the server. Explore how we build, maintain, and scale Magento stores and digital experiences.
          </p>
        </div>

        {/* Categorized Services */}
        <div className="space-y-24">
          {categories.map((category) => {
            const categoryServices = servicesData.filter((s) => s.category === category);
            if (categoryServices.length === 0) return null;

            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px bg-white/10 flex-1" />
                  <h2 className="font-display text-3xl font-bold text-white uppercase tracking-wider">
                    {category}
                  </h2>
                  <div className="h-px bg-white/10 flex-1" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/services/${service.slug}`}
                      className="group relative flex flex-col bg-surface/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-magento/50 hover:bg-surface/80 transition-all duration-300 shadow-xl"
                    >
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-magento/10 text-2xl text-magento transition-transform group-hover:scale-110">
                        <i className={`fas ${service.icon}`} />
                      </div>
                      
                      <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-magento transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-secondary text-sm leading-relaxed mb-8 flex-1">
                        {service.subtitle}
                      </p>
                      
                      <div className="flex items-center text-magento font-medium text-sm mt-auto">
                        View service <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center bg-surface/60 backdrop-blur-md rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto shadow-2xl">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not sure what you need?</h2>
          <p className="text-secondary mb-8 max-w-xl mx-auto">
            Describe the problem you are facing, and we will tell you exactly where it sits and what fixing it involves.
          </p>
          <Link href="/contact" className="btn btn-magento text-lg px-8 py-4">
            Book a free consultation <i className="fas fa-arrow-right ml-2" />
          </Link>
        </div>

      </div>
    </div>
  );
}