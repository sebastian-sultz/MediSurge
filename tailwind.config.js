// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        // Core Blues (Sleek + Futuristic)
        primary: '#003D5B',         // Deep navy (trust, authority)
        secondary: '#0077B6',       // Bold medical blue (confidence)
        accent: '#00B4D8',          // Electric teal (modern, eye-catching)
        accent2: '#80E8FF',         // Bright cyan (hover effects, highlights)
        accent3: '#00F5D4',         // Neon aqua (vibrant accents, futuristic)

        // Backgrounds (Ultra-Clean + Modern)
        background: '#FAFDFF',      // Pure white with a hint of blue (sterile)
        surface: '#EDF7FF',         // Frosted glass effect (cards, UI panels)
        border: '#C2E4FF',         // Soft glowing border (modern feel)

        // Text (High Contrast + Readability)
        text: '#0A1A2F',           // Almost black navy (serious, professional)
        textSecondary: '#4A6B8A',  // Muted tech-blue (secondary text)

        // Status Colors (High-Tech Alerts)
        success: '#00C853',        // Neon green (confirmation, success)
        warning: '#FFAB00',        // Bright amber (warnings)
        error: '#FF3D00',          // Intense red (critical alerts)
        info: '#00B0FF',           // Vivid sky blue (notifications)

        // Special Effects (Futuristic)
        glow: 'rgba(0, 180, 216, 0.15)',  // Soft blue glow (hover/active states)
        sterile: '#F0FAFF',        // Ultra-light blue (clean zones)
        highlight: '#E6F7FF',      // Bright selection (interactive elements)
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};