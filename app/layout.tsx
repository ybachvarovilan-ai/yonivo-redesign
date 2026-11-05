import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

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
        {/* Preload the background image for instant display */}
        <link rel="preload" as="image" href="/hero-bg.jpg" />
      </head>
      <body className="relative min-h-screen flex flex-col bg-bg">
        
        {/* BACKGROUND LAYERS */}
        <div 
          className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="fixed inset-0 z-[-1] bg-bg/65 backdrop-blur-[1px]" />
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-bg/20 via-bg/50 to-bg/90" />
        <div className="fixed inset-0 z-[-1] bg-grid-pattern bg-grid opacity-20 pointer-events-none" />

        {/* 3D SCENE WITH SMOOTH FADE IN */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40 md:opacity-100 animate-[fadeIn_1.5s_ease-in-out]">
          <HeroScene />
        </div>

        <Navbar />
        <main className="relative z-10 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}