import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-16 pb-8 mt-auto backdrop-blur-md bg-surface/30">
      <div className="relative mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="Yonivo Logo" 
                width={160} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-secondary text-sm max-w-xs">
              One team, from the storefront to the server. Building and running Magento 2 stores worldwide.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-display">
            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold mb-2">Services</span>
              <Link href="/services/magento-development" className="text-secondary hover:text-magento transition-colors">Magento Development</Link>
              <Link href="/services/hyva-development" className="text-secondary hover:text-magento transition-colors">Hyvä Storefronts</Link>
              <Link href="/services/server-management" className="text-secondary hover:text-magento transition-colors">Server Management</Link>
              <Link href="/services/all" className="text-magento hover:text-white transition-colors mt-2">See all services &rarr;</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold mb-2">Company</span>
              <Link href="/work" className="text-secondary hover:text-magento transition-colors">Work</Link>
              <Link href="/pricing" className="text-secondary hover:text-magento transition-colors">Pricing</Link>
              <Link href="/about" className="text-secondary hover:text-magento transition-colors">About</Link>
              <Link href="/contact" className="text-secondary hover:text-magento transition-colors">Contact</Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold mb-2">Contact</span>
              <a href="mailto:office@yonivo.com" className="text-secondary hover:text-magento transition-colors">office@yonivo.com</a>
              <span className="text-secondary">Varna, Bulgaria</span>
              <span className="text-secondary">EU (CET +1)</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-secondary">
          <span>© 2025 Yonivo. Magento 2 experts — Varna, Bulgaria.</span>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">EN</span>
            <span className="cursor-pointer hover:text-white transition-colors">BG</span>
          </div>
        </div>

      </div>
    </footer>
  );
}