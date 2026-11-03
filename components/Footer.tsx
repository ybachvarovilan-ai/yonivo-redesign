export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/5 pb-8 pt-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-3xl border border-white/10 bg-surface/50 backdrop-blur-xl p-10">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-magento/10 blur-3xl" />
          <div>
            <h3 className="font-display text-3xl font-semibold">Tell us about your store</h3>
            <p className="mt-1 text-secondary">You talk directly to the developer who’ll do the work.</p>
          </div>
          <div>
            <a href="mailto:office@yonivo.com" className="inline-flex items-center gap-2 font-display text-2xl font-medium text-accent hover:opacity-80">
              <i className="fas fa-envelope" /> office@yonivo.com
            </a>
            <p className="mt-1 text-sm text-secondary">Share your store's address and goals. We'll reply within one business day.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-secondary">
          <span>© 2025 Yonivo. Magento 2 experts — Varna, Bulgaria.</span>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#pricing" className="hover:text-accent">Pricing</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}