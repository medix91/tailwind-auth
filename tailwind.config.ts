import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // blue-600
          light: '#38BDF8',   // cyan-400
          dark: '#1E40AF',    // blue-800
        },
        gradient: {
          start: '#38BDF8', // cyan-400
          end: '#2563EB',   // blue-600
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'auth-gradient': 'linear-gradient(to right, #38BDF8, #2563EB)',
      },
    },
  },
  plugins: [],
}
export default config
