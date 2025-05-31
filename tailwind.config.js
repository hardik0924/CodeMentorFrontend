/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',    // Purple
        secondary: '#9333EA',  // Lighter Purple
        accent: '#6D28D9',     // Darker Purple
        success: '#10B981',    // Green
        warning: '#F59E0B',    // Amber
        error: '#EF4444',      // Red
        background: '#1E1B4B', // Navy Purple
        card: '#2E1065',       // Darker Purple
      },
    },
  },
  plugins: [],
};