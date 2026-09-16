/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Katana / Sakura Night Dark Theme
        canvas: {
          DEFAULT: '#0A0A0A', // Near-black (not pure black)
          darker: '#060606',
          light: '#111111',
        },
        surface: {
          DEFAULT: '#131313', // Soft Dark Neumorphic surface
          raised: '#171717',
          sunken: '#0C0C0C',
          card: '#141414',
        },
        accent: {
          DEFAULT: '#E8395F', // Sakura crimson-pink
          hover: '#FF4D75',
          dark: '#C72548',
          light: '#F87593',
        },
        katana: {
          heading: '#F5F1E6', // Bone-white for headings
          body: '#9A9690',    // Muted warm-gray for body text
          muted: '#6E6A64',
          border: 'rgba(255, 255, 255, 0.04)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'neu-sm': '12px',
        'neu': '20px',
        'neu-lg': '26px',
        'neu-xl': '32px',
      },
      boxShadow: {
        // Soft Neumorphic dual shadows on near-black #0A0A0A
        'neu-raised': '7px 7px 18px rgba(0, 0, 0, 0.92), -5px -5px 14px rgba(255, 255, 255, 0.03)',
        'neu-raised-sm': '4px 4px 10px rgba(0, 0, 0, 0.88), -3px -3px 8px rgba(255, 255, 255, 0.025)',
        'neu-raised-lg': '12px 12px 28px rgba(0, 0, 0, 0.95), -10px -10px 22px rgba(255, 255, 255, 0.035)',
        'neu-inset': 'inset 4px 4px 8px rgba(0, 0, 0, 0.92), inset -3px -3px 7px rgba(255, 255, 255, 0.03)',
        'neu-inset-sm': 'inset 2px 2px 5px rgba(0, 0, 0, 0.9), inset -2px -2px 5px rgba(255, 255, 255, 0.025)',
        'neu-pressed': 'inset 3px 3px 6px rgba(0, 0, 0, 0.95), inset -2px -2px 4px rgba(255, 255, 255, 0.02)',
        // Sakura Glows
        'glow-sakura': '0 0 24px rgba(232, 57, 95, 0.4)',
        'glow-sakura-lg': '0 0 45px rgba(232, 57, 95, 0.55)',
      },
      backgroundImage: {
        'paper-grain': 'radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 0)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
