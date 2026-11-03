import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata: Metadata = {
  title: 'Yonivo — Magento 2 Development, Integrations & Server Care',
  description:
    'We build, integrate, and run Magento 2 stores for retailers and brands worldwide — from custom modules to the servers underneath.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className="relative min-h-screen">
        
        {/* FULL PAGE FIXED BACKGROUND */}
        <div 
          className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        
        {/* UPDATED: LIGHTER OVERLAYS (20% more visible) */}
        <div className="fixed inset-0 z-[-1] bg-bg/65 backdrop-blur-[1px]" />
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-bg/20 via-bg/50 to-bg/90" />
        
        {/* Subtle Grid Pattern over the whole page */}
        <div className="fixed inset-0 z-[-1] bg-grid-pattern bg-grid opacity-20 pointer-events-none" />

        {/* PAGE CONTENT */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}