/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0A1F44', 800: '#0F2A5C', 700: '#163A75' },
        aqua: { 400: '#2DD4D4', 500: '#14B8C4', 600: '#0E9AA7', 700: '#0B7A85' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif'] },
    },
  },
  plugins: [],
}
