import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f13',
        surface: '#12181f',
        'surface-light': '#1a222c',
        border: '#2a3542',
        primary: '#eef3f8',
        secondary: '#a8b7c7',
        accent: '#23d4b6',
        'accent-dark': '#18a88f',
        magento: '#f26322',
        'magento-light': '#ff7a3d',
        card: '#10161d',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(35,212,182,0.2)',
        card: '0 20px 30px -15px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(35,212,182,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(35,212,182,0.04) 1px, transparent 1px)",
      },
      backgroundSize: { grid: '60px 60px' },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.15' },
          '50%': { opacity: '0.35' },
        },
        // ADDED FADE IN
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        // ADDED ANIMATION UTILITY
        fadeIn: 'fadeIn 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;