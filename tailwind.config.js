/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        primary: "#FF00FF",
        secondary: "#00FFFF",
        text: "#F5F5F5",
        card: "#1A1A1A",
        success: "#00FF9C",
        warning: "#FFEB3B",
        error: "#FF1744",
      },
      boxShadow: {
        glow: "0 0 15px #FF00FF",
        glowHover: "0 0 20px #FF00FF, 0 0 30px #FF00FF",
      },
      animation: {
        'pattern-shift': 'pattern-shift 40s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        'pattern-shift': {
          '0%': { backgroundPosition: '0 0, 20px 20px' },
          '100%': { backgroundPosition: '800px 800px, 820px 820px' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
